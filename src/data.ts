import { Product, Review, FAQItem } from './types';

export const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'ladders', label: 'Ladders & Scaffolding' },
  { id: 'power_tools', label: 'Power Tools' },
  { id: 'hand_tools', label: 'Hand Tools' },
  { id: 'kits', label: 'Tool Kits' },
  { id: 'accessories', label: 'Accessories' }
];

export const PRODUCTS: Product[] = [
  {
    id: 'hawk-ladder-24',
    name: '24-Step Multipurpose Ladder',
    category: 'ladders',
    specifications: ['EN131 Certified Security', '7.1m / 23ft Max Work Reach', '150kg Heavy-Duty Capacity'],
    description: 'Our top-selling professional ladder in the UAE. Featuring premium aircraft-grade aluminum alloy construction, anti-slip stabilizer bars, and heavy-duty hinges for 10+ different configurations. Perfect for commercial site work, painters, and maintenance departments.',
    price: 451,
    originalPrice: 460,
    badge: 'Best Seller',
    emoji: '🪜',
    rating: 4.9,
    reviewsCount: 142,
    features: [
      'Multi-position lockable joints for quick transitions.',
      'Extremely wide stabilizer bar with thick heavy-rubber feet.',
      'Oxidation treatment prevents rust under intense UAE humidity.',
      'Exceeds European standard EN131 safety certifications.'
    ]
  },
  {
    id: 'hawk-drill-680w',
    name: 'Electric Drill 10mm 680W',
    category: 'power_tools',
    specifications: ['680W High-Torque Motor', '10mm Durable Keyed Chuck', 'Variable Speed Dial (0-2800 RPM)'],
    description: 'A masterpiece of compact drilling power. Features high speed ventilation channels, dual rotational modes (forward & reverse), and a continuous trigger lock. Engineered for concrete, steel, wood, and drywall drilling.',
    price: 140,
    originalPrice: 154,
    badge: 'Site Ready',
    emoji: '🔩',
    rating: 4.8,
    reviewsCount: 89,
    features: [
      'Variable speed control dial integrated into trigger.',
      'Ergonomic soft D-grip handle to minimize fatigue.',
      'Hardened steel gears for maximum durability and durability.',
      'Included sturdy chuck key and standard carbon brush set.'
    ]
  },
  {
    id: 'hawk-socket-108',
    name: '108-Pcs Socket Spanner Set',
    category: 'kits',
    specifications: ['Chrome Vanadium Steel Alloy', '1/4" & 1/2" Pro Ratchets', 'Ergonomic Heavy Blow-Case'],
    description: 'The ultimate mechanical toolkit for field engineers, automotive workshops, and building maintenance teams. Covers the absolute entire spectrum of sockets, deep sockets, Torx bits, extensions, and universal joints.',
    price: 'on_request',
    badge: 'Value Pick',
    emoji: '🔧',
    rating: 4.7,
    reviewsCount: 74,
    features: [
      'Engineered in premium Chrome Vanadium Steel (Cr-V).',
      'Precision quick-release 72-teeth reversible ratchets.',
      'Perfect organization case that holds every piece tightly under heavy transport.',
      'Includes spark plug sockets and multiple adapter extensions.'
    ]
  },
  {
    id: 'hawk-ladder-16',
    name: '5m Aluminum Multipurpose Ladder',
    category: 'ladders',
    specifications: ['16 Non-Slip Ribbed Steps', '5.0m Maximum Reach Length', '150kg Dual-Stabilizer Rating'],
    description: 'The standard multi-purpose workhorse. Packs down into a compact size that easily fits in small vehicles. Built with heavy aluminum wall profiles to reduce lateral flex while maintaining absolute portable lightness.',
    price: 333,
    originalPrice: 420,
    badge: 'Hot Deal',
    emoji: '🪜',
    rating: 4.8,
    reviewsCount: 61,
    features: [
      'Configures as scaffold, A-frame, extension or wall ladder.',
      'Anti-slip horizontal grooves on every rung.',
      'Safety certification compliance label printed on-frame.',
      'Large self-locking hinge brackets for maximum stability.'
    ]
  },
  {
    id: 'hawk-ladder-step-3',
    name: '3-Step Folding Steel Ladder',
    category: 'ladders',
    specifications: ['Thick Alloy Steel Framing', 'Wide Textured Anti-slip Steps', 'Secure Top Grab Safety Rail'],
    description: 'The perfect domestic and office utility step-stool. Rated for professional durability but designed with ultra-slim storage profile in mind. Features high safety back arch and heavy-duty floor floor guards.',
    price: 166,
    originalPrice: 183,
    badge: 'Sturdy Steel',
    emoji: '🪜',
    rating: 4.9,
    reviewsCount: 110,
    features: [
      'Extra-wide 30x20cm platforms for absolute climbing comfort.',
      'Fold-and-store safety lock prevents accidental collapses.',
      'Scratch-resistant paint coat matches modern storage racks.',
      'Non-marring heavy rubber caps won\'t scratch polished tile floors.'
    ]
  },
  {
    id: 'hawk-ladder-atype-6',
    name: '6-Step Aluminum A-Type Ladder',
    category: 'ladders',
    specifications: ['Single-sided A-Frame profile', 'High tensile lightweight aluminum', 'Extended high tool-trap top tray'],
    description: 'Specifically crafted for electricians, HVAC techs, and facility renovators. Lightweight to permit hours of repetitive single-person porting, yet engineered with solid double-rivet steps for industrial resilience.',
    price: 'on_request',
    badge: 'New',
    emoji: '🧰',
    rating: 4.7,
    reviewsCount: 33,
    features: [
      'Top multi-functional tray holds tools, screws, and paint cans.',
      'Slip-resistant rungs double-riveted into sturdy side members.',
      'Strong pinch-resistant spreader braces.',
      'Light enough to carry under one arm easily around jobsites.'
    ]
  },
  {
    id: 'hawk-grinder-950w',
    name: 'Industrial Angle Grinder 115mm',
    category: 'power_tools',
    specifications: ['950W Heavy Capacity Motor', '115mm / 4.5" Disc Size', '11,000 RPM No-Load Speed'],
    description: 'High-performance cutting and grinding with ultimate dust defense housing. Specially designed for steel cutting on UAE fabrication yards. Includes double-insulated dust seals for extremely long motor runtimes.',
    price: 185,
    originalPrice: 210,
    badge: 'Powerhouse',
    emoji: '⚙️',
    rating: 4.8,
    reviewsCount: 45,
    features: [
      'Rear switch for safety and comfortable control.',
      'Adjustable burst-proof guard for absolute operator protection.',
      'Spindle lock for easy and fast metal cutting disc changes.',
      'Auxiliary two-position handle minimizes fatigue during long tasks.'
    ]
  },
  {
    id: 'hawk-combokit-12v',
    name: '12V Cordless Drill & Impact Combo',
    category: 'kits',
    specifications: ['Dual 1.5Ah Lithium-Ion Batteries', '18+3 Torque Clutch Settings', 'Rapid 1-Hr Smart Fast Charger'],
    description: 'Perfect grab-and-go kit for assembly and service calls. Packed inside an elegant compact hard-shell storage box. LED lights integrated into drill heads render dark corners fully visible.',
    price: 245,
    originalPrice: 280,
    badge: 'Dual Kit',
    emoji: '🏗️',
    rating: 4.8,
    reviewsCount: 52,
    features: [
      'Includes cordless screwdriver drill and fast impact wrench.',
      'Two speed gears for drilling wood vs turning torque screws.',
      'Battery state of charge indicators built on battery pack.',
      'Comprehensive starter bit pack included at zero extra cost.'
    ]
  },
  {
    id: 'hawk-drillbits-26',
    name: '26-Piece Pro HSS Drill Bit Set',
    category: 'accessories',
    specifications: ['HSS Titanium Coated Steels', '1mm to 13mm Diameter Range', 'Industrial Metal Storage Index'],
    description: 'High-speed steel bit indices engineered to drill alloy steel, stainless materials, soft brass, wood, and hard polymers. Designed with standard round shanks compatible with keyless and keyed drill chucks.',
    price: 65,
    originalPrice: 85,
    badge: 'Sharp Precision',
    emoji: '⚙️',
    rating: 4.6,
    reviewsCount: 98,
    features: [
      '135-degree split point prevents drill walking.',
      'Titanium nitride plating runs up to 3x longer than carbon steel counterparts.',
      'Fully labeled metal index rack flips open automatically.',
      'Heat resistant construction survives long dry drills.'
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    stars: 5,
    text: 'Bought the 24-step multipurpose ladder for our building maintenance team. Incredibly sturdy — we use it daily and it hasn\'t let us down once. The EN131 certification gave our safety manager absolute peace of mind on audits. Absolutely recommended.',
    name: 'Ahmed Al-Khalidi',
    role: 'Facilities Manager, Dubai',
    avatar: 'AK',
    date: '2026-05-12',
    verified: true
  },
  {
    id: 'rev-2',
    stars: 5,
    text: 'The 680W drill is a beast for the price. We\'ve used branded drills at 3x the cost that perform worse. HawkKing has become our go-to for all site tools across our Abu Dhabi projects. Delivery was lightning fast.',
    name: 'Rajan Singh',
    role: 'Site Foreman, Abu Dhabi',
    avatar: 'RS',
    date: '2026-04-28',
    verified: true
  },
  {
    id: 'rev-3',
    stars: 4,
    text: 'Ordered the 108-piece socket set. Quality is excellent — everything fits perfectly and the blow case is highly solid and durable. Only reason I didn\'t give 5 stars is I wished the ratchet had a finer 90-tooth count. Still highly recommend!',
    name: 'Mohammed Farouq',
    role: 'Auto Workshop Owner, Sharjah',
    avatar: 'MF',
    date: '2026-05-02',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Do you deliver across all UAE? ',
    answer: 'Yes. All orders on Amazon.ae ship nationwide — Dubai, Abu Dhabi, Sharjah, RAK, Ajman, Fujairah and Al Ain. Fast and reliable delivery directly to your worksite or residence.',
    category: 'delivery'
  },
  {
    id: 'faq-2',
    question: 'Is cash on delivery available? ',
    answer: 'Absolutely. Cash on Delivery is supported on all purchase orders made via our Amazon.ae outlet. Pay with absolute safety on dropoff without needing card details beforehand.',
    category: 'delivery'
  },
  {
    id: 'faq-3',
    question: 'Are the ladders safety certified?',
    answer: 'Yes, and this is our proudest standard. Our multipurpose, extension, and scaffolding ladders carry certified EN131 European certifications carrying a verified 150kg safe weight load threshold.',
    category: 'product'
  },
  {
    id: 'faq-4',
    question: 'What is your return policy?',
    answer: 'We offer an iron-clad 14 days free trial return policy. If you buy through Amazon.ae, standard returns apply. Otherwise, bulk order exchanges are fully handled, free of hassles, directly by our customer team.',
    category: 'warranty'
  },
  {
    id: 'faq-5',
    question: 'Can I order in bulk for my company or projects?',
    answer: 'Yes! We actively cater to mechanical, construction contracting, facilities management, and corporate resellers. You can assemble mock quotes on this page and request custom discounts on bulk trades.',
    category: 'general'
  },
  {
    id: 'faq-6',
    question: 'What ladder configuration should I choose?',
    answer: 'For interior home storage and ceiling fan tasks, a simple 3 to 6-Step aluminum ladder is brilliant. For rugged outdoors, multi-tier HVAC work, or high ceilings, our 16-Step or 24-Step certified ladder delivers the unmatched reach up to 7.1 meters.',
    category: 'product'
  }
];

export const EMIRATES = [
  { name: 'Dubai', deliveryDays: '1-2 Days', baseFee: 20, freeThreshold: 200 },
  { name: 'Abu Dhabi', deliveryDays: '1-2 Days', baseFee: 25, freeThreshold: 250 },
  { name: 'Sharjah', deliveryDays: '1-2 Days', baseFee: 20, freeThreshold: 200 },
  { name: 'Ajman', deliveryDays: '2-3 Days', baseFee: 25, freeThreshold: 250 },
  { name: 'Ras Al Khaimah', deliveryDays: '2-3 Days', baseFee: 30, freeThreshold: 300 },
  { name: 'Fujairah', deliveryDays: '2-3 Days', baseFee: 30, freeThreshold: 300 },
  { name: 'Umm Al Quwain', deliveryDays: '2-3 Days', baseFee: 25, freeThreshold: 250 },
];
