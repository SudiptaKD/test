import { Trash2, ShoppingCart } from "lucide-react";

export function CartButtons({
  cartItem,
  onAdd,
  onRemove,
  onUpdateQuantity,
}: {
  cartItem: { quantity: number } | undefined;
  onAdd: () => void;
  onRemove: () => void;
  onUpdateQuantity: (newQuantity: number) => void;
}) {
  return cartItem ? (
    <div className="mt-28 flex justify-between bg-green-600 text-white rounded-lg w-[190px]">
      <button onClick={onRemove} className="px-2 py-2 text-sm bg-green-600 hover:bg-green-700 rounded-l-lg">
        <Trash2 />
      </button>
      <p className="text-sm py-2 font-bold">{cartItem.quantity} Added in Cart</p>
      <button
        onClick={() => onUpdateQuantity(cartItem.quantity + 1)}
        className="px-3 py-2 text-sm bg-green-600 hover:bg-green-700 rounded-r-lg"
      >
        +
      </button>
    </div>
  ) : (
    <button onClick={onAdd} className="action-button mt-28 flex items-center px-10 w-[190px] py-2 text-white rounded-lg bg-white bg-opacity-20 hover:bg-opacity-30">
      <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
    </button>
  );
}
