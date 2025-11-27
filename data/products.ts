import { Product } from '../types';

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Samsung Galaxy S23 Ultra 5G 256GB',
    price: 1424999, // 25% OFF
    originalPrice: 1899999,
    image: 'https://picsum.photos/400/400?random=1',
    description: 'El smartphone definitivo con cámara de 200MP y S Pen integrado. Pantalla Dynamic AMOLED 2X de 6.8 pulgadas a 120Hz. Procesador Snapdragon 8 Gen 2 for Galaxy.',
    rating: 4.9,
    reviews: 1240,
    category: 'Celulares'
  },
  {
    id: '2',
    title: 'Notebook HP Pavilion 15.6" Core i7',
    price: 1450000,
    image: 'https://picsum.photos/400/400?random=2',
    description: 'Potencia para trabajar y jugar. 16GB RAM, 512GB SSD. Gráficos Intel Iris Xe. Windows 11 Home preinstalado.',
    rating: 4.7,
    reviews: 350,
    category: 'Computación'
  },
  {
    id: '3',
    title: 'Smart TV 55" 4K UHD Samsung',
    price: 674999, // 25% OFF
    originalPrice: 899999,
    image: 'https://picsum.photos/400/400?random=3',
    description: 'Colores cristalinos y resolución 4K real. Smart Hub incluido. Procesador Crystal 4K. HDR y diseño AirSlim ultra delgado.',
    rating: 4.6,
    reviews: 890,
    category: 'Electrónica'
  },
  {
    id: '4',
    title: 'Auriculares Sony WH-1000XM5',
    price: 549999,
    image: 'https://picsum.photos/400/400?random=4',
    description: 'La mejor cancelación de ruido del mercado. Batería de 30hs. Llamadas manos libres cristalinas. Conexión multipunto.',
    rating: 4.8,
    reviews: 2100,
    category: 'Audio'
  },
  {
    id: '5',
    title: 'Zapatillas Nike Air Zoom Pegasus 40',
    price: 189000,
    image: 'https://picsum.photos/400/400?random=5',
    description: 'Reactividad y soporte para tus carreras diarias. Malla técnica transpirable y unidad Zoom Air.',
    rating: 4.5,
    reviews: 560,
    category: 'Deportes'
  },
  {
    id: '6',
    title: 'Camiseta Selección Argentina 3 Estrellas',
    price: 120000,
    image: 'https://picsum.photos/400/400?random=6',
    description: 'La camiseta de los campeones del mundo. Original. Tecnología AEROREADY que absorbe la humedad.',
    rating: 5.0,
    reviews: 10000,
    category: 'Deportes'
  },
  {
    id: '7',
    title: 'Juego de Sábanas Queen Size 1000 Hilos',
    price: 85000,
    image: 'https://picsum.photos/400/400?random=7',
    description: 'Suavidad premium y durabilidad garantizada. Algodón egipcio de fibra larga. Hipoalergénicas.',
    rating: 4.4,
    reviews: 120,
    category: 'Hogar'
  },
  {
    id: '8',
    title: 'Taladro Percutor Inalámbrico Dewalt',
    price: 240000, // 25% OFF
    originalPrice: 320000,
    image: 'https://picsum.photos/400/400?random=8',
    description: 'Potencia industrial en tus manos. Incluye 2 baterías de litio 20V MAX, cargador y maletín.',
    rating: 4.9,
    reviews: 430,
    category: 'Herramientas'
  },
  {
    id: '9',
    title: 'Set de Maquillaje Profesional Completo',
    price: 150000,
    image: 'https://picsum.photos/400/400?random=9',
    description: 'Valija con sombras, labiales y brochas de alta calidad. Cruelty free. Incluye espejo.',
    rating: 4.3,
    reviews: 85,
    category: 'Belleza'
  },
  {
    id: '10',
    title: 'Reloj Inteligente Garmin Fenix 7',
    price: 980000,
    image: 'https://picsum.photos/400/400?random=10',
    description: 'Reloj multideporte con GPS y carga solar. Mapas TopoActive, métricas de rendimiento avanzadas.',
    rating: 4.8,
    reviews: 150,
    category: 'Electrónica'
  },
  // Productos existentes 11-50 (resumidos o mantenidos, agregando nuevos abajo)
  {
    id: '11',
    title: 'Apple iPad Air 5ta Gen 64GB',
    price: 1100000,
    image: 'https://picsum.photos/400/400?random=11',
    description: 'Chip M1, pantalla Liquid Retina de 10.9 pulgadas. Compatible con Apple Pencil 2da gen.',
    rating: 4.9,
    reviews: 670,
    category: 'Computación'
  },
  {
    id: '12',
    title: 'Silla Gamer Ergonómica Reclinable',
    price: 187500, // 25% OFF
    originalPrice: 250000,
    image: 'https://picsum.photos/400/400?random=12',
    description: 'Comodidad extrema para largas sesiones. Apoyabrazos 4D, respaldo reclinable 180°.',
    rating: 4.2,
    reviews: 210,
    category: 'Muebles'
  },
  {
    id: '13',
    title: 'Cafetera Expreso Oster Primalatte',
    price: 380000,
    image: 'https://picsum.photos/400/400?random=13',
    description: 'Prepara capuchinos, lattes y espressos automáticamente. Bomba italiana de 15 bares.',
    rating: 4.5,
    reviews: 890,
    category: 'Electrodomésticos'
  },
  {
    id: '14',
    title: 'Licuadora Philips Serie 5000',
    price: 95000,
    image: 'https://picsum.photos/400/400?random=14',
    description: 'Motor potente de 1200W y tecnología ProBlend 6. Jarra de vidrio de 2L.',
    rating: 4.4,
    reviews: 320,
    category: 'Electrodomésticos'
  },
  {
    id: '15',
    title: 'Microondas Samsung Digital 23L',
    price: 180000,
    image: 'https://picsum.photos/400/400?random=15',
    description: 'Interior cerámico enamel, fácil de limpiar. Sistema TDS de triple distribución.',
    rating: 4.6,
    reviews: 540,
    category: 'Electrodomésticos'
  },
  {
    id: '16',
    title: 'Parlante Portátil JBL Flip 6',
    price: 108750, // 25% OFF
    originalPrice: 145000,
    image: 'https://picsum.photos/400/400?random=16',
    description: 'Sonido potente, resistente al agua y polvo IP67. Hasta 12 horas de reproducción.',
    rating: 4.8,
    reviews: 1500,
    category: 'Audio'
  },
  {
    id: '17',
    title: 'Joystick Sony PS5 DualSense',
    price: 115000,
    image: 'https://picsum.photos/400/400?random=17',
    description: 'Retroalimentación háptica y gatillos adaptativos. Micrófono integrado.',
    rating: 4.9,
    reviews: 2300,
    category: 'Gaming'
  },
  {
    id: '18',
    title: 'Consola Nintendo Switch OLED',
    price: 590000,
    image: 'https://picsum.photos/400/400?random=18',
    description: 'Pantalla OLED de 7 pulgadas. Soporte ajustable ancho, base con puerto LAN.',
    rating: 4.8,
    reviews: 980,
    category: 'Gaming'
  },
  {
    id: '19',
    title: 'Monitor Gamer Curvo 24" 144Hz',
    price: 320000,
    image: 'https://picsum.photos/400/400?random=19',
    description: 'Tasa de refresco de 144Hz. Tiempo de respuesta 1ms. Panel VA.',
    rating: 4.5,
    reviews: 450,
    category: 'Computación'
  },
  {
    id: '20',
    title: 'Teclado Mecánico Redragon Kumara',
    price: 65000,
    image: 'https://picsum.photos/400/400?random=20',
    description: 'Switches azules, retroiluminación RGB, formato TKL compacto.',
    rating: 4.4,
    reviews: 1200,
    category: 'Periféricos'
  },
  // ... (Del 21 al 50 se mantienen, agrego nuevos a partir del 51)
  {
    id: '21', title: 'Mouse Logitech G502 Hero', price: 75000, image: 'https://picsum.photos/400/400?random=21', description: 'Sensor HERO 25K.', rating: 4.9, reviews: 3400, category: 'Periféricos'
  },
  {
    id: '22', title: 'Disco Sólido SSD Kingston 960GB', price: 85000, image: 'https://picsum.photos/400/400?random=22', description: 'Mejora la velocidad de tu PC.', rating: 4.7, reviews: 890, category: 'Computación'
  },
  {
    id: '23', title: 'Memoria RAM Fury Beast 16GB', price: 60000, image: 'https://picsum.photos/400/400?random=23', description: 'Alto rendimiento.', rating: 4.8, reviews: 650, category: 'Computación'
  },
  {
    id: '24', title: 'Placa de Video NVIDIA RTX 3060', price: 550000, image: 'https://picsum.photos/400/400?random=24', description: '12GB GDDR6.', rating: 4.8, reviews: 420, category: 'Computación'
  },
  {
    id: '25', title: 'Gabinete Gamer Vidrio Templado', price: 110000, image: 'https://picsum.photos/400/400?random=25', description: 'Con 4 coolers RGB.', rating: 4.3, reviews: 180, category: 'Computación'
  },
  {
    id: '26', title: 'Fuente 750W 80+ Gold', price: 140000, image: 'https://picsum.photos/400/400?random=26', description: 'Certificación 80 Plus Gold.', rating: 4.6, reviews: 210, category: 'Computación'
  },
  {
    id: '27', title: 'Mochila Antirrobo USB', price: 33750, originalPrice: 45000, image: 'https://picsum.photos/400/400?random=27', description: 'Diseño inteligente 25% OFF.', rating: 4.2, reviews: 560, category: 'Accesorios'
  },
  {
    id: '28', title: 'Billetera Cuero RFID', price: 35000, image: 'https://picsum.photos/400/400?random=28', description: 'Protección RFID.', rating: 4.5, reviews: 130, category: 'Accesorios'
  },
  {
    id: '29', title: 'Lentes Ray-Ban Wayfarer', price: 180000, image: 'https://picsum.photos/400/400?random=29', description: 'Clásicos.', rating: 4.7, reviews: 890, category: 'Moda'
  },
  {
    id: '30', title: 'Perfume Dior Sauvage', price: 210000, image: 'https://picsum.photos/400/400?random=30', description: 'Fragancia masculina.', rating: 4.8, reviews: 1200, category: 'Belleza'
  },
  // Nuevos productos (51-70)
  {
    id: '51',
    title: 'Termo Stanley Clásico 1.4L',
    price: 93750, // 25% OFF
    originalPrice: 125000,
    image: 'https://picsum.photos/400/400?random=51',
    description: 'El clásico verde. Mantiene el agua caliente por 24 horas. Tapón cebador ideal para mate.',
    rating: 4.9,
    reviews: 5000,
    category: 'Hogar'
  },
  {
    id: '52',
    title: 'Set de Mate Calabaza y Alpaca',
    price: 45000,
    image: 'https://picsum.photos/400/400?random=52',
    description: 'Mate artesanal de calabaza gruesa con virola de alpaca cincelada. Incluye bombilla pico de loro.',
    rating: 4.7,
    reviews: 320,
    category: 'Hogar'
  },
  {
    id: '53',
    title: 'Freidora de Aire Digital 4L',
    price: 120000,
    originalPrice: 160000, // 25% OFF
    image: 'https://picsum.photos/400/400?random=53',
    description: 'Cocina sin aceite. Panel táctil con 8 programas preestablecidos. Canasta antiadherente.',
    rating: 4.8,
    reviews: 890,
    category: 'Electrodomésticos'
  },
  {
    id: '54',
    title: 'Drone DJI Mini 2 SE',
    price: 650000,
    image: 'https://picsum.photos/400/400?random=54',
    description: 'Ultraligero y plegable. Video QHD 2.7K. Transmisión de video de 10km. 31 min de vuelo.',
    rating: 4.9,
    reviews: 150,
    category: 'Electrónica'
  },
  {
    id: '55',
    title: 'Soporte Notebook Aluminio',
    price: 25000,
    image: 'https://picsum.photos/400/400?random=55',
    description: 'Ergonómico y ajustable en altura. Disipa el calor. Plegable y portátil.',
    rating: 4.5,
    reviews: 400,
    category: 'Computación'
  },
  {
    id: '56',
    title: 'Cámara Instax Mini 12',
    price: 135000,
    image: 'https://picsum.photos/400/400?random=56',
    description: 'Fotos instantáneas con exposición automática. Modo selfie y espejo integrado.',
    rating: 4.7,
    reviews: 600,
    category: 'Fotografía'
  },
  {
    id: '57',
    title: 'Aspiradora Robot Trapeadora',
    price: 337500, // 25% OFF
    originalPrice: 450000,
    image: 'https://picsum.photos/400/400?random=57',
    description: 'Mapeo inteligente láser. Aspira y trapea en una pasada. Control por App y voz.',
    rating: 4.6,
    reviews: 280,
    category: 'Electrodomésticos'
  },
  {
    id: '58',
    title: 'Kit Herramientas Jardinería',
    price: 35000,
    image: 'https://picsum.photos/400/400?random=58',
    description: 'Pala, rastrillo, tijera de podar y guantes. Acero inoxidable resistente al óxido.',
    rating: 4.4,
    reviews: 120,
    category: 'Jardín'
  },
  {
    id: '59',
    title: 'Mesa Ratona Estilo Industrial',
    price: 75000,
    image: 'https://picsum.photos/400/400?random=59',
    description: 'Hierro y madera maciza. Diseño moderno y robusto. Medidas 80x50x45cm.',
    rating: 4.5,
    reviews: 90,
    category: 'Muebles'
  },
  {
    id: '60',
    title: 'Pava Eléctrica Corte Mate',
    price: 45000,
    image: 'https://picsum.photos/400/400?random=60',
    description: 'Selector de temperatura para mate o café. Acero inoxidable. Corte automático.',
    rating: 4.8,
    reviews: 1200,
    category: 'Electrodomésticos'
  },
  {
    id: '61',
    title: 'Monopatín Eléctrico Plegable',
    price: 525000, // 25% OFF
    originalPrice: 700000,
    image: 'https://picsum.photos/400/400?random=61',
    description: 'Velocidad máxima 25km/h. Autonomía 30km. Frenos a disco y luces LED.',
    rating: 4.7,
    reviews: 340,
    category: 'Movilidad'
  },
  {
    id: '62',
    title: 'Gimnasio Multifunción Hogar',
    price: 850000,
    image: 'https://picsum.photos/400/400?random=62',
    description: 'Entrena todo el cuerpo. Torre de pesas de 50kg. Asiento y respaldo acolchados.',
    rating: 4.5,
    reviews: 80,
    category: 'Fitness'
  },
  {
    id: '63',
    title: 'Tablet Samsung A9+ 11"',
    price: 350000,
    image: 'https://picsum.photos/400/400?random=63',
    description: 'Pantalla inmersiva de 90Hz. 64GB almacenamiento expandible. Ideal para streaming y estudio.',
    rating: 4.6,
    reviews: 450,
    category: 'Computación'
  },
  {
    id: '64',
    title: 'Campera Inflable Térmica',
    price: 90000,
    originalPrice: 120000, // 25% OFF
    image: 'https://picsum.photos/400/400?random=64',
    description: 'Ultra liviana y abrigada. Resistente al agua. Capucha desmontable.',
    rating: 4.4,
    reviews: 230,
    category: 'Moda'
  },
  {
    id: '65',
    title: 'Set Asado Tabla y Cuchillo',
    price: 40000,
    image: 'https://picsum.photos/400/400?random=65',
    description: 'Tabla de algarrobo con canaleta. Cuchillo y tenedor de acero inoxidable con mango de madera.',
    rating: 4.8,
    reviews: 670,
    category: 'Hogar'
  },
  {
    id: '66',
    title: 'Ventilador de Pie Industrial',
    price: 85000,
    image: 'https://picsum.photos/400/400?random=66',
    description: 'Potencia 200W. Palas metálicas. 3 velocidades. Base pesada anti vuelco.',
    rating: 4.5,
    reviews: 310,
    category: 'Electrodomésticos'
  },
  {
    id: '67',
    title: 'Parrilla Eléctrica Portátil',
    price: 112500, // 25% OFF
    originalPrice: 150000,
    image: 'https://picsum.photos/400/400?random=67',
    description: 'Ideal para balcones. Superficie antiadherente. Tapa de vidrio para cocción uniforme.',
    rating: 4.3,
    reviews: 190,
    category: 'Hogar'
  },
  {
    id: '68',
    title: 'Botines Fútbol 5 Pro',
    price: 95000,
    image: 'https://picsum.photos/400/400?random=68',
    description: 'Suela de caucho antideslizante. Capellada sintética texturizada para mejor control.',
    rating: 4.6,
    reviews: 410,
    category: 'Deportes'
  },
  {
    id: '69',
    title: 'Smartwatch Reloj Inteligente Eco',
    price: 45000,
    image: 'https://picsum.photos/400/400?random=69',
    description: 'Notificaciones, pasos, ritmo cardíaco. Compatible con Android y iPhone. Malla de silicona.',
    rating: 4.1,
    reviews: 850,
    category: 'Electrónica'
  },
  {
    id: '70',
    title: 'Aro de Luz LED 26cm Trípode',
    price: 25000,
    image: 'https://picsum.photos/400/400?random=70',
    description: '3 tonos de luz (fría, neutra, cálida). Regulación de intensidad. Soporte para celular flexible.',
    rating: 4.4,
    reviews: 620,
    category: 'Accesorios'
  }
];
