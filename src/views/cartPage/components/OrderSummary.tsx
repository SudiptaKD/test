import { CartItemType } from "@/types/types";
import Button from "@/components/ui/button";

export default function OrderSummary({ items } : {items : CartItemType[]}) {
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
      <Button fullWidth variant="primary" className="mt-6">
        Proceed to Checkout
      </Button>
    </div>
  );
}

