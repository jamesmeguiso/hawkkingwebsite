import React, { useState, useMemo } from 'react';
import { Search, Star, ExternalLink, X, Plus, CheckCircle } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, CATEGORIES } from '../data';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function Products({ onAddToCart, selectedCategory, onSelectCategory }: ProductsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [focusedProduct, setFocusedProduct] = useState<Product | null>(null);
  const [addedNotification, setAddedNotification] = useState<string | null>(null);

  // Filter products based on search term and category
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.specifications.some((spec) => spec.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening modal
    onAddToCart(product);
    setAddedNotification(product.id);
    setTimeout(() => {
      setAddedNotification(null);
    }, 2000);
  };

  return (
    <section id="products" className="bg-brand-black border-t border-white/5 py-20 px-4 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-sans text-xs font-bold tracking-widest text-brand-orange uppercase mb-2">
              Our Products
            </div>
            <h2 className="font-condensed text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white leading-tight">
              Featured <span className="text-brand-orange">Equipment</span>
            </h2>
          </div>

          <a
            href="https://www.amazon.ae/stores/UPSPIRIT/page/A7CCD45A-C743-4805-9ACE-C04955757EA3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 border border-white/20 hover:border-brand-orange/40 bg-brand-steel/60 hover:bg-brand-steel text-white font-condensed font-bold text-base uppercase tracking-wider py-3 px-6 transition-all duration-200"
          >
            View All on Amazon <ExternalLink className="w-4 h-4 text-brand-orange" />
          </a>
        </div>

        {/* CONTROLS: Category Tabs & Search bar */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-white/10 pb-6 mb-10">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onSelectCategory(tab.id)}
                className={`px-5 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-200 border cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-brand-orange text-white border-brand-orange shadow-md shadow-brand-orange/15'
                    : 'bg-brand-steel/40 text-brand-gray-mid border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:max-w-xs">
            <input
              type="text"
              placeholder="Search equipment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-brand-steel text-white placeholder-brand-gray-mid/60 text-sm border border-white/10 p-3 pl-10 focus:outline-hidden focus:border-brand-orange transition-colors"
            />
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-brand-gray-mid" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3 bg-brand-gray-dark hover:bg-brand-gray-mid p-0.5 rounded-full transition-colors"
              >
                <X className="w-3.5 h-3.5 text-white" />
              </button>
            )}
          </div>
        </div>

        {/* PRODUCTS GRID */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => setFocusedProduct(p)}
                className="group bg-brand-steel border border-white/5 hover:border-brand-orange/40 transition-all duration-350 cursor-pointer rounded-xs relative flex flex-col justify-between hover:-translate-y-1 overflow-hidden"
              >
                {/* Horizontal bottom highlight border on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />

                {/* Card Top: Heavy image mockup container */}
                <div className="bg-brand-steel-light h-52 relative flex items-center justify-center border-b border-white/5 transition-colors group-hover:bg-brand-steel/30">
                  {/* Watermarked Emoji */}
                  <span className="text-[5.5rem] drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)] transform transition-transform duration-500 group-hover:scale-110 select-none">
                    {p.emoji}
                  </span>

                  {p.badge && (
                    <span className="absolute top-4 left-4 inline-block bg-brand-orange text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 select-none shadow-md">
                      {p.badge}
                    </span>
                  )}

                  {/* Rating Badge top-right */}
                  <span className="absolute top-4 right-4 bg-brand-black/40 backdrop-blur-xs text-white text-xs px-2 py-0.5 font-bold flex items-center gap-1">
                    {p.rating}
                    <Star className="w-3 h-3 text-brand-yellow fill-brand-yellow" />
                  </span>
                </div>

                {/* Card Body Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-condensed text-xl font-bold uppercase text-white mb-2 leading-snug group-hover:text-brand-orange transition-colors">
                      {p.name}
                    </h3>
                    <ul className="space-y-1.5 mb-5">
                      {p.specifications.slice(0, 2).map((s, idx) => (
                        <li key={idx} className="font-sans text-xs text-brand-gray-mid flex items-start gap-1">
                          <span className="text-brand-orange-light select-none mr-1">&#8226;</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Product card footer */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <div>
                      {p.price === 'on_request' ? (
                        <div className="font-condensed text-base font-bold text-brand-orange tracking-wider uppercase">
                          Trade Inquire
                        </div>
                      ) : (
                        <div className="flex items-baseline gap-2">
                          <span className="font-condensed text-2xl font-black text-brand-orange">
                            AED {p.price}
                          </span>
                          {p.originalPrice && (
                            <span className="font-sans text-xs text-brand-gray-mid line-through mb-1">
                              AED {p.originalPrice}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Quick Trigger ADD TO CART */}
                    <button
                      onClick={(e) => handleAddToCart(p, e)}
                      className={`relative w-10 h-10 flex items-center justify-center uppercase font-condensed font-bold cursor-pointer transition-all duration-200 outline-none ${
                        addedNotification === p.id
                          ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                          : 'bg-brand-orange hover:bg-brand-orange-light text-white'
                      }`}
                      style={{ clipPath: 'polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)' }}
                      aria-label="Add product to request list"
                    >
                      {addedNotification === p.id ? (
                        <CheckCircle className="w-5 h-5 text-white" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-brand-steel/30 border border-white/5 rounded-xs">
            <p className="text-brand-gray-mid text-lg">
              No professional equipment matching "{searchTerm}" was found.
            </p>
            <button
              onClick={() => { setSearchTerm(''); onSelectCategory('all'); }}
              className="mt-4 text-brand-orange hover:text-brand-orange-light font-bold uppercase transition-colors"
            >
              Clear filters and view all
            </button>
          </div>
        )}

        {/* MODAL / QUICK VIEW DETAIL TRIGGER */}
        {focusedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in">
            <div className="bg-brand-steel border border-brand-orange/40 w-full max-w-2xl overflow-hidden relative shadow-2xl animate-scale-up max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setFocusedProduct(null)}
                className="absolute top-4 right-4 z-10 bg-brand-black/60 hover:bg-brand-orange text-white p-2 transition-colors cursor-pointer rounded-xs border border-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner Design block */}
              <div className="bg-linear-to-br from-brand-steel to-brand-steel-light p-6 h-56 flex items-center justify-center relative border-b border-white/10">
                <span className="text-8.5xl drop-shadow-[0_6px_16px_rgba(0,0,0,0.6)] select-none">
                  {focusedProduct.emoji}
                </span>
                {focusedProduct.badge && (
                  <span className="absolute top-6 left-6 block bg-brand-orange text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 shadow-md">
                    {focusedProduct.badge}
                  </span>
                )}
                {/* Rating overlay */}
                <div className="absolute bottom-4 right-6 bg-brand-black/60 text-white font-bold text-xs p-2 flex items-center gap-1 rounded-sm border border-white/5">
                  <Star className="w-3.5 h-3.5 text-brand-yellow fill-brand-yellow" />
                  <span>{focusedProduct.rating} / 5.0 Rating ({focusedProduct.reviewsCount} verified)</span>
                </div>
              </div>

              {/* Modal Context details */}
              <div className="p-8">
                <h3 className="font-condensed text-3xl font-black text-white uppercase leading-snug mb-3">
                  {focusedProduct.name}
                </h3>
                <p className="font-sans text-sm text-brand-gray-light leading-relaxed mb-6">
                  {focusedProduct.description}
                </p>

                {/* Professional Specs */}
                <h4 className="font-condensed text-lg font-bold uppercase text-brand-orange tracking-wider mb-2">
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {focusedProduct.specifications.map((spec, idx) => (
                    <div key={idx} className="bg-brand-black/45 border border-white/5 p-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      <span className="font-sans text-xs text-brand-gray-light font-medium">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Sub Features Bullet list */}
                {focusedProduct.features && (
                  <>
                    <h4 className="font-condensed text-lg font-bold uppercase text-brand-orange tracking-wider mb-2">
                      Pro Grade Features
                    </h4>
                    <ul className="space-y-1.5 mb-8">
                      {focusedProduct.features.map((feat, idx) => (
                        <li key={idx} className="font-sans text-xs text-brand-gray-mid flex items-start gap-1">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Footer Modal Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
                  <div>
                    {focusedProduct.price === 'on_request' ? (
                      <div>
                        <div className="font-condensed text-lg font-bold text-brand-orange uppercase leading-none mb-1">
                          Available on Request
                        </div>
                        <div className="font-sans text-xs text-brand-gray-mid">
                          Add to quote builder for custom trade discounts
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-condensed text-3xl font-black text-brand-orange leading-none">
                            AED {focusedProduct.price}
                          </span>
                          {focusedProduct.originalPrice && (
                            <span className="font-sans text-sm text-brand-gray-mid line-through leading-none">
                              AED {focusedProduct.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="font-sans text-xs text-brand-gray-mid mt-1">
                          Inclusive of VAT and fast UAE delivery options
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                    {/* Add to list trigger */}
                    <button
                      onClick={(e) => { handleAddToCart(focusedProduct, e); setFocusedProduct(null); }}
                      className="bg-brand-orange hover:bg-brand-orange-light text-white font-condensed font-bold text-base uppercase tracking-wider py-3 px-6 cursor-pointer"
                      style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
                    >
                      Add To Basket
                    </button>
                    {/* Close triggers */}
                    <a
                      href="https://www.amazon.ae/stores/UPSPIRIT/page/A7CCD45A-C743-4805-9ACE-C04955757EA3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-steel-light border border-white/15 hover:border-brand-orange/40 text-center text-white font-condensed font-bold text-base uppercase tracking-wider py-3 px-6 flex items-center justify-center gap-1"
                    >
                      Amazon.ae Page &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
