import { Product } from "@/types/types";
import Image from "next/image";

export function QuickViewModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-3/4 md:w-1/2">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-black">{product.title}</h2>
          <button onClick={onClose} className="text-xl font-bold text-red-500">&times;</button>
        </div>
        <div className="mt-4">
          <Image src={product.images[0]} alt={product.title} width={400} height={400} className="object-contain" />
        </div>
        <p className="mt-4 text-black">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-xl font-bold text-black">${product.price}</p>
          <button className="px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
