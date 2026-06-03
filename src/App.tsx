import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Categories from './components/Categories';
import Products from './components/Products';
import WhyHawkKing from './components/WhyHawkKing';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import SocialChannels from './components/SocialChannels';
import FAQ from './components/FAQ';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

import { Product, CartItem, Review } from './types';
import { REVIEWS } from './data';

export default function App() {
  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem('hawkking_basket');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Testimonials/Reviews state (allows adding custom reviews in real-time)
  const [reviews, setReviews] = useState<Review[]>(REVIEWS);

  // Selected filter category global state (linked to bento grid and filter chips)
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Slide Cart panel state
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Save cart basket state persistently to local storage
  useEffect(() => {
    localStorage.setItem('hawkking_basket', JSON.stringify(cartItems));
  }, [cartItems]);

  // Handlers
  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.product.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.product.id === productId) {
            const nextQty = item.quantity + delta;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleAddReview = (newReview: Review) => {
    setReviews((prevReviews) => [newReview, ...prevReviews]);
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="bg-brand-black min-h-screen text-white/95 flex flex-col justify-between selection:bg-brand-orange selection:text-white">
      {/* Dynamic fixed navigation header details */}
      <Navbar 
        cartCount={totalCartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      {/* Main visual portal contents */}
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Categories onSelectCategory={setSelectedCategory} />
        <Products 
          onAddToCart={handleAddToCart}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <WhyHawkKing />
        <HowItWorks />
        <Testimonials 
          reviews={reviews} 
          onAddReview={handleAddReview} 
        />
        <SocialChannels />
        <FAQ />
      </main>

      {/* Footer information blocks */}
      <Footer />

      {/* Slide-over cart list overview */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
