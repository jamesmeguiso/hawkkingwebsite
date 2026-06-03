import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <section id="faq" className="bg-brand-black border-t border-white/5 py-20 px-4 md:px-12 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="font-sans text-xs font-bold tracking-widest text-brand-orange uppercase mb-2">
            Questions
          </div>
          <h2 className="font-condensed text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white leading-tight">
            Frequently <span className="text-brand-orange">Asked</span>
          </h2>
        </div>

        {/* FAQs LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FAQS.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div
                key={faq.id}
                onClick={() => toggleFaq(faq.id)}
                className={`bg-brand-steel border transition-all duration-200 p-6 rounded-xs cursor-pointer select-none ${
                  isOpen 
                    ? 'border-brand-orange/50 shadow-md shadow-brand-orange/5' 
                    : 'border-white/5 hover:border-brand-orange/30'
                }`}
              >
                {/* Question */}
                <div className="flex justify-between items-start gap-4">
                  <div className="flex gap-2.5 items-start">
                    <HelpCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <h4 className="font-condensed text-base sm:text-lg font-bold text-white uppercase leading-snug">
                      {faq.question}
                    </h4>
                  </div>
                  <span className="text-brand-orange shrink-0 mt-0.5">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </div>

                {/* Answer Collapsible */}
                {isOpen && (
                  <div className="mt-4 pl-7 text-[13px] text-brand-gray-mid font-sans border-t border-white/5 pt-4 leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
