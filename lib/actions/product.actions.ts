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

export async function getProductBySlug(slug: string) {
  "use cache";

  const product = await prisma.product.findFirst({
    where: { slug },
  });

  return product ? convertToPlainObject(product) : null;
}
