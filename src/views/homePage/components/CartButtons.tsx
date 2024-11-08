import Button from "@/components/ui/button";
import { Trash2, ShoppingCart } from "lucide-react";

export function CartButtons({
  buttonVarient,
  cartItem,
  onAdd,
  onRemove,
  onUpdateQuantity,
}: {
  buttonVarient?: "glass" | "primary" | "secondary" | "danger"
  cartItem: { quantity: number } | undefined;
  onAdd: () => void;
  onRemove: () => void;
  onUpdateQuantity: (newQuantity: number) => void;
}) {
  return cartItem ? (
    <div className="mt-28 flex justify-between bg-green-600 text-white rounded-lg w-[190px]">
      <Button variant={buttonVarient || "primary"} onClick={onRemove} className="px-1 py-2 text-sm bg-green-600 hover:bg-green-700 rounded-l-lg">
        <Trash2 />
      </Button>
      <p className="text-sm py-3 ">{cartItem.quantity} Added in Cart</p>
      <Button
        variant={buttonVarient || "primary"}
        onClick={() => onUpdateQuantity(cartItem.quantity + 1)}
        className="px-2 py-2 text-sm bg-green-600 hover:bg-green-700 rounded-r-lg"
      >
        +
      </Button>
    </div>
  ) : (
    <Button
      variant={buttonVarient || "glass"}
      onClick={onAdd} className="action-button mt-28 flex items-center px-10 w-[190px] py-2  rounded-lg ">
      <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
    </Button>
  );
}
