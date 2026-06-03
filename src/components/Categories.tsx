import React from 'react';

interface CategoriesProps {
  onSelectCategory: (category: string) => void;
}

export default function Categories({ onSelectCategory }: CategoriesProps) {
  const categoriesList = [
    {
      id: 'ladders',
      bgEmoji: '🪜',
      badge: 'Best Seller',
      title: 'Ladders & Scaffolding',
      description: 'Multi-purpose, folding, EN131 certified — up to 7.1m reach for professional contractors.',
      featured: true
    },
    {
      id: 'power_tools',
      bgEmoji: '🔩',
      title: 'Power Tools',
      description: 'High-torque drills, variable speed angle grinders, and drivers.',
      featured: false
    },
    {
      id: 'hand_tools',
      bgEmoji: '🔧',
      title: 'Hand Tools',
      description: 'Socket sets, precision wrenches, spanners, and heavy repair kits.',
      featured: false
    },
    {
      id: 'kits',
      bgEmoji: '🏗️',
      title: 'Complete Tool Kits',
      description: 'Robust combined storage cases containing full tradesperson collections.',
      featured: false
    },
    {
      id: 'accessories',
      bgEmoji: '⚙️',
      title: 'Accessories',
      description: 'Titanium-coated drills, cutting disc segments, and adapters.',
      featured: false
    }
  ];

  const handleCategoryClick = (id: string) => {
    onSelectCategory(id);
    const element = document.getElementById('products');
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
    <section id="categories" className="bg-brand-black py-20 px-4 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <div className="font-sans text-xs font-bold tracking-widest text-brand-orange uppercase mb-2">
            What We Offer
          </div>
          <h2 className="font-condensed text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white leading-tight">
            Tool Up For <span className="text-brand-orange">Every Job</span>
          </h2>
        </div>

        {/* Categories Bento-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesList.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`group relative text-left bg-brand-steel border border-white/5 hover:border-brand-orange/40 transition-all duration-300 p-8 flex flex-col justify-end overflow-hidden cursor-pointer rounded-xs h-[230px] md:h-auto ${
                cat.featured ? 'lg:col-span-1 lg:row-span-2 min-h-[460px] bg-brand-gray-dark/50' : 'min-h-[220px]'
              }`}
            >
              {/* Outer decorative giant watermarked emoji */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 text-[7rem] md:text-[9rem] opacity-5 pointer-events-none select-none group-hover:scale-110 tracking-tight transition-transform duration-500">
                {cat.bgEmoji}
              </div>

              {/* Arrow Indicator top right */}
              <span className="absolute top-6 right-6 text-brand-orange font-bold text-xl transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                ↗
              </span>

              {/* Tag for featured */}
              {cat.featured && cat.badge && (
                <div className="inline-block bg-brand-orange text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 mb-4 select-none self-start">
                  {cat.badge}
                </div>
              )}

              {/* Label metadata */}
              <div>
                <h3 className="font-condensed text-2xl md:text-3xl font-extrabold text-white uppercase mb-2 leading-none">
                  {cat.title}
                </h3>
                <p className="font-sans text-sm text-brand-gray-mid leading-relaxed max-w-[280px]">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-extrabold text-brand-orange uppercase tracking-wider mt-4">
                  Explore Range &rarr;
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
