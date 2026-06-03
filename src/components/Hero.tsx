import React from 'react';
import { ArrowRight, Star, ShieldCheck, Award } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[105vh] md:min-h-screen flex items-center justify-center bg-brand-black pt-32 pb-16 px-4 md:px-12 overflow-hidden"
    >
      {/* Background Matrix/Grids and Radial glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_75%_50%,rgba(232,92,26,0.12)_0%,transparent_75%)]" />
        {/* Repeating grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Headings and description */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Badge */}
          <div className="flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/30 px-4 py-2 mb-6 shadow-md rounded-sm select-none">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange relative">
              <span className="absolute inset-0 rounded-full bg-brand-orange animate-ping opacity-75" />
            </span>
            <span className="font-sans text-xs font-bold tracking-widest text-brand-orange-light uppercase">
              🇦🇪 Trusted in the UAE Since 2019
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-condensed text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight uppercase text-white mb-6">
            Built For <br />
            <span className="text-brand-orange block">Professionals</span> 
            Who Mean Business
          </h1>

          {/* Sub description */}
          <p className="font-sans text-base sm:text-lg text-brand-gray-mid leading-relaxed max-w-xl mb-8">
            HawkKing delivers industrial-grade tools, ladders, and safety scaffolding engineered to survive the UAE's toughest, highest-temperature job sites — at competitive prices that don't cut your profit margins.
          </p>

          {/* Actons */}
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection('products')}
              className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-light text-white font-condensed font-bold text-lg uppercase tracking-wider py-4 px-8 shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
            >
              Browse Equipment 
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href="https://www.amazon.ae/stores/UPSPIRIT/page/A7CCD45A-C743-4805-9ACE-C04955757EA3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-brand-steel/60 hover:bg-brand-steel border border-white/20 hover:border-brand-orange/40 text-white font-condensed font-bold text-lg uppercase tracking-wider py-4 px-8 transition-all duration-200"
            >
              Shop Amazon UAE
            </a>
          </div>

          {/* Key Trust Highlights & Stats */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-white/10 pt-10 mt-12 w-full lg:max-w-2xl">
            <div className="border-l-2 border-brand-orange pl-4">
              <div className="font-condensed text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none">
                500+
              </div>
              <div className="font-sans text-xs tracking-wider text-brand-gray-mid uppercase mt-2">
                Products Listed
              </div>
            </div>
            <div className="border-l-2 border-brand-orange pl-4">
              <div className="font-condensed text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none">
                10K+
              </div>
              <div className="font-sans text-xs tracking-wider text-brand-gray-mid uppercase mt-2">
                UAE Contractors
              </div>
            </div>
            <div className="border-l-2 border-brand-orange pl-4">
              <div className="font-condensed text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none flex items-center gap-1">
                4.8<Star className="w-5 h-5 text-brand-yellow fill-brand-yellow inline" />
              </div>
              <div className="font-sans text-xs tracking-wider text-brand-gray-mid uppercase mt-2">
                Avg Rating
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Interactive Orbital Dial Visual */}
        <div className="lg:col-span-5 flex justify-center items-center select-none relative h-[380px] sm:h-[450px]">
          {/* Subtle surrounding light pulse */}
          <div className="absolute w-[360px] h-[360px] rounded-full bg-brand-orange/5 blur-3xl animate-pulse" />

          {/* The Outer Dial */}
          <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] rounded-full border border-brand-orange/30 flex items-center justify-center">
            {/* Spinning guide circles */}
            <div className="absolute inset-4 rounded-full border border-brand-orange/15 border-dashed animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-10 rounded-full border border-white/5" />

            {/* Orbiting Dots at staggered timing */}
            <div className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
              <div className="absolute top-0 left-12 w-3.5 h-3.5 bg-brand-orange rounded-full shadow-[0_0_15px_rgba(232,92,26,0.8)]" />
            </div>
            <div className="absolute w-full h-full animate-[spin_16s_linear_infinite]" style={{ animationDirection: 'reverse' }}>
              <div className="absolute bottom-4 right-12 w-2.5 h-2.5 bg-brand-yellow rounded-full shadow-[0_0_10px_rgba(245,166,35,0.7)]" />
            </div>
            <div className="absolute w-full h-full animate-[spin_24s_linear_infinite]">
              <div className="absolute top-1/2 left-0 w-2 h-2 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
            </div>

            {/* Solid Center Dial */}
            <div className="absolute w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full bg-linear-to-br from-brand-steel to-brand-steel-light border-4 border-brand-orange flex flex-col justify-center items-center shadow-[0_0_40px_rgba(232,92,26,0.15)] group transition-transform duration-500 hover:scale-[1.03]">
              <div className="text-6xl sm:text-7xl drop-shadow-[0_0_18px_rgba(232,92,26,0.5)] mr-1 transform transition-transform duration-700 group-hover:rotate-12">
                ⚙️
              </div>
              <div className="mt-4 flex flex-col items-center">
                <span className="font-condensed text-2xl font-black text-white tracking-widest uppercase">
                  HAWK<span className="text-brand-orange">KING</span>
                </span>
                <span className="font-condensed text-xs font-bold text-brand-orange tracking-[0.2em] uppercase mt-1">
                  PRO GRADE UAE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
