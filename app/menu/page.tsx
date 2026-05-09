"use client";

import { useState } from "react";
import Image from "next/image";

const menuItems = [
  { id: 1, name: "Naru Latte", price: 6.50, category: "coffee", emoji: "☕", badge: "Signature", image: "/images/menu/latte.jpg" },
  { id: 2, name: "Americano", price: 4.50, category: "coffee", emoji: "🖤", badge: null, image: "/images/menu/americano.jpg" },
  { id: 3, name: "Mocha", price: 6.00, category: "coffee", emoji: "🍫", badge: null, image: "/images/menu/Mocha.jpg" },
  { id: 4, name: "Cappuccino", price: 5.50, category: "coffee", emoji: "☁️", badge: null, image: "/images/menu/cappuccino.jpg" },
  { id: 5, name: "Hot Chocolate", price: 5.50, category: "non-coffee", emoji: "🍫", badge: null, image: "/images/menu/hotchocolate.jpg" },
  { id: 6, name: "Matcha Latte", price: 5.50, category: "non-coffee", emoji: "🍵", badge: "Popular", image: "/images/menu/matcha.jpg" },
  { id: 7, name: "Strawberry Milk", price: 5.00, category: "non-coffee", emoji: "🍓", badge: null, image: "/images/menu/strawberrymilk.jpg" },
  { id: 8, name: "Teas", price: 5.00, category: "non-coffee", emoji: "🌿", badge: null, image: "/images/menu/tea.jpg" },
  { id: 9, name: "Egg Benedict", price: 14.00, category: "food", emoji: "🍳", badge: null, image: "/images/menu/eggbenedict.jpg" },
  { id: 10, name: "Brown Sugar Muffin", price: 3.50, category: "food", emoji: "🧁", badge: "New", image: "/images/menu/cupcake.png" },
  { id: 11, name: "Toast Sandwich", price: 5.00, category: "food", emoji: "🥪", badge: null, image: "/images/menu/toastsandwich.jpg" },
  { id: 12, name: "Berry Pancake", price: 12.00, category: "food", emoji: "🥞", badge: "Popular", image: "/images/menu/berrypancake.jpg" },
  { id: 13, name: "Panini Chicken Sandwich", price: 13.00, category: "food", emoji: "🥖", badge: null, image: "/images/menu/paninichickensandwich.jpg" },
];

const tabs = [
  { label: "All", value: "all" },
  { label: "Coffee", value: "coffee" },
  { label: "Non-Coffee", value: "non-coffee" },
  { label: "Food", value: "food" },
];

const sections = [
  { title: "Coffee", value: "coffee", bg: "bg-[#fdf6ee]" },
  { title: "Non-Coffee", value: "non-coffee", bg: "bg-[#f5ede0]" },
  { title: "Food", value: "food", bg: "bg-[#fdf6ee]" },
];

const photoColors: Record<string, string> = {
  coffee: "from-[#8b5e3c] to-[#5c3317]",
  "non-coffee": "from-[#6b8f5e] to-[#3d5c35]",
  food: "from-[#c4956a] to-[#8b6040]",
};

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = (category: string) =>
    menuItems.filter(
      (item) =>
        item.category === category &&
        (activeTab === "all" || activeTab === category)
    );

  const showSection = (category: string) =>
    activeTab === "all" || activeTab === category;

  return (
    <div>
      {/* 히어로 */}
      <div
        className="py-12 text-center"
        style={{
          background: "linear-gradient(135deg, #2c1a0e 0%, #5c3317 100%)",
        }}
      >
        <h1 className="font-playfair text-[#fdf6ee] text-4xl mb-2">
          Our Menu
        </h1>
        <p className="text-[#c4a882] text-sm font-light tracking-wide">
          Handcrafted with love, served with warmth
        </p>
      </div>

      {/* 탭 */}
      <div className="bg-[#2c1a0e] flex justify-center px-6">
        {tabs.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActiveTab(value)}
            className={`px-5 py-3 text-[11px] uppercase tracking-widest border-b-2 transition-all
              ${activeTab === value
                ? "text-[#e58e26] border-[#e58e26]"
                : "text-[#c4a882] border-transparent hover:text-[#fdf6ee]"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 섹션들 */}
      {sections.map(({ title, value, bg }) =>
        showSection(value) && filtered(value).length > 0 ? (
          <div key={value} className={`${bg} px-8 py-10`}>
            <h2 className="font-playfair text-[#2c1a0e] text-2xl mb-1">{title}</h2>
            <div className="w-10 h-0.5 bg-[#e58e26] mb-7" />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {filtered(value).map((item, i) => (
                <div
                  key={item.id}
                  className="bg-white cursor-pointer transition-all duration-200 hover:scale-105 hover:rotate-0"
                  style={{
                    padding: "8px 8px 16px",
                    boxShadow: "2px 3px 12px rgba(0,0,0,0.13)",
                    transform: i % 2 === 0 ? "rotate(-1.5deg)" : "rotate(1.2deg)",
                  }}
                >
                  {/* 배지 or 여백 */}
                  {item.badge ? (
                    <div className="text-center mb-1">
                      <span className="text-[9px] bg-[#e58e26] text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {item.badge}
                      </span>
                    </div>
                  ) : (
                    <div className="h-[18px]" />
                  )}

                  {/* 사진 */}
                  <div className="w-full aspect-square relative overflow-hidden mb-1.5">
  {item.image ? (
    <img
      src={item.image}
      alt={item.name}
      className="w-full h-full object-cover"
    />
  ) : (
    <div className={`w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br ${photoColors[item.category]}`}>
      {item.emoji}
    </div>
  )}
</div>
                  {/* 이름 & 가격 */}
                  <p className="font-playfair text-[#2c1a0e] text-xs text-center mb-1 leading-tight">
                    {item.name}
                  </p>
                  <p className="text-[#e58e26] text-[11px] text-center font-light">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}