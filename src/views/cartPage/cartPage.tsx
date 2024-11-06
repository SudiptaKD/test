"use client";
//import { Button } from "@/components/ui/button";
import useCartStore from "@/store/cartStore";
import Image from "next/image";

export default function CartUI() {
  const { items, removeFromCart, updateQty } = useCartStore((state) => state);
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = subtotal 

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Your Cart({items.reduce((sum, i) => sum + i.quantity, 0)})
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white p-4 mb-4 rounded-lg shadow"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="rounded-md mr-4"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold text-black">
                    {item.title}
                  </h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2 text-black">
                    <button
                      onClick={() => updateQty("decrement", item.id)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQty("increment", item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button className="text-black"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-black mb-4">
                Order Summary
              </h2>
              <div className="flex justify-between mb-2 text-black">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t text-black">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="w-full mt-6 text-black">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}