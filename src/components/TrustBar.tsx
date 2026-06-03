import React from 'react';
import { Truck, ShieldAlert, Wallet, RefreshCw, ShoppingBag } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { icon: <Truck className="w-5 h-5 text-white" />, text: 'Fast UAE Delivery' },
    { icon: <ShieldAlert className="w-5 h-5 text-white" />, text: 'EN131 Certified Ladders' },
    { icon: <Wallet className="w-5 h-5 text-white" />, text: 'Cash on Delivery' },
    { icon: <RefreshCw className="w-5 h-5 text-white" />, text: 'Easy Returns' },
    { icon: <ShoppingBag className="w-5 h-5 text-white" />, text: 'Available on Amazon.ae' }
  ];

  return (
    <div className="bg-brand-orange text-white py-4 px-4 md:px-12 shadow-inner z-20 relative overflow-hidden">
      {/* Dynamic scrolling marquee inside mobile container & flex row on desktop */}
      <div className="max-w-7xl mx-auto flex flex-wrap gap-y-4 gap-x-8 items-center justify-center lg:justify-between text-sm">
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <div className="flex items-center gap-3 font-condensed font-bold text-base tracking-wider uppercase select-none transition-transform hover:scale-105">
              <span className="p-1 px-1.5 bg-brand-black/20 rounded-xs flex items-center justify-center">
                {item.icon}
              </span>
              <span>{item.text}</span>
            </div>
            {idx < items.length - 1 && (
              <span className="hidden lg:inline text-white/40 font-light font-sans">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
