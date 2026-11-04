# 🛍️ ProStore

An e-commerce platform built with Next.js, Prisma and PostgreSQL.

🔗 **Live Demo:** [https://prostore-delta-two.vercel.app](https://prostore-delta-two.vercel.app/)

> 🚧 This project is in progress. More features are being added.

## ✨ Features

- 🏠 Home page with the latest products
- 📦 Product details page with image gallery and price
- 🗄️ Product catalog stored in PostgreSQL (Neon) through Prisma
- ✅ Data validation with Zod
- 📱 Responsive layout

## 🧰 Tech Stack

- ⚛️ **Next.js** and **React**
- 🔷 **TypeScript**
- 🎨 **Tailwind CSS**
- 🧩 **shadcn/ui**
- 🔺 **Prisma** ORM
- 🐘 **PostgreSQL** (Neon)
- 🛡️ **Zod**
- ▲ **Vercel** (deployment)

## 🚀 Getting Started

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
```

Create a `.env` file:

```env
DATABASE_URL=
DIRECT_URL=
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

Then run:

```bash
npx prisma generate
npx prisma db push
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🗺️ Roadmap

- 🛒 Cart and checkout
- 🔐 Authentication
- 💳 Payments
- 🧑‍💼 Admin panel

## 📚 Credits

Built while following a full-stack Next.js e-commerce course.
