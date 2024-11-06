import { getProducts } from "@/actions/products";
import { Product } from "@/types/types";
import HomeUI from "@/views/homePage/homePage";

export default async function Home() {
  const products : Product[] = (await getProducts()) || [];
  return (
    <HomeUI products={products}/>
  );
}