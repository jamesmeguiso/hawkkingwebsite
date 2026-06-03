import React from 'react';
import { Search, ShoppingCart, Truck, Wrench } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      icon: <Search className="w-8 h-8 text-white" />,
      title: 'Browse the Range',
      description: 'Explore 500+ high-durability products across our specific ladders, power drills, and spanner collections.'
    },
    {
      num: 2,
      icon: <ShoppingCart className="w-8 h-8 text-white" />,
      title: 'Assembles Basket list',
      description: 'Select your tools, customize quantities, and add them to your interactive quote basket here or order directly.'
    },
    {
      num: 3,
      icon: <Truck className="w-8 h-8 text-white" />,
      title: 'Fast UAE Delivery',
      description: 'Standard shipment dispatching directly across Dubai, Abu Dhabi, Sharjah, and Al Ain straight to your workplace.'
    },
    {
      num: 4,
      icon: <Wrench className="w-8 h-8 text-white" />,
      title: 'Get to Work',
      description: 'Inspect our premium safety markings, align configurations, and unbox ready for active site performance.'
    }
  ];

  return (
    <section id="how" className="bg-brand-black border-t border-white/5 py-20 px-4 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="font-sans text-xs font-bold tracking-widest text-brand-orange uppercase mb-2">
            Order Process
          </div>
          <h2 className="font-condensed text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white leading-tight">
            Get Your Tools in <span className="text-brand-orange">4 Steps</span>
          </h2>
        </div>

        {/* Horizontal steps flow */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connecting line for desktop screens */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-[1px] bg-linear-to-r from-brand-orange/60 to-brand-orange/10 z-0" />

          {steps.map((step) => (
            <div key={step.num} className="relative z-10 text-center flex flex-col items-center group">
              {/* Number Circle bubble */}
              <div className="w-16 h-16 rounded-full bg-brand-orange hover:bg-brand-orange-light text-white font-condensed text-2xl font-black flex items-center justify-center mb-6 shadow-lg shadow-brand-orange/20 transition-all duration-300 group-hover:scale-110">
                {step.num}
              </div>

              {/* Icon Panel container */}
              <div className="bg-brand-steel p-4 border border-white/5 rounded-xs mb-4 text-brand-orange group-hover:border-brand-orange/40 transition-colors duration-300">
                {step.icon}
              </div>

              {/* Metadata */}
              <h4 className="font-condensed text-lg font-bold text-white uppercase tracking-wider mb-2 group-hover:text-brand-orange transition-colors duration-300">
                {step.title}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-brand-gray-mid leading-relaxed max-w-[240px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
