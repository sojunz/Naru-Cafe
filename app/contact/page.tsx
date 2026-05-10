"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* 히어로 */}
      <div
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #2c1a0e 0%, #5c3317 100%)" }}
      >
        <span className="inline-block border border-[#d4a055]/40 text-[#d4a055] text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4">
          Contact Us
        </span>
        <h1 className="font-playfair text-[#fdf6ee] text-5xl mb-3">
          Come Say Hello
        </h1>
        <p className="text-[#c4a882] text-sm font-light">
          We'd love to hear from you ☕
        </p>
      </div>

      {/* 메인 */}
      <div className="max-w-4xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-12">

        {/* 왼쪽 정보 */}
        <div>
          <h2 className="font-playfair text-[#2c1a0e] text-2xl mb-1">Find Us</h2>
          <div className="w-10 h-0.5 bg-[#e58e26] mb-7" />

          {[
            { icon: "📍", label: "Address", text: "123 Naru Lane\nAuckland, New Zealand" },
            { icon: "📞", label: "Phone", text: "+64 9 123 4567" },
            { icon: "✉️", label: "Email", text: "narucafe@gmail.co.nz" },
          ].map(({ icon, label, text }) => (
            <div key={label} className="flex items-start gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#e58e26] flex items-center justify-center text-sm flex-shrink-0">
                {icon}
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-[#e58e26] mb-0.5">{label}</p>
                <p className="text-[#2c1a0e] text-sm font-light whitespace-pre-line">{text}</p>
              </div>
            </div>
          ))}

          {/* 영업시간 */}
          <div className="bg-[#f5ede0] p-5 mt-4">
            <h3 className="font-playfair text-[#2c1a0e] text-base mb-3">Opening Hours</h3>
            {[
              { day: "Mon — Fri", hours: "7:00am — 4:00pm" },
              { day: "Saturday", hours: "9:00am — 4:00pm" },
              { day: "Sunday", hours: "9:00am — 3:00pm" },
            ].map(({ day, hours }) => (
              <div key={day} className="flex justify-between text-xs text-[#6b5744] font-light py-1.5 border-b border-[#e8d5b7] last:border-0">
                <span>{day}</span>
                <span>{hours}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 오른쪽 폼 */}
        <div className="bg-white p-8" style={{ boxShadow: "2px 4px 16px rgba(0,0,0,0.08)" }}>
          <h2 className="font-playfair text-[#2c1a0e] text-2xl mb-1">Send a Message</h2>
          <div className="w-10 h-0.5 bg-[#e58e26] mb-6" />

          {sent ? (
            <div className="text-center py-10">
              <div className="text-4xl mb-4">☕</div>
              <p className="font-playfair text-[#2c1a0e] text-xl mb-2">Message Sent!</p>
              <p className="text-[#8b7355] text-sm font-light">We'll get back to you soon.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-[#8b7355] mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-[#e8d5b7] bg-[#fdf6ee] px-3 py-2.5 text-sm text-[#2c1a0e] outline-none focus:border-[#e58e26] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-[#8b7355] mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="jane@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-[#e8d5b7] bg-[#fdf6ee] px-3 py-2.5 text-sm text-[#2c1a0e] outline-none focus:border-[#e58e26] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-[#8b7355] mb-1.5">
                  Message
                </label>
                <textarea
                  placeholder="Say something nice..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full border border-[#e8d5b7] bg-[#fdf6ee] px-3 py-2.5 text-sm text-[#2c1a0e] outline-none focus:border-[#e58e26] transition-colors resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-[#e58e26] text-white text-xs uppercase tracking-widest py-3 hover:bg-[#d4a055] transition-colors mt-1"
              >
                Send Message
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}