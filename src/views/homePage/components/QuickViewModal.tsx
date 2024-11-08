import Button from "@/components/ui/button";
import useCartStore from "@/store/cartStore";
import { Product } from "@/types/types";
import Image from "next/image";
import { CartButtons } from "./CartButtons";

export function QuickViewModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const { addToCart, items, removeFromCart, setQty } = useCartStore((state) => state);

  const cartItem = items.find((item) => item.id === product.id);
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) removeFromCart(product.id);
    else setQty(product.id, newQuantity);
  };
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-3/4 md:w-1/2">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-black">{product.title}</h2>
          <Button variant="danger" onClick={onClose} className="text-xl font-bold text-red-500">&times;</Button>
        </div>
        <div className="mt-4">
          <Image src={product.images[0]} alt={product.title} width={400} height={400} className="object-contain" />
        </div>
        <p className="mt-4 text-black">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-xl font-bold text-black">${product.price}</p>
          <CartButtons
            buttonVarient="primary"
            cartItem={cartItem}
            onAdd={() => addToCart(product)}
            onRemove={() => removeFromCart(product.id)}
            onUpdateQuantity={handleQuantityChange}
          />
        </div>
      </div>
    </div>
  );
}
