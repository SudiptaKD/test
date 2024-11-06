"use client";
//import { Button } from "@/components/ui/button";
import { Product } from "@/types/types";
import useCartStore from "@/store/cartStore";
import Image from "next/image";
import { Eye, Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useState } from "react";


export function ProductCard({ product }: { product: Product }) {
  const { addToCart, items, removeFromCart, setQty } = useCartStore((state) => state);
  const cartItem = items.find(item => item.id === product.id);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false); 


  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(product.id);
    } else {
      setQty(product.id, newQuantity);
    }
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
  };

  const openQuickView = () => {
    setIsQuickViewOpen(true);
  };

  return (


    <div className="group relative shadow-lg rounded-lg overflow-hidden p-1">
      <div className="relative w-full h-64 bg-gray-200 rounded-lg">
        <Image
          src={product.images[0]}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />


        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 bg-black bg-opacity-40 transition-opacity duration-300">
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className=" hover:bg-opacity-100">
              <Heart className="w-7 h-7" />
            </button>
          </div>
          {cartItem ? (
            <>
              <div className=" mt-28 flex justify-between bg-green-600 text-white rounded-lg w-[190px] ">
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="px-2 py-2 text-sm rounded-l-lg  bg-green-600 hover:bg-green-700"
                >
                  <Trash2 />
                </button>
                {/* <button
                  onClick={() => handleQuantityChange(cartItem.quantity - 1)}
                  className="px-3 py-2 text-sm rounded-l-lg bg-green-600 hover:bg-green-700"
                >
                  -
                </button> */}

                <p className="text-sm py-2 font-bold">{cartItem.quantity}{" "}Added in Cart</p>
                <button
                  onClick={() => handleQuantityChange(cartItem.quantity + 1)}
                  className="px-3 py-2 text-sm rounded-r-lg bg-green-600 hover:bg-green-700"
                >
                  +
                </button>
              </div>
            </>
          ) : (
            <button onClick={() => addToCart(product)} className=" mt-28 flex items-center px-10 w-[190px] py-2 text-white rounded-lg bg-white bg-opacity-20 hover:bg-opacity-30">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </button>
          )}
          <button onClick={openQuickView} className="flex items-center px-10 w-[190px] py-2 text-white rounded-lg bg-white bg-opacity-20 hover:bg-opacity-30">
            <Eye className="w-5 h-5 mr-2" />
            Quick View
          </button>
        </div>
      </div>

      <div className="p-4 bg-white">
        <p className="text-gray-600">{product.brand}</p>

        <h2 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h2>
        <p className="text-blue-600 font-semibold text-lg">${product.price}</p>
      </div>
      {isQuickViewOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-3/4 md:w-1/2">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-black">{product.title}</h2>
              <button
                onClick={closeQuickView}
                className="text-xl font-bold text-red-500"
              >
                &times;
              </button>
            </div>
            <div className="mt-4">
              <Image
                src={product.images[0]}
                alt={product.title}
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-black">{product.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-xl font-bold text-black">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}