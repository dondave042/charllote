export interface Service {
  id: number;
  name: string;
  category: string;
  description: string;
  price_cents: number;
  duration_minutes: number;
  featured: boolean;
  image_url: string;
}

export const mockServices: Service[] = [
  {
    id: 1,
    name: "Private Companionship",
    category: "Companionship",
    description: "An evening of refined conversation and graceful company, tailored to your preferences and desires.",
    price_cents: 150000,
    duration_minutes: 180,
    featured: true,
    image_url: "https://images.pexels.com/photos/1679618/pexels-photo-1679618.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    name: "Couples Experience",
    category: "Couples",
    description: "A curated encounter designed for couples seeking to enrich their evening with elegance and intrigue.",
    price_cents: 250000,
    duration_minutes: 240,
    featured: true,
    image_url: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    name: "Weekend Retreat",
    category: "Retreats",
    description: "An immersive escape — two days of uninterrupted companionship at a venue of your choosing.",
    price_cents: 500000,
    duration_minutes: 2880,
    featured: true,
    image_url: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 4,
    name: "Travel Companion",
    category: "Travel",
    description: "A sophisticated partner for your journeys — fluent in art, culture, and the art of conversation.",
    price_cents: 350000,
    duration_minutes: 1440,
    featured: true,
    image_url: "https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 5,
    name: "Private Dining",
    category: "Dining",
    description: "An intimate dinner engagement with a companion of exceptional grace and intellect.",
    price_cents: 120000,
    duration_minutes: 150,
    featured: false,
    image_url: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 6,
    name: "Event Hosting",
    category: "Events",
    description: "A polished companion for galas, openings, and private soirées — the perfect plus-one.",
    price_cents: 200000,
    duration_minutes: 300,
    featured: false,
    image_url: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 7,
    name: "The Connoisseur",
    category: "Companionship",
    description: "For those who appreciate the finer things — wine, art, literature — a companion of rare depth.",
    price_cents: 180000,
    duration_minutes: 240,
    featured: false,
    image_url: "https://images.pexels.com/photos/1181441/pexels-photo-1181441.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 8,
    name: "Midnight Conversation",
    category: "Companionship",
    description: "An extended late-night engagement for those who find the most meaningful hours after dark.",
    price_cents: 220000,
    duration_minutes: 360,
    featured: false,
    image_url: "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 9,
    name: "Cultural Excursion",
    category: "Travel",
    description: "Gallery openings, theatre premieres, or museum visits — accompanied by a cultured companion.",
    price_cents: 160000,
    duration_minutes: 240,
    featured: false,
    image_url: "https://images.pexels.com/photos/1191533/pexels-photo-1191533.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const faqData = [
  {
    q: "How do I make a reservation?",
    a: "Navigate to our Reservations page, choose your experience, select a date and time, and provide a few details. Our concierge will confirm your booking personally within hours."
  },
  {
    q: "What is your cancellation policy?",
    a: "Cancellations made more than 48 hours in advance are fully refundable. Within 48 hours, we offer rescheduling at no charge. Companions are vetted and available with proper notice."
  },
  {
    q: "How is my privacy protected?",
    a: "Discretion is our highest principle. Communications are end-to-end encrypted. Personal information is never stored on third-party platforms and is purged after your engagement concludes."
  },
  {
    q: "What if I need to change my booking?",
    a: "Simply open a support ticket or message us via the live chat. Our concierge is available 24/7 to accommodate changes discreetly."
  },
  {
    q: "Are companions vetted?",
    a: "Every companion in our collection is personally interviewed, reference-checked, and trained to the Charlotte Prestige standard of refinement, intelligence, and discretion."
  },
  {
    q: "Do you offer international services?",
    a: "Yes. Our house serves distinguished members across North America, Europe, and the Middle East. Travel companions can be arranged for destination experiences worldwide."
  }
];

export function formatDuration(minutes: number): string {
  if (!minutes) return '';
  if (minutes < 60) return `${minutes} min`;
  if (minutes < 1440) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
  }
  return `${Math.floor(minutes / 1440)}d`;
}

export function formatPrice(cents: number): string {
  return `$${(cents / 100).toLocaleString()}`;
}
