import React from 'react';
import { ArrowUpRight, Facebook, Instagram, ShoppingBag } from 'lucide-react';

export default function SocialChannels() {
  const platforms = [
    {
      name: 'Facebook Community',
      handle: '@HawkKingDubai',
      url: 'https://www.facebook.com/HawkKingDubai',
      icon: <Facebook className="w-5 h-5 text-sky-500" />
    },
    {
      name: 'Instagram Feed',
      handle: '@hawkkingae',
      url: 'https://www.instagram.com/hawkkingae',
      icon: <Instagram className="w-5 h-5 text-pink-500" />
    },
    {
      name: 'Amazon UAE Store',
      handle: 'UPSPIRIT // HawkKing',
      url: 'https://www.amazon.ae/stores/UPSPIRIT/page/A7CCD45A-C743-4805-9ACE-C04955757EA3',
      icon: <ShoppingBag className="w-5 h-5 text-brand-orange-light" />
    }
  ];

  return (
    <section id="social" className="bg-brand-black border-t border-white/5 py-20 px-4 md:px-12 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Text and Platforms */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="font-sans text-xs font-bold tracking-widest text-brand-orange uppercase mb-2">
            Social Channels
          </div>
          <h2 className="font-condensed text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white leading-tight mb-4">
            Join the HawkKing <br /><span className="text-brand-orange">Community</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-gray-mid max-w-lg leading-relaxed mb-8">
            See our heavy-duty equipment in action, access safety demonstration guides, acquire exclusive trade coupons, and stay synchronized with our latest regional catalog expansions.
          </p>

          {/* Social Links List */}
          <div className="flex flex-col gap-3 max-w-md w-full">
            {platforms.map((plat) => (
              <a
                key={plat.name}
                href={plat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-brand-gray-dark/30 hover:bg-brand-steel border border-white/5 hover:border-brand-orange/30 p-4.5 transition-all duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="bg-brand-black p-2 rounded-xs border border-white/5">
                    {plat.icon}
                  </div>
                  <div>
                    <h4 className="font-condensed text-base font-bold text-white uppercase tracking-wider group-hover:text-brand-orange transition-colors">
                      {plat.name}
                    </h4>
                    <p className="font-sans text-xs text-brand-gray-mid">{plat.handle}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-brand-orange transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Awesome Stat Grid */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="bg-brand-gray-dark/50 border-b-4 border-brand-orange p-8 flex flex-col items-center text-center">
            <span className="font-condensed text-4xl sm:text-5xl font-black text-brand-orange leading-none">
              10K+
            </span>
            <span className="font-sans text-[11px] font-bold text-brand-gray-mid uppercase mt-3 tracking-widest">
              Happy Customers
            </span>
          </div>

          <div className="bg-brand-gray-dark/50 border-b-4 border-brand-orange p-8 flex flex-col items-center text-center">
            <span className="font-condensed text-4xl sm:text-5xl font-black text-brand-orange leading-none">
              500+
            </span>
            <span className="font-sans text-[11px] font-bold text-brand-gray-mid uppercase mt-3 tracking-widest">
              Listed Products
            </span>
          </div>

          <div className="bg-brand-gray-dark/50 border-b-4 border-brand-orange p-8 flex flex-col items-center text-center">
            <span className="font-condensed text-4xl sm:text-5xl font-black text-brand-orange leading-none">
              UAE
            </span>
            <span className="font-sans text-[11px] font-bold text-brand-gray-mid uppercase mt-3 tracking-widest">
              Nationwide Shipping
            </span>
          </div>

          <div className="bg-brand-gray-dark/50 border-b-4 border-brand-orange p-8 flex flex-col items-center text-center">
            <span className="font-condensed text-4xl sm:text-5xl font-black text-brand-orange leading-none">
              4.8 ★
            </span>
            <span className="font-sans text-[11px] font-bold text-brand-gray-mid uppercase mt-3 tracking-widest">
              Amazon Rating
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
