// store/favoriteStore.ts
import {create} from 'zustand';
import { Product } from '@/types/types';
import toast from 'react-hot-toast';

type FavoriteStore = {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: number) => void;
  clearFavorites: () => void;
};

const useFavoriteStore = create<FavoriteStore>((set) => ({
  favorites: [],
  addToFavorites: (product: Product) => 
    set((state) => {
      if (!state.favorites.some((item) => item.id === product.id)) {
        toast.success("Favourite Added");
        return { favorites: [...state.favorites, product] };
      }
      return state;
    }),
  removeFromFavorites: (productId: number) => {
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== productId),
    }))
    toast.success("Favourite Removed");
},
  clearFavorites: () => set({ favorites: [] }),
}));

export default useFavoriteStore;
