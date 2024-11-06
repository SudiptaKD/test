// src/store.js
import { create } from 'zustand';
import { Product } from '@/types/types';

interface StoreState {
    data: Product[]; 
    setData: (data: Product[]) => void; 
  }

const useProductStore = create<StoreState>((set) => ({
    data: [],
    setData: (data : Product[]) => set({ data }),
  
}));

export default useProductStore;
