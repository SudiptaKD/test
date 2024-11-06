import { server } from "@/config/serverPoint";
import { Product } from "@/types/types";
import api from '@/config/api.json'

export async function getProducts() {
  try {
    const res = await fetch(
      `${server + api?.products}?offset=0&limit=12`
    );
    const products = await res.json();
    return products?.products as Product[];
  } catch (error) {
    console.log(error);
    return [];
  }
}