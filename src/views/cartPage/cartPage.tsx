"use client";
import useCartStore from "@/store/cartStore";
import CartItem from "./components/CartItem";
import OrderSummary from "./components/OrderSummary";

export default function CartUI() {
  const { items } = useCartStore((state) => state);

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Your Cart ({items.reduce((sum, item) => sum + item.quantity, 0)})
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {items.length > 0 ? (
              items.map((item) => <CartItem key={item.id} item={item} />)
            ) : (
              <p className="text-gray-500">Your cart is empty.</p>
            )}
          </div>
          <OrderSummary items={items} />
        </div>
      </main>
    </div>
  );
}
