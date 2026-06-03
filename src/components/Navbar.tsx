import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-12 py-4 flex items-center justify-between border-b ${
          isScrolled
            ? 'bg-brand-black/95 backdrop-blur-md border-brand-orange/20 shadow-lg'
            : 'bg-brand-black/80 backdrop-blur-sm border-brand-orange/10'
        }`}
      >
        {/* LOGO */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="font-condensed text-2xl md:text-3xl font-extrabold tracking-tight text-white select-none transition-transform hover:scale-105"
        >
          HAWK<span className="text-brand-orange">KING</span>
        </a>

        {/* DESKTOP NAV LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider text-brand-gray-mid uppercase">
          <li>
            <button
              onClick={() => scrollToSection('products')}
              className="hover:text-brand-orange transition-colors cursor-pointer"
            >
              Products
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('categories')}
              className="hover:text-brand-orange transition-colors cursor-pointer"
            >
              Categories
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('why')}
              className="hover:text-brand-orange transition-colors cursor-pointer"
            >
              Why Us
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('reviews')}
              className="hover:text-brand-orange transition-colors cursor-pointer"
            >
              Reviews
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-brand-orange transition-colors cursor-pointer"
            >
              FAQs
            </button>
          </li>
        </ul>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-3">
          {/* CART TRIGGER */}
          <button
            id="cart-trigger"
            onClick={onOpenCart}
            className="relative p-2 text-white bg-brand-steel/60 hover:bg-brand-orange/20 border border-white/10 hover:border-brand-orange/40 transition-all duration-200 cursor-pointer rounded-sm"
            aria-label="Open Shopping Cart"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-brand-orange text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse shadow-md border border-brand-black">
                {cartCount}
              </span>
            )}
          </button>

          {/* AMAZON BUTTON */}
          <a
            href="https://www.amazon.ae/stores/UPSPIRIT/page/A7CCD45A-C743-4805-9ACE-C04955757EA3"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-brand-orange text-white hover:bg-brand-orange-light px-5 py-2 text-sm font-semibold tracking-wider font-condensed uppercase transition-all duration-200 transform shadow-md hover:-translate-y-0.5"
            style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
          >
            Shop on Amazon <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 md:hidden text-white bg-brand-steel/40 border border-white/5"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* MOBILE NAV DRAWER */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-brand-black/95 backdrop-blur-md md:hidden flex flex-col justify-start px-8 py-12 gap-8 border-t border-brand-orange/20 animate-fade-in">
          <ul className="flex flex-col gap-6 text-xl font-bold tracking-wider text-brand-gray-light font-condensed uppercase">
            <li>
              <button
                onClick={() => scrollToSection('products')}
                className="w-full text-left hover:text-brand-orange transition-colors"
              >
                Products
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('categories')}
                className="w-full text-left hover:text-brand-orange transition-colors"
              >
                Categories
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('why')}
                className="w-full text-left hover:text-brand-orange transition-colors"
              >
                Why Us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('reviews')}
                className="w-full text-left hover:text-brand-orange transition-colors"
              >
                Reviews
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('faq')}
                className="w-full text-left hover:text-brand-orange transition-colors"
              >
                FAQs
              </button>
            </li>
          </ul>

          <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCart();
              }}
              className="flex items-center justify-center gap-2 bg-brand-steel/60 hover:bg-brand-orange/20 text-white font-semibold p-3 border border-white/10"
            >
              <ShoppingCart className="w-5 h-5 text-brand-orange" />
              View Cart ({cartCount} Items)
            </button>
            <a
              href="https://www.amazon.ae/stores/UPSPIRIT/page/A7CCD45A-C743-4805-9ACE-C04955757EA3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 bg-brand-orange text-white font-bold p-3 font-condensed uppercase tracking-wider text-center"
              style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
            >
              Shop on Amazon UAE <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
