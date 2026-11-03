import { prisma } from "@/lib/prisma";
import { convertToPlainObject } from "@/lib/utils";
import { LATEST_PRODUCT_LIMIT } from "@/lib/constants";

export async function getLatestProducts() {
  "use cache";

  const products = await prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(products);
}
