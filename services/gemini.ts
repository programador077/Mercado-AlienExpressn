import { GoogleGenAI, Tool } from "@google/genai";
import { GroundingChunk, SearchResult, Product } from "../types";

const getClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

// Image Editing Service (Gemini 2.5 Flash Image)
export const editProductImage = async (
  imageBase64: string,
  prompt: string
): Promise<string> => {
  const ai = getClient();
  
  // Clean base64 string if it has prefix
  const cleanBase64 = imageBase64.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, "");

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/png',
              data: cleanBase64,
            },
          },
          { text: prompt },
        ],
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData && part.inlineData.data) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("No image generated.");
  } catch (error) {
    console.error("Image edit failed:", error);
    throw error;
  }
};

// Chatbot Service (Gemini 3 Pro Preview)
export const chatWithAssistant = async (
  history: { role: string; parts: { text: string }[] }[],
  message: string
): Promise<string> => {
  const ai = getClient();
  const chat = ai.chats.create({
    model: 'gemini-3-pro-preview',
    history: history,
    config: {
      systemInstruction: "Eres un asistente de compras útil y experto para Mercado AlienExpress, una plataforma de e-commerce exclusiva para Argentina. Los envíos se realizan únicamente por Andreani o Oca. Ayuda a los usuarios a encontrar productos, comparar precios y entender características. Responde siempre en español. Mantén las respuestas concisas y amigables.",
    },
  });

  const response = await chat.sendMessage({ message });
  return response.text || "Tengo problemas para pensar en este momento.";
};

// Search Grounding Service (Gemini 2.5 Flash)
export const searchMarketTrends = async (query: string): Promise<SearchResult> => {
  const ai = getClient();
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Busca información de mercado actual para: ${query}. Céntrate en el mercado argentino. Resume hallazgos clave, precios estimados en pesos argentinos y disponibilidad.`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "No se encontró información.";
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks as GroundingChunk[] || [];

    return { text, groundingChunks: chunks };
  } catch (error) {
    console.error("Search grounding failed:", error);
    return { text: "Error al buscar datos del mercado. Por favor intenta de nuevo." };
  }
};

// Maps Grounding Service (Gemini 2.5 Flash)
export const findLocalStores = async (query: string, latitude?: number, longitude?: number): Promise<SearchResult> => {
  const ai = getClient();

  const toolConfig: any = {};
  if (latitude && longitude) {
    toolConfig.retrievalConfig = {
      latLng: {
        latitude,
        longitude
      }
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Encuentra lugares relacionados con: ${query} en Argentina. Lista sus nombres e información básica.`,
      config: {
        tools: [{ googleMaps: {} }],
        toolConfig: Object.keys(toolConfig).length > 0 ? toolConfig : undefined,
      },
    });

    const text = response.text || "No se encontraron lugares.";
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks as GroundingChunk[] || [];

    return { text, groundingChunks: chunks };
  } catch (error) {
    console.error("Maps grounding failed:", error);
    return { text: "Error al buscar tiendas locales. Por favor intenta de nuevo." };
  }
};

// Smart Shopping Analysis (Gemini 2.5 Flash)
export const analyzeShoppingDeals = async (products: Product[]): Promise<string> => {
  const ai = getClient();

  // Create a summary string of the products for the AI
  const productSummary = products.map(p => 
    `- ${p.title}: Precio Actual $${p.price}, Precio Original $${p.originalPrice}, Categoría: ${p.category}`
  ).join('\n');

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Actúa como un experto en compras inteligente para Mercado AlienExpress Argentina. Analiza esta lista de productos que están en oferta (tienen descuento). 
      
      Lista de productos:
      ${productSummary}
      
      Genera un párrafo corto y muy persuasivo (máximo 3 oraciones) destacando las mejores oportunidades de compra de esta lista. Menciona productos específicos que sean "gangas" (bargains). Usa un tono entusiasta y argentino. Usa emojis.`,
    });

    return response.text || "¡Mirá estas ofertas increíbles! Aprovechá los descuentos antes de que se agoten. 🚀";
  } catch (error) {
    console.error("Deal analysis failed:", error);
    return "¡Explorá nuestras ofertas destacadas del día! Precios increíbles en tecnología y hogar. 🔥";
  }
};