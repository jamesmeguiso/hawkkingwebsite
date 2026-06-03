export interface Product {
  id: string;
  name: string;
  category: 'ladders' | 'power_tools' | 'hand_tools' | 'kits' | 'accessories';
  specifications: string[];
  description: string;
  price: number | 'on_request';
  originalPrice?: number;
  badge?: string;
  emoji: string;
  rating: number;
  reviewsCount: number;
  images?: string[];
  features?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  stars: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'delivery' | 'product' | 'warranty' | 'general';
}
