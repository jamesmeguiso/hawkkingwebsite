import React, { useState } from 'react';
import { ShieldCheck, Bolt, DollarSign, Truck, Sparkles, Scale, Info } from 'lucide-react';

export default function WhyHawkKing() {
  const [workHeight, setWorkHeight] = useState<number>(5.5);

  const recommendation = React.useMemo(() => {
    if (workHeight <= 3.5) {
      return {
        ladder: '3-Step Folding Steel Ladder or 6-Step Aluminum A-Type',
        type: 'Compact Step-Ladder',
        maxReach: 'Up to 3.2m Work Reach',
        warning: 'Perfect for interior drywall fixing, socket installations, residential maintenance, and home storage setups.',
        rating: '150kg safe limit'
      };
    } else if (workHeight <= 5.5) {
      return {
        ladder: '5m Aluminum Multipurpose Ladder (16 Steps)',
        type: 'Standard A-Frame or Scaffold configuration',
        maxReach: 'Up to 5.0m Work Reach',
        warning: 'Excellent for warehouse picking rungs, single-story external villa painting, and ceiling lighting changeouts.',
        rating: 'EN131 safety certified // 150kg load'
      };
    } else {
      return {
        ladder: '24-Step Multipurpose Ladder (7.1m Reach)',
        type: 'Fully Extended Scaffold or Extension Ladder',
        maxReach: 'Up to 7.1m Maximum Reach',
        warning: 'Recommended for corporate factory bays, high-tier HVAC maintenance, exterior building works, and industrial warehousing.',
        rating: 'EN131 security certification // 150kg load'
      };
    }
  }, [workHeight]);

  return (
    <section id="why" className="bg-brand-steel py-20 px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Features detailed */}
        <div className="lg:col-span-7">
          <div className="font-sans text-xs font-bold tracking-widest text-brand-orange uppercase mb-2">
            Why Choose Us
          </div>
          <h2 className="font-condensed text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white leading-tight mb-8">
            The HawkKing <span className="text-brand-orange">Difference</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-xl text-brand-orange shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-condensed text-lg font-bold text-white uppercase mb-2">
                  EN131 Safety Standard
                </h4>
                <p className="font-sans text-xs sm:text-sm text-brand-gray-mid leading-relaxed">
                  All ladders meet or exceed rigid European safety standard EN131 certifications. We believe site safety is non-negotiable.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-xl text-brand-orange shrink-0">
                <Bolt className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-condensed text-lg font-bold text-white uppercase mb-2">
                  Professional Performance
                </h4>
                <p className="font-sans text-xs sm:text-sm text-brand-gray-mid leading-relaxed">
                  From 680W keyless drills to 150kg-rated framework ladders: everything is made to survive active, dusty workshops.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-xl text-brand-orange shrink-0">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-condensed text-lg font-bold text-white uppercase mb-2">
                  Trade Pricing, No Markup
                </h4>
                <p className="font-sans text-xs sm:text-sm text-brand-gray-mid leading-relaxed">
                  Sourced straight from certified manufacturer partners, keeping pricing raw and accessible for tradespeople of all scales.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-xl text-brand-orange shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-condensed text-lg font-bold text-white uppercase mb-2">
                  UAE-Wide Support & Shipping
                </h4>
                <p className="font-sans text-xs sm:text-sm text-brand-gray-mid leading-relaxed">
                  Guaranteed shipment handling for Dubai, Abu Dhabi, Sharjah and critical Gulf ports. COD option is fully available via Amazon.ae.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Pro Specs + Interactive Safety Height Guide Calculator */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Main Stat Panel */}
          <div className="bg-brand-gray-dark/40 border border-white/5 p-6 md:p-8 rounded-xs relative overflow-hidden group">
            {/* Watermark detail */}
            <div className="absolute top-0 right-0 -translate-y-8 translate-x-8 text-8xl text-brand-orange/10 font-bold select-none">
              150
            </div>

            <div className="mb-4">
              <span className="font-condensed text-6xl font-black text-brand-orange leading-none inline-block">
                150<span className="text-xl text-white font-bold ml-1">kg</span>
              </span>
              <div className="font-condensed text-sm font-bold tracking-widest text-white uppercase mt-1">
                MAXIMUM COMPLIANCE WEIGHT LOAD CAPACITY
              </div>
              <p className="font-sans text-xs text-brand-gray-mid mt-2">
                Our lightweight aluminum alloys survive intense compression testing, rated secure for heavy trade operations and toolpacks of active servicemen.
              </p>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4 mt-4">
              <div className="bg-brand-steel p-4 border-l-2 border-brand-orange">
                <div className="font-condensed text-2xl font-bold text-white">7.1m</div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#a8a5a0]">Max Reach</div>
              </div>
              <div className="bg-brand-steel p-4 border-l-2 border-brand-orange">
                <div className="font-condensed text-2xl font-bold text-white">680W</div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#a8a5a0]">Drill Power</div>
              </div>
              <div className="bg-brand-steel p-4 border-l-2 border-brand-orange">
                <div className="font-condensed text-2xl font-bold text-white">108 pcs</div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#a8a5a0]">Tool Index</div>
              </div>
              <div className="bg-brand-steel p-4 border-l-2 border-brand-orange">
                <div className="font-condensed text-2xl font-bold text-white">4.8 ★</div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#a8a5a0]">Rating</div>
              </div>
            </div>
          </div>

          {/* Interactive Calculator: Smart Safety Height Guide */}
          <div className="bg-brand-black/95 border border-brand-orange/40 p-6 shadow-xl rounded-xs">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-brand-orange" />
              <h4 className="font-condensed text-lg font-bold text-white uppercase tracking-wider">
                Smart Work Height Guide
              </h4>
            </div>

            <p className="font-sans text-xs text-brand-gray-mid mb-4">
              Slide the meter to set your ceiling or task work height to instantly see recommended ladder equipment:
            </p>

            {/* Slider */}
            <div className="mb-4">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs text-brand-gray-mid uppercase">Target Ceiling Height</span>
                <span className="font-condensed text-xl font-bold text-brand-orange">
                  {workHeight.toFixed(1)} meters
                </span>
              </div>
              <input
                type="range"
                min="2.0"
                max="9.0"
                step="0.5"
                value={workHeight}
                onChange={(e) => setWorkHeight(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-brand-steel accent-brand-orange cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-brand-gray-mid mt-1">
                <span>2.0m</span>
                <span>4.0m</span>
                <span>5.5m</span>
                <span>7.0m</span>
                <span>9.0m</span>
              </div>
            </div>

            {/* Interactive Recommendation Box */}
            <div className="bg-brand-steel/60 border border-white/5 p-4 rounded-xs">
              <div className="text-[10px] uppercase tracking-wider font-semibold text-brand-orange">
                Recommended Solution:
              </div>
              <div className="font-condensed text-base font-extrabold text-white uppercase mt-1 leading-snug">
                {recommendation.ladder}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="inline-block bg-brand-orange/15 text-brand-orange-light text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border border-brand-orange/20">
                  {recommendation.type}
                </span>
                <span className="inline-block bg-white/5 text-white/80 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5">
                  {recommendation.maxReach}
                </span>
              </div>
              <div className="font-sans text-[11px] text-brand-gray-mid leading-relaxed mt-2.5 flex items-start gap-1.5 border-t border-white/5 pt-2.5">
                <Info className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                <span>{recommendation.warning}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
