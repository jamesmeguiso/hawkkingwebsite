import React, { useState } from 'react';
import { Star, MessageSquarePlus, CheckCircle, Shield } from 'lucide-react';
import { Review } from '../types';

interface TestimonialsProps {
  reviews: Review[];
  onAddReview: (review: Review) => void;
}

export default function Testimonials({ reviews, onAddReview }: TestimonialsProps) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !text || !role) return;

    const newReview: Review = {
      id: `custom-rev-${Date.now()}`,
      stars: rating,
      text: text,
      name: name,
      role: role,
      avatar: name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) || 'HK',
      date: new Date().toISOString().split('T')[0],
      verified: true
    };

    onAddReview(newReview);
    setSuccess(true);
    setTimeout(() => {
      setName('');
      setRole('');
      setRating(5);
      setText('');
      setSuccess(false);
      setShowReviewForm(false);
    }, 2000);
  };

  return (
    <section id="reviews" className="bg-brand-steel border-t border-white/5 py-20 px-4 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-sans text-xs font-bold tracking-widest text-brand-orange uppercase mb-2">
              Customer Reviews
            </div>
            <h2 className="font-condensed text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white leading-tight">
              Trusted by UAE <span className="text-brand-orange">Professionals</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-brand-gray-mid max-w-xl mt-3 leading-relaxed">
              Contractors, maintenance teams, and DIY enthusiasts across Dubai, Abu Dhabi, and Sharjah rely on HawkKing tools every single day to get their work done safely.
            </p>
          </div>

          <button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-light text-white font-condensed font-bold text-base uppercase tracking-wider py-3 px-6 cursor-pointer"
            style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
          >
            <MessageSquarePlus className="w-5 h-5" /> 
            {showReviewForm ? 'Cancel review' : 'Write a Review'}
          </button>
        </div>

        {/* REVIEW FORM COLLAPSIBLE */}
        {showReviewForm && (
          <div className="bg-brand-black/95 border border-brand-orange/45 p-6 md:p-8 rounded-xs mb-10 max-w-2xl mx-auto animate-fade-in relative z-20">
            {success ? (
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <CheckCircle className="w-16 h-16 text-emerald-500 mb-4 animate-bounce" />
                <h4 className="font-condensed text-2xl font-bold uppercase text-white mb-2">
                  Review Submitted Successfully!
                </h4>
                <p className="font-sans text-sm text-brand-gray-mid">
                  Thank you for sharing your genuine trade feedback.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="font-condensed text-xl font-bold uppercase text-white mb-4 border-b border-white/10 pb-2">
                  Share Your Trade Experience
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-brand-gray-mid mb-1 font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ahmed Al-Mansoori"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-brand-steel border border-white/10 text-white placeholder-brand-gray-mid/45 p-3 text-sm focus:outline-hidden focus:border-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-brand-gray-mid mb-1 font-semibold">
                      Your Trade Role & Emirate
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Electrician, Dubai"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full bg-brand-steel border border-white/10 text-white placeholder-brand-gray-mid/45 p-3 text-sm focus:outline-hidden focus:border-brand-orange"
                    />
                  </div>
                </div>

                {/* Rating selection */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-brand-gray-mid mb-1 font-semibold">
                    Overall Equipment Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 cursor-pointer hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= rating ? 'text-brand-yellow fill-brand-yellow' : 'text-brand-gray-mid/30'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-brand-gray-mid mb-1 font-semibold">
                    Detailed Review
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell other UAE contractors about the build quality, load tests, or power delivery..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full bg-brand-steel border border-white/10 text-white placeholder-brand-gray-mid/45 p-3 text-sm focus:outline-hidden focus:border-brand-orange"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="bg-brand-orange hover:bg-brand-orange-light text-white font-condensed font-bold text-base uppercase tracking-wider py-3 px-8 cursor-pointer"
                    style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
                  >
                    Submit Review &rarr;
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* REVIEWS GRID SHOWCASE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-brand-black/95 border border-white/5 hover:border-brand-orange/30 p-8 rounded-xs relative flex flex-col justify-between transition-all duration-300"
            >
              {/* Giant quote watermark */}
              <div className="absolute top-4 right-6 font-condensed text-7xl font-extrabold text-brand-orange/5 select-none leading-none">
                "
              </div>

              <div>
                {/* Score */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.stars ? 'text-brand-yellow fill-brand-yellow' : 'text-brand-gray-mid/20'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-[13px] text-brand-gray-light leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center gap-3 mt-4 border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-full bg-brand-orange text-white font-condensed font-bold text-sm flex items-center justify-center select-none shadow-md shrink-0">
                  {rev.avatar}
                </div>
                <div>
                  <div className="font-sans text-sm font-semibold text-white flex items-center gap-1.5 leading-none mb-1">
                    <span>{rev.name}</span>
                    {rev.verified && (
                      <Shield className="w-3.5 h-3.5 text-brand-orange-light fill-brand-orange/20" title="Verified UAE Buyer" />
                    )}
                  </div>
                  <div className="font-sans text-xs text-brand-gray-mid">{rev.role}</div>
                </div>
                {/* Date indicator */}
                <span className="ml-auto text-[10px] text-brand-gray-mid/50 font-mono tracking-tight">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
