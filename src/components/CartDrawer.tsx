import React, { useState, useMemo } from 'react';
import { X, Trash2, Plus, Minus, MapPin, MessageSquare, Mail, AlertTriangle } from 'lucide-react';
import { CartItem, Product } from '../types';
import { EMIRATES } from '../data';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [selectedEmirateName, setSelectedEmirateName] = useState('Dubai');
  const [customerName, setCustomerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');

  const currentEmirate = useMemo(() => {
    return EMIRATES.find((e) => e.name === selectedEmirateName) || EMIRATES[0];
  }, [selectedEmirateName]);

  // Calculations
  const calculations = useMemo(() => {
    let itemsSubtotal = 0;
    let containsOnRequestItems = false;

    cartItems.forEach((item) => {
      if (item.product.price === 'on_request') {
        containsOnRequestItems = true;
      } else {
        itemsSubtotal += (item.product.price as number) * item.quantity;
      }
    });

    const isDeliveryFree = itemsSubtotal >= currentEmirate.freeThreshold && !containsOnRequestItems;
    const deliveryFee = isDeliveryFree ? 0 : currentEmirate.baseFee;
    const vat = parseFloat(((itemsSubtotal + deliveryFee) * 0.05).toFixed(2));
    const total = parseFloat((itemsSubtotal + deliveryFee + vat).toFixed(2));

    return {
      itemsSubtotal,
      containsOnRequestItems,
      deliveryFee,
      isDeliveryFree,
      vat,
      total
    };
  }, [cartItems, currentEmirate]);

  // Construct inquiry message for WhatsApp or Email
  const buildInquiryString = (channel: 'whatsapp' | 'email') => {
    const header = `*HAWKKING UAE - PRO TOOLS INQUIRY FOR QUOTE*\n\n`;
    const customerInfo = `*Contact Details:*\n• Name: ${customerName || 'Value Tradesperson'}\n• Phone: ${phone || 'Not specified'}\n• Company: ${companyName || 'Private'}\n• Destination: ${selectedEmirateName} (${currentEmirate.deliveryDays} delivery)\n\n`;
    
    let itemsText = `*Requested Equipment:*\n`;
    cartItems.forEach((item, idx) => {
      const priceText = item.product.price === 'on_request' ? 'Price on Request' : `AED ${item.product.price} each`;
      itemsText += `${idx + 1}. [${item.product.emoji}] ${item.product.name} (Qty: ${item.quantity}) - ${priceText}\n`;
    });

    let footer = `\n`;
    if (calculations.containsOnRequestItems) {
      footer += `*Request Summary:*\n• Trade estimate values requested for special kit configurations.\n`;
    } else {
      footer += `*Cost Summary:*\n• Subtotal: AED ${calculations.itemsSubtotal}\n• Delivery fee: AED ${calculations.deliveryFee}\n• VAT (5%): AED ${calculations.vat}\n• *Estimated Total: AED ${calculations.total}* (Cash on Delivery / Card on Delivery)\n`;
    }

    footer += `\nThank you, please forward to corporate trade counter for bulk discount verification.`;

    if (channel === 'whatsapp') {
      const encodedText = encodeURIComponent(header + customerInfo + itemsText + footer);
      return `https://wa.me/971500000000?text=${encodedText}`; // Dummy pro UAE WhatsApp
    } else {
      const subject = encodeURIComponent(`HawkKing UAE Tool Quote Inquiry - ${customerName || 'Trade Buyer'}`);
      const body = encodeURIComponent(header.replace(/\*/g, '') + customerInfo.replace(/\*/g, '') + itemsText.replace(/\*/g, '') + footer.replace(/\*/g, ''));
      return `mailto:sales@hawkking.ae?subject=${subject}&body=${body}`;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Overlay Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-xs transition-opacity duration-300 animate-fade-in" 
      />

      {/* Slide Drawer panel */}
      <div className="absolute inset-y-0 right-0 w-full max-w-lg bg-brand-steel border-l border-brand-orange/20 shadow-2xl flex flex-col justify-between z-10 animate-slide-in">
        {/* Header Drawer */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-brand-black">
          <div className="flex items-center gap-2">
            <span className="font-condensed text-xl font-bold text-white uppercase tracking-wider">
              Your Quote Basket
            </span>
            <span className="bg-brand-orange text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)} Items
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 px-2.5 bg-brand-steel border border-white/5 text-brand-gray-mid hover:text-white hover:bg-brand-orange hover:border-brand-orange transition-colors cursor-pointer rounded-xs"
          >
            <X className="w-5 h-5 inline mr-1" /> Close
          </button>
        </div>

        {/* Content Side Drawer */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
              <span className="text-6xl select-none">&#128717;</span>
              <h4 className="font-condensed text-xl font-bold uppercase text-white">Your Basket is Empty</h4>
              <p className="text-xs text-brand-gray-mid max-w-[280px]">
                Browse our industrial-grade tools and ladders catalog to compile custom trade estimate inquiries.
              </p>
              <button
                onClick={onClose}
                className="bg-brand-orange hover:bg-brand-orange-light text-white font-condensed font-bold text-sm uppercase tracking-wider py-2.5 px-6"
                style={{ clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)' }}
              >
                Browse Equipment
              </button>
            </div>
          ) : (
            <>
              {/* CART ITEMS LIST */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#a8a5a0]">Equipment Selection</span>
                  <button
                    onClick={onClearCart}
                    className="text-xs text-rose-500 hover:text-rose-400 font-bold uppercase flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Clear All Items
                  </button>
                </div>

                <div className="space-y-3 max-h-[35vh] overflow-y-auto pr-1">
                  {cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="bg-brand-black/45 border border-white/5 p-4 flex gap-3.5 rounded-xs relative group"
                    >
                      {/* Product Emoji avatar icon */}
                      <div className="w-16 h-16 bg-brand-steel rounded-xs flex items-center justify-center text-4xl shrink-0 border border-white/5">
                        {item.product.emoji}
                      </div>

                      {/* Info and Quantity block */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h5 className="font-condensed text-base font-bold text-white uppercase leading-none truncate max-w-[200px]">
                              {item.product.name}
                            </h5>
                            <button
                              onClick={() => onRemoveItem(item.product.id)}
                              className="text-brand-gray-mid/65 hover:text-rose-500 p-0.5"
                              aria-label="Remove item"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <span className="text-[10px] text-brand-orange italic tracking-wider block mt-1">
                            {item.product.specifications[0]}
                          </span>
                        </div>

                        {/* Adjust indicators and pricing */}
                        <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-white/5">
                          <div className="flex items-center border border-white/10 rounded-xs bg-brand-steel">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, -1)}
                              className="px-2.5 py-1 text-brand-gray-mid hover:text-white transition-colors cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-sm font-bold text-white tracking-widest font-mono">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, 1)}
                              className="px-2.5 py-1 text-brand-gray-mid hover:text-white transition-colors cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="text-right">
                            {item.product.price === 'on_request' ? (
                              <span className="text-xs uppercase font-extrabold text-brand-orange">
                                Price on request
                              </span>
                            ) : (
                              <span className="font-condensed text-base font-extrabold text-brand-orange">
                                AED {((item.product.price as number) * item.quantity)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ESTIMATE DESIGN SHEET: UAE EMIRATES SELECTOR */}
              <div className="space-y-4 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#a8a5a0] flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-brand-orange" /> Delivery UAE Destination
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#a8a5a0] font-semibold mb-1">
                      Select UAE Emirate
                    </label>
                    <select
                      value={selectedEmirateName}
                      onChange={(e) => setSelectedEmirateName(e.target.value)}
                      className="w-full bg-brand-black text-white text-xs border border-white/10 p-2.5 focus:outline-hidden focus:border-brand-orange"
                    >
                      {EMIRATES.map((e) => (
                        <option key={e.name} value={e.name}>
                          {e.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Delivery parameters visual card */}
                  <div className="bg-brand-black/45 border border-white/5 p-2.5 flex flex-col justify-center rounded-xs">
                    <div className="text-[10px] text-brand-gray-mid uppercase">Estimated Transit</div>
                    <div className="font-condensed text-sm font-bold text-white tracking-widest uppercase">
                      {currentEmirate.deliveryDays}
                    </div>
                    <div className="text-[10px] text-brand-gray-mid mt-0.5">
                      Base rate threshold: AED {currentEmirate.baseFee} (Free above AED {currentEmirate.freeThreshold})
                    </div>
                  </div>
                </div>

                {/* CLIENT TRADE DETAILS FOR FORMAL EXPORT INQUIRY MESSAGE */}
                <div className="bg-brand-black/35 border border-white/5 p-4 space-y-3 rounded-xs">
                  <span className="text-xs uppercase font-bold tracking-wider text-white block border-b border-white/5 pb-1">
                    Your Trade Profile
                  </span>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full bg-brand-steel border border-white/10 text-white placeholder-brand-gray-mid/45 p-2 text-xs focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Mobile Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-brand-steel border border-white/10 text-white placeholder-brand-gray-mid/45 p-2 text-xs focus:outline-hidden"
                      />
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Company / Warehouse Name (Optional)"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-brand-steel border border-white/10 text-white placeholder-brand-gray-mid/45 p-2 text-xs focus:outline-hidden"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Dynamic Cost Panel Sheet & Double CTA checkout trigger */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-brand-black border-t border-white/10 space-y-4">
            {calculations.containsOnRequestItems ? (
              <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-xs flex items-start gap-2.5">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="font-sans text-[11px] text-amber-200 leading-normal">
                  Your quote contains special non-listed components (<strong>on-request values</strong>). Once you submit your list, our UAE team will provide a formal quotation within 1-2 hours.
                </p>
              </div>
            ) : (
              <div className="space-y-2 text-sm font-semibold text-brand-gray-mid select-none font-sans">
                <div className="flex justify-between">
                  <span>Product Subtotal:</span>
                  <span className="text-white">AED {calculations.itemsSubtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>
                    Shipping ({selectedEmirateName}):
                    {calculations.isDeliveryFree && (
                      <span className="text-[10px] text-emerald-500 font-extrabold uppercase ml-1.5">Free</span>
                    )}
                  </span>
                  <span className="text-white">
                    {calculations.isDeliveryFree ? 'AED 0' : `AED ${calculations.deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>VAT (5% compliance standard):</span>
                  <span className="text-white">AED {calculations.vat}</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-2 text-base font-black">
                  <span className="text-white font-condensed tracking-wider uppercase">Estimated Order Total:</span>
                  <span className="text-brand-orange font-condensed text-xl">AED {calculations.total}</span>
                </div>
              </div>
            )}

            {/* double click action triggers */}
            <div className="grid grid-cols-2 gap-3.5 pt-2">
              <a
                href={buildInquiryString('whatsapp')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-condensed font-bold text-center py-3.5 text-base uppercase tracking-wider transition-colors cursor-pointer"
                style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
              >
                <MessageSquare className="w-4.5 h-4.5 shrink-0 fill-white" /> WhatsApp Quote
              </a>

              <a
                href={buildInquiryString('email')}
                className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-light text-white font-condensed font-bold text-center py-3.5 text-base uppercase tracking-wider transition-colors cursor-pointer"
                style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
              >
                <Mail className="w-4.5 h-4.5 shrink-0" /> Email Inquiry
              </a>
            </div>

            <div className="text-center font-sans text-[10px] text-brand-gray-mid">
              Standard secure payments processed on cash / card handover at delivery. Available to trade clients of UAE.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
