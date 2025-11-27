import React, { useState, useRef } from 'react';
import { Camera, Upload, Wand2, Download, AlertCircle, CheckCircle2 } from 'lucide-react';
import { editProductImage } from '../services/gemini';
import { ProcessingState } from '../types';

export const SellerStudio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState<ProcessingState>(ProcessingState.IDLE);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setGeneratedImage(null);
        setStatus(ProcessingState.IDLE);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!selectedImage || !prompt) return;

    setStatus(ProcessingState.PROCESSING);
    try {
      const result = await editProductImage(selectedImage, prompt);
      setGeneratedImage(result);
      setStatus(ProcessingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(ProcessingState.ERROR);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Seller Studio</h1>
        <p className="text-gray-600 mt-2">Mejorá tus publicaciones con IA Generativa. Subí una foto y decile a Gemini cómo mejorarla.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Input */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">1. Subir Foto del Producto</label>
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-secondary hover:bg-gray-50 transition-all"
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*" 
                onChange={handleImageUpload} 
              />
              {selectedImage ? (
                <div className="relative w-full h-64">
                    <img src={selectedImage} alt="Original" className="w-full h-full object-contain rounded-lg" />
                    <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Original</div>
                </div>
              ) : (
                <>
                  <Upload className="h-10 w-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Click para subir o arrastrar imagen</p>
                </>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">2. Describir Cambios</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ej: 'Agregar fondo de mesa de madera', 'Hacer que parezca de cine', 'Quitar la sombra'"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none h-24 resize-none"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={!selectedImage || !prompt || status === ProcessingState.PROCESSING}
            className={`w-full py-3 px-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all ${
              !selectedImage || !prompt || status === ProcessingState.PROCESSING
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-secondary hover:bg-blue-800 shadow-lg hover:shadow-xl'
            }`}
          >
            {status === ProcessingState.PROCESSING ? (
              <>Generando...</>
            ) : (
              <>
                <Wand2 size={18} /> Generar Edición
              </>
            )}
          </button>
           
           {status === ProcessingState.ERROR && (
               <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg flex items-center gap-2 text-sm">
                   <AlertCircle size={16} /> Error al generar la imagen. Intenta de nuevo.
               </div>
           )}
        </div>

        {/* Right Column: Output */}
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col items-center justify-center min-h-[500px]">
          {status === ProcessingState.SUCCESS && generatedImage ? (
            <div className="w-full flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                     <h3 className="font-bold text-gray-800 flex items-center gap-2">
                         <CheckCircle2 className="text-green-500" size={20} /> Resultado
                     </h3>
                     <a href={generatedImage} download="mercado-alien-edit.png" className="text-secondary hover:underline text-sm flex items-center gap-1">
                         <Download size={14} /> Descargar
                     </a>
                </div>
                <div className="flex-grow bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-white rounded-lg border border-gray-200 p-2 flex items-center justify-center overflow-hidden">
                    <img src={generatedImage} alt="Generated" className="max-w-full max-h-[500px] object-contain shadow-lg" />
                </div>
                 <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200 text-sm text-gray-500 italic">
                    " {prompt} "
                 </div>
            </div>
          ) : (
            <div className="text-center text-gray-400">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera size={32} className="text-gray-400" />
              </div>
              <p className="font-medium">Tu obra maestra aparecerá aquí</p>
              <p className="text-sm mt-1">Listo para la magia de Gemini</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};