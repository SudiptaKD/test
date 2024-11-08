"use client";
import { Product } from "@/types/types";
import useCartStore from "@/store/cartStore";
import { Heart, Eye } from "lucide-react";
import { useState } from "react";
import { QuickViewModal } from "./QuickViewModal";
import { CartButtons } from "./CartButtons";
import { ProductImage } from "./ProductImage";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, items, removeFromCart, setQty } = useCartStore((state) => state);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const cartItem = items.find((item) => item.id === product.id);
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) removeFromCart(product.id);
    else setQty(product.id, newQuantity);
  };

  return (
    <div className="group relative shadow-lg rounded-lg overflow-hidden p-1">      
      <ProductImage src={product.images[0]} alt={product.title}>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Heart className="w-7 h-7 cursor-pointer" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 bg-black bg-opacity-40 transition-opacity duration-300">
          <CartButtons
            cartItem={cartItem}
            onAdd={() => addToCart(product)}
            onRemove={() => removeFromCart(product.id)}
            onUpdateQuantity={handleQuantityChange}
          />
          <button onClick={() => setIsQuickViewOpen(true)} className="action-button flex items-center px-10 w-[190px] py-2 text-white rounded-lg bg-white bg-opacity-20 hover:bg-opacity-30">
            <Eye className="w-5 h-5 mr-2" /> Quick View
          </button>
        </div>
      </ProductImage>

      <div className="p-4 bg-white">
        <p className="text-gray-600">{product.brand}</p>
        <h2 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h2>
        <p className="text-blue-600 font-semibold text-lg">${product.price}</p>
      </div>

      {isQuickViewOpen && (
        <QuickViewModal product={product} onClose={() => setIsQuickViewOpen(false)} />
      )}
    </div>
  );
}