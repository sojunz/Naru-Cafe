"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = 0; // 나중에 장바구니 state 연결

  return (
    <nav className="bg-[#e58e26] relative">
      {/* 골드 라인 */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8b5e3c] via-[#d4a055] to-[#8b5e3c]" />

      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-3">
        <Image
            src="/images/logo.jpg"
            alt="Naru Cafe Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"/>
          <span className="font-playfair text-[#fdf6ee] text-xl tracking-wide">
             Naru<span className="text-[#fdf6ee] opacity-70"> Cafe</span>
            </span>
        </Link>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-xs uppercase tracking-widest font-light transition-colors
                    ${pathname === href
                      ? "text-[#fdf6ee] border-b border-[#fdf6ee] pb-0.5"
                      : "text-[#fdf6ee] opacity-70 hover:opacity-100"
                    }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
        <Link
         href="/cart"
        className="relative flex items-center gap-2 border border-[#fdf6ee] px-3 py-1.5 rounded text-[#fdf6ee] text-xs tracking-wider opacity-80 hover:opacity-100 transition-all"
>
        Cart
            {cartCount > 0 && (
            <span className="bg-[#fdf6ee] text-[#3d1f00] text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
             {cartCount}
            </span>
          )}
            </Link>

          <Link
            href="/login"
            className="bg-[#fdf6ee] text-[#3d1f00] text-xs uppercase tracking-widest px-4 py-2 rounded-sm hover:bg-white transition-colors"
          >
            Sign In
          </Link>

           {/* 모바일 햄버거 */}
           <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-5 h-[1.5px] bg-[#fdf6ee]" />
            <span className="block w-5 h-[1.5px] bg-[#fdf6ee]" />
            <span className="block w-5 h-[1.5px] bg-[#fdf6ee]" />
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 */}
      {menuOpen && (
        <div className="md:hidden bg-[#231309] px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[#c4a882] text-xs uppercase tracking-widest"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/login"
            className="text-[#d4a055] text-xs uppercase tracking-widest"
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}
