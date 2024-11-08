"use client"
import { ProductCard } from "@/components/ProductCard";
import useProductStore from "@/store/productStore";
import { Product } from "@/types/types";
import { useEffect } from "react";

export default function HomeUI({ products }: { products: Product[] }) {
  const setData = useProductStore((state) => state.setData);

  useEffect(() => {
    if (products) {
      setData(products);
    }
  }, [products, setData]);

  const data = useProductStore((state) => state.data);

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
        {data?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}