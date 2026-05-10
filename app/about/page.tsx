import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* 히어로 */}
      <div
        className="py-20 text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2c1a0e 0%, #5c3317 100%)",
        }}
      >
        <div className="absolute text-[12rem] opacity-[0.04] right-0 top-0 leading-none">☕</div>
        <div className="relative z-10">
          <span className="inline-block border border-[#d4a055]/40 text-[#d4a055] text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4">
            Our Story
          </span>
          <h1 className="font-playfair text-[#fdf6ee] text-5xl mb-4">
            Brewed with <em className="text-[#e58e26] not-italic">Passion</em>,<br />
            Served with Love
          </h1>
          <p className="text-[#c4a882] text-sm font-light max-w-lg mx-auto leading-relaxed">
            A little corner of warmth in the heart of Auckland — where every cup
            is crafted with care and every visit feels like home.
          </p>
        </div>
      </div>

      {/* 스토리 섹션 */}
      <div className="max-w-4xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-16 items-center">
      <div className="rounded h-[280px] overflow-hidden relative"
        style={{ boxShadow: "4px 6px 20px rgba(0,0,0,0.15)" }}
            >
    <img
  src="/images/logo.jpg"
  alt="Naru Cafe"
  className="w-full h-full"
  style={{ objectFit: "cover", objectPosition: "top" }}
/>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#e58e26] mb-1">
            How It Started
          </p>
          <h2 className="font-playfair text-[#2c1a0e] text-3xl mb-1">
            From a Dream to a Cup
          </h2>
          <div className="w-10 h-0.5 bg-[#e58e26] mb-5" />
          <p className="text-[#6b5744] text-sm leading-relaxed font-light mb-4">
            Naru Cafe was born from a simple love of great coffee and warm spaces.
            What started as a small idea grew into a place where people come not
            just for the coffee, but for the feeling of belonging.
          </p>
          <p className="text-[#6b5744] text-sm leading-relaxed font-light">
            We believe that the best moments happen over a good cup — shared with
            someone you love, or quietly enjoyed alone with a book.
          </p>
        </div>
      </div>

      {/* 가치 섹션 */}
      <div className="bg-[#f5ede0] py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-[#2c1a0e] text-3xl text-center mb-1">
            What We Stand For
          </h2>
          <div className="w-10 h-0.5 bg-[#e58e26] mx-auto mb-10" />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🌱",
                title: "Sustainability",
                desc: "Ethically sourced beans and eco-friendly packaging in everything we do.",
              },
              {
                icon: "🤝",
                title: "Community",
                desc: "A space for everyone — where strangers become regulars and regulars become family.",
              },
              {
                icon: "☕",
                title: "Craft",
                desc: "Every cup is made with intention, precision, and a whole lot of love.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white p-7 text-center"
                style={{ boxShadow: "1px 2px 8px rgba(0,0,0,0.07)" }}
              >
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-playfair text-[#2c1a0e] text-lg mb-2">{title}</h3>
                <p className="text-[#8b7355] text-xs leading-relaxed font-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 인용구 */}
      <div className="bg-[#2c1a0e] py-16 px-8 text-center">
        <blockquote className="font-playfair italic text-[#fdf6ee] text-2xl max-w-xl mx-auto leading-relaxed mb-4">
          "Coffee is a language in itself — and at Naru, we speak it fluently."
        </blockquote>
        <cite className="text-[#d4a055] text-xs tracking-widest uppercase not-italic">
          — Naru Cafe, Auckland
        </cite>
      </div>

      {/* CTA */}
      <div className="bg-[#fdf6ee] py-16 px-8 text-center">
        <h2 className="font-playfair text-[#2c1a0e] text-3xl mb-3">
          Come Visit Us
        </h2>
        <p className="text-[#8b7355] text-sm font-light mb-8">
          We'd love to make your day a little warmer.
        </p>
        <Link
          href="/menu"
          className="bg-[#e58e26] text-white text-xs uppercase tracking-widest px-8 py-3 hover:bg-[#d4a055] transition-colors"
        >
          View Our Menu
        </Link>
      </div>
    </div>
  );
}