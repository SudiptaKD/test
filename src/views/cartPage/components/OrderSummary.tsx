import { CartItem as CartItemType } from "@/types/types";

export default function OrderSummary({ items }: { items: CartItemType[] }) {
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-black mb-4">Order Summary</h2>
      <div className="flex justify-between mb-2 text-black">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t text-black">
        <span>Total</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <button className="w-full mt-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700">
        Proceed to Checkout
      </button>
    </div>
  );
}
