"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import useCartStore from "@/store/cartStore";


export function SiteHeader() {

  const items = useCartStore((state) => state.items);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              ShareTrip
            </Link>
          </div>
          <div className="ml-4 flex items-center space-x-4">
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}