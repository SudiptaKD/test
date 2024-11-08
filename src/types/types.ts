
  
  export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    images: string[];
    brand:  string;
  };

  export interface CartItem {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
  }
  