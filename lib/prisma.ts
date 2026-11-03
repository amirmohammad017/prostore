import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import ws from "ws";

// فعال کردن WebSocket برای اتصال Neon
neonConfig.webSocketConstructor = ws;

function createPrismaClient() {
  // در نسخه‌های جدید adapter، connectionString مستقیم داده می‌شود (نه Pool)
  const adapter = new PrismaNeon({
    connectionString: process.env.DATABASE_URL,
  });

  // تبدیل Decimal به string قبل از رسیدن به کد ما
  return new PrismaClient({ adapter }).$extends({
    result: {
      product: {
        price: {
          compute(product) {
            return product.price.toString();
          },
        },
        rating: {
          compute(product) {
            return product.rating.toString();
          },
        },
      },
    },
  });
}

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
