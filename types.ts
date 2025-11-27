export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number; // Price before discount
  image: string;
  description: string;
  rating: number;
  reviews: number;
  category: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
  maps?: {
    uri: string;
    title: string;
    placeId?: string;
  };
}

export interface SearchResult {
  text: string;
  groundingChunks?: GroundingChunk[];
}

export enum ProcessingState {
  IDLE = 'IDLE',
  PROCESSING = 'PROCESSING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}