import useCartStore from "@/store/cartStore";
import Image from "next/image";
import { CartItemType } from "@/types/types";
import Button from "@/components/ui/button";

export default function CartItem({ item }: {item :CartItemType}) {
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
          <Button onClick={() => updateQty("decrement", item.id)} variant="secondary">
            -
          </Button>
          <span className="mx-2 text-black font-semibold">{item.quantity}</span>
          <Button onClick={() => updateQty("increment", item.id)} variant="secondary">
            +
          </Button>
        </div>
      </div>
      <Button onClick={() => removeFromCart(item.id)} variant="danger" className="ml-4">
        Remove
      </Button>
    </div>
  );
}
