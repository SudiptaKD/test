import Image from "next/image";
import { ReactNode } from "react";

export function ProductImage({ src, alt, children }: { src: string; alt: string; children: ReactNode }) {
  return (
    <div className="relative w-full h-64 bg-gray-200 rounded-lg">
      <Image src={src} alt={alt} layout="fill" objectFit="cover" className="transition-transform duration-300" />
      {children}
    </div>
  );
}
