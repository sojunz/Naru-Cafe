# ☕ Naru Cafe

A warm, vintage-style cafe web app built with Next.js, TypeScript, and MongoDB.

## Tech Stack

- **Frontend** — Next.js 15, TypeScript, Tailwind CSS
- **Database** — MongoDB + Mongoose
- **Auth** — NextAuth.js
- **Image Hosting** — Cloudinary
- **Payment** — Stripe (coming soon)
- **Deployment** — Vercel

## Features

- 🛍️ Menu browsing with category filters
- 🛒 Cart & order system
- 🔐 User authentication
- 💳 Online payment (Stripe)
- 🖼️ Image upload via Cloudinary
- 📊 Admin dashboard

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

```env
MONGODB_URI=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

## Roadmap

- [x] Project setup
- [x] Navbar
- [x] Home hero page
- [x] Menu page
- [ ] Cart & checkout
- [ ] User auth
- [ ] Payment integration
- [ ] Admin dashboard