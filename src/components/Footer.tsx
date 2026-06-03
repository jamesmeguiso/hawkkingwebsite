import React from 'react';
import { Facebook, Instagram, ShoppingBag, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* CTA BANNER */}
      <div className="bg-brand-orange py-16 px-6 md:px-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Giant textured watermark backing */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 font-condensed text-7xl md:text-11xl font-black text-white/5 select-none tracking-tighter uppercase pointer-events-none">
          HAWKKING
        </div>

        <div className="relative z-10 max-w-xl text-center lg:text-left">
          <h2 className="font-condensed text-4xl sm:text-5xl font-black uppercase text-white leading-none mb-4">
            Ready to Equip <br />Your Team?
          </h2>
          <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed">
            Browse our complete HawkKing selection on Amazon.ae today. Experience fast regional transit, secure Cash-on-Delivery, and hassle-free returns anywhere in the UAE.
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap gap-4 shrink-0 justify-center">
          <a
            href="https://www.amazon.ae/stores/UPSPIRIT/page/A7CCD45A-C743-4805-9ACE-C04955757EA3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-white text-brand-orange hover:bg-brand-black hover:text-white font-condensed font-bold text-base uppercase tracking-wider py-4 px-8 transition-colors duration-200"
            style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
          >
            Shop Amazon UAE &rarr;
          </a>
          <a
            href="https://www.instagram.com/hawkkingae"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-transparent border-2 border-white hover:bg-white/10 text-white font-condensed font-bold text-base uppercase tracking-wider py-3.5 px-8 transition-colors duration-200"
          >
            View on Instagram
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer id="contact" className="bg-brand-steel border-t border-white/5 py-16 px-4 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          {/* Main columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-white/5">
            {/* Column 1: Brand details */}
            <div className="lg:col-span-5 space-y-5">
              <a 
                href="#" 
                onClick={handleScrollToTop}
                className="font-condensed text-3xl font-black text-white uppercase tracking-tight inline-block select-none transform hover:scale-105 transition-transform"
              >
                HAWK<span className="text-brand-orange">KING</span>
              </a>
              <p className="font-sans text-xs sm:text-sm text-brand-gray-mid leading-relaxed max-w-sm">
                Industrial-grade tools, military aluminum ladder systems, and scaffolds tailored for UAE workshops, technicians, and heavy construction trades.
              </p>
              
              {/* Social Channels panel */}
              <div className="flex gap-2.5">
                <a
                  href="https://www.facebook.com/HawkKingDubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-brand-gray-dark hover:bg-brand-orange hover:text-white text-brand-gray-mid border border-white/5 hover:border-brand-orange flex items-center justify-center transition-all duration-200"
                  title="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/hawkkingae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-brand-gray-dark hover:bg-brand-orange hover:text-white text-brand-gray-mid border border-white/5 hover:border-brand-orange flex items-center justify-center transition-all duration-200"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.amazon.ae/stores/UPSPIRIT/page/A7CCD45A-C743-4805-9ACE-C04955757EA3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-brand-gray-dark hover:bg-brand-orange hover:text-white text-brand-gray-mid border border-white/5 hover:border-brand-orange flex items-center justify-center transition-all duration-200"
                  title="Amazon Store"
                >
                  <ShoppingBag className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

            {/* Column 2: Equipment categories */}
            <div className="lg:col-span-2.5">
              <h5 className="font-condensed text-sm font-bold uppercase tracking-wider text-white mb-5">
                Equipment Range
              </h5>
              <ul className="space-y-2.5 font-sans text-xs text-brand-gray-mid">
                <li>
                  <a href="#products" className="hover:text-brand-orange transition-colors">Safety Ladders & Rungs</a>
                </li>
                <li>
                  <a href="#products" className="hover:text-brand-orange transition-colors">680W Drills & Power Tools</a>
                </li>
                <li>
                  <a href="#products" className="hover:text-brand-orange transition-colors">Precision Hex Socket Sets</a>
                </li>
                <li>
                  <a href="#products" className="hover:text-brand-orange transition-colors">General Mechanical Kits</a>
                </li>
                <li>
                  <a href="#products" className="hover:text-brand-orange transition-colors">Heavy Grinder Accessories</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Corporate resources */}
            <div className="lg:col-span-2">
              <h5 className="font-condensed text-sm font-bold uppercase tracking-wider text-white mb-5">
                Company Links
              </h5>
              <ul className="space-y-2.5 font-sans text-xs text-brand-gray-mid">
                <li>
                  <a href="#why" className="hover:text-brand-orange transition-colors">About HawkKing</a>
                </li>
                <li>
                  <a href="https://www.amazon.ae/stores/UPSPIRIT/page/A7CCD45A-C743-4805-9ACE-C04955757EA3" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Amazon Storefront</a>
                </li>
                <li>
                  <a href="#products" className="hover:text-brand-orange transition-colors">Bulk Project Orders</a>
                </li>
                <li>
                  <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-orange transition-colors">Careers</a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-brand-orange transition-colors">Returns & Trial Policy</a>
                </li>
              </ul>
            </div>

            {/* Column 4: Local contact info */}
            <div className="lg:col-span-2.5 space-y-4">
              <h5 className="font-condensed text-sm font-bold uppercase tracking-wider text-white mb-5">
                Reach Us
              </h5>
              
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span className="font-sans text-xs text-brand-gray-mid leading-relaxed">
                  Dubai Commercial District, <br />United Arab Emirates
                </span>
              </div>

              <div className="space-y-1.5 font-sans text-xs text-brand-gray-mid">
                <div className="flex items-center gap-2">
                  <span className="text-brand-orange font-bold">&#8226;</span>
                  <a href="https://www.facebook.com/HawkKingDubai" target="_blank" rel="noreferrer" className="hover:text-brand-orange">@HawkKingDubai</a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-orange font-bold">&#8226;</span>
                  <a href="https://www.instagram.com/hawkkingae" target="_blank" rel="noreferrer" className="hover:text-brand-orange">@hawkkingae</a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-orange font-bold">&#8226;</span>
                  <a href="https://www.amazon.ae" target="_blank" rel="noreferrer" className="hover:text-brand-orange">Amazon.ae Support</a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright info block */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-[11px] text-brand-gray-mid text-center md:text-left select-none">
              &copy; {new Date().getFullYear()} HawkKing UAE. Engineered for durability. All rights reserved.
            </p>
            
            <div className="flex gap-6 font-sans text-[11px] text-brand-gray-mid select-none">
              <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-brand-orange transition-colors">Trade Portal Site Map</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
