import { CartItem as CartItemType } from "@/types/types"; // Ensure this points to your actual types
import useCartStore from "@/store/cartStore";
import Image from "next/image";

export default function CartItem({ item }: { item: CartItemType }) {
  const { removeFromCart, updateQty } = useCartStore((state) => state);

  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow">
      <Image
        src={item.image}
        alt={item.title}
        width={80}
        height={80}
        className="rounded-md mr-4"
      />
      <div className="flex-grow">
        <h2 className="text-lg font-semibold text-black">{item.title}</h2>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => updateQty("decrement", item.id)}
            className="px-2 py-1 border rounded-l text-black"
          >
            -
          </button>
          <span className="mx-2 text-black font-semibold">{item.quantity}</span>
          <button
            onClick={() => updateQty("increment", item.id)}
            className="px-2 py-1 border rounded-r text-black"
          >
            +
          </button>
        </div>
      </div>
      <button
        className="text-red-500 ml-4 hover:underline"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>
  );
}
