import Link from "next/link";

export default function Home() {
  return (
    <main
      className="h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2c1a0e 0%, #5c3317 50%, #3d2010 100%)",
      }}
    >
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4a055'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center w-full relative z-10">

        {/* 왼쪽 텍스트 */}
        <div>
          <div className="inline-flex items-center gap-2 border border-[#d4a055]/40 px-4 py-1.5 rounded-full text-[#d4a055] text-[11px] tracking-[0.2em] uppercase mb-6">
            ☕ Est. 2026 · Auckland, NZ
          </div>

          <h1 className="font-playfair text-[#fdf6ee] text-5xl leading-tight mb-4">
            Where Every Cup<br />
            Tells a <em className="text-[#e58e26] not-italic">Story</em>
          </h1>

          <p className="text-[#c4a882] text-sm leading-relaxed font-light mb-8 max-w-md">
            Handcrafted coffee, freshly baked pastries, and a warm corner
            just for you. Experience the art of slow coffee.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/menu"
              className="bg-[#e58e26] text-[#fff] px-7 py-3 text-xs uppercase tracking-widest hover:bg-[#d4a055] transition-colors"
            >
              View Our Menu
            </Link>
            <Link
              href="/about"
              className="text-[#fdf6ee] text-xs uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2"
            >
              ▶ Our Story
            </Link>
          </div>
        </div>

        {/* 오른쪽 카드들 */}
        <div className="flex flex-col gap-3">
          {[
            { icon: "☕", title: "Signature Blends", desc: "House roasted beans from Colombia & Ethiopia" },
            { icon: "🥐", title: "Fresh Bakes Daily", desc: "Croissants, scones & seasonal pastries" },
            { icon: "🌿", title: "Plant-Based Options", desc: "Oat, almond & soy milk available" },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex items-center gap-4 bg-white/5 border border-[#d4a055]/15 rounded p-4 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#e58e26]/15 flex items-center justify-center text-xl flex-shrink-0">
                {icon}
              </div>
              <div>
                <div className="font-playfair text-[#fdf6ee] text-sm mb-0.5">{title}</div>
                <div className="text-[#c4a882] text-xs font-light">{desc}</div>
              </div>
            </div>
          ))}

          {/* 통계 */}
          <div className="grid grid-cols-3 gap-3 mt-1">
            {[
              { num: "10+", label: "Menu Items" },
              { num: "5★", label: "Reviews" },
              { num: "1yr", label: "Est." },
            ].map(({ num, label }) => (
              <div
                key={label}
                className="text-center p-4 bg-white/[0.04] border border-[#d4a055]/10 rounded"
              >
                <div className="font-playfair text-[#e58e26] text-2xl">{num}</div>
                <div className="text-[#c4a882] text-[10px] uppercase tracking-widest mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}