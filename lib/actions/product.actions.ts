"use server";

import { prisma } from "../prisma";
import { LATEST_PRODUCT_LIMIT } from "../constants";

export async function getLatestProducts() {
  "use cache";

  const data = await prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  // Decimal -> string، چون type Product این دو فیلد را string می‌خواهد
  return data.map((product) => ({
    ...product,
    price: product.price.toString(),
    rating: product.rating.toString(),
  }));
}
