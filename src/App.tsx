import React from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  UtensilsCrossed, 
  ShoppingBag, 
  Bike,
  Navigation,
  Heart,
  Share2
} from 'lucide-react';

const SignatureMenu = [
  { item: 'Mie Noodles Beef Fried', category: 'Main Course', desc: 'Savory stir-fried noodles with tender beef and signature spices.' },
  { item: 'Beef Rendang', category: 'Signature', desc: 'Slow-cooked beef in coconut milk and rich Indonesian herbs.' },
  { item: 'Nasi Goreng', category: 'Favorite', desc: 'The classic Indonesian fried rice, served with egg and crackers.' },
  { item: 'Specialty Donuts', category: 'Dessert', desc: 'Light, fluffy, and the perfect sweet end to your meal.' }
];

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="absolute inset-x-0 top-0 z-50 flex items-center justify-between p-6 lg:px-12">
        <div className="text-white text-xl font-serif font-bold tracking-widest uppercase">
          Borneo
        </div>
        <div className="flex gap-4">
          <button className="hidden md:block transition-all hover:text-saffron text-white font-medium text-sm tracking-wide">MENU</button>
          <button className="hidden md:block transition-all hover:text-saffron text-white font-medium text-sm tracking-wide">LOCATIONS</button>
          <button className="bg-saffron hover:bg-saffron-light transition-colors text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
            ORDER NOW
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center bg-forest-dark overflow-hidden p-6 lg:px-12 pt-24">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full overflow-hidden opacity-30 select-none pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-full h-[150%] bg-forest rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 select-none space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm bg-white/5">
              <span className="flex h-2 w-2 rounded-full bg-saffron animate-pulse" />
              <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">Kigali, Rwanda</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-serif text-white leading-[0.85] tracking-tight">
              Asian<br />
              <span className="text-saffron italic pr-4">Cuisine</span><br />
              Redefined.
            </h1>
            
            <p className="text-white/70 text-lg md:text-xl font-light max-w-md pt-4 leading-relaxed">
              Authentic flavors from the heart of Indonesia, served in Kigali. Experience the rich spices and traditional recipes of the archipelago.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-6">
              <button className="bg-white hover:bg-white/90 text-forest-dark px-8 py-3 rounded-full font-semibold transition-all shadow-xl shadow-white/10 flex items-center gap-2">
                <Navigation className="w-4 h-4" />
                Get Directions
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative mt-12 lg:mt-0"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://picsum.photos/seed/indofoodhero1/800/1000" 
                alt="Delicious Indonesian Food at Borneo Kigali" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="backdrop-blur-md bg-white/10 border border-white/20 p-5 rounded-3xl flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-saffron mb-1">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                      <p className="text-white font-medium">4.6 (341 Reviews)</p>
                    </div>
                    <div className="w-12 h-12 bg-saffron rounded-full flex items-center justify-center text-white">
                      <Heart className="w-5 h-5 fill-current opacity-80" />
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* At A Glance */}
      <section className="py-12 bg-forest text-white/90">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
          <div className="flex items-center gap-4 py-4 md:py-0">
            <Clock className="w-8 h-8 text-saffron" />
            <div>
              <h3 className="font-semibold text-white uppercase tracking-wider text-sm mb-1">Status</h3>
              <p className="font-light">Open • Closes 9:30 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-4 py-4 md:py-0 md:pl-8">
            <MapPin className="w-8 h-8 text-saffron" />
            <div>
              <h3 className="font-semibold text-white uppercase tracking-wider text-sm mb-1">Location</h3>
              <p className="font-light">18 KG 4 Ave, Kigali</p>
            </div>
          </div>
          <div className="flex items-center gap-4 py-4 md:py-0 md:pl-8">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><UtensilsCrossed className="w-4 h-4 text-saffron"/></div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><ShoppingBag className="w-4 h-4 text-saffron"/></div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><Bike className="w-4 h-4 text-saffron"/></div>
            </div>
            <div className="ml-2">
              <h3 className="font-semibold text-white uppercase tracking-wider text-sm mb-1">Service Modes</h3>
              <p className="font-light">Dine-in • Takeaway • Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Menu */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-forest-dark mb-4">Our Signature Menu.</h2>
            <div className="w-20 h-1 bg-saffron mb-10"></div>
            <p className="text-forest-dark/70 text-lg max-w-md hidden lg:block">
              Curated recipes from generations past, bringing you the authentic taste of the Indonesian islands with locally sourced, fresh ingredients.
            </p>
            
            {/* Minimalist image grid for menu ambiance */}
            <div className="grid grid-cols-2 gap-4 mt-12 hidden lg:grid">
               <img src="https://picsum.photos/seed/menuitem1/400/500" alt="Ingredients" className="rounded-2xl object-cover h-64 w-full" referrerPolicy="no-referrer" />
               <img src="https://picsum.photos/seed/menuitem2/400/500" alt="Cooking" className="rounded-2xl object-cover h-64 w-full mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {SignatureMenu.map((item, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="group border-b border-forest-dark/10 pb-8 flex flex-col sm:flex-row gap-4 sm:items-start justify-between"
              >
                <div className="max-w-sm">
                   <div className="text-xs font-bold text-saffron uppercase tracking-widest mb-2">{item.category}</div>
                   <h3 className="text-2xl font-serif text-forest-dark group-hover:text-saffron transition-colors mb-2">{item.item}</h3>
                   <p className="text-forest-dark/60 font-light text-sm">{item.desc}</p>
                </div>
                <button className="sm:self-center shrink-0 w-10 h-10 rounded-full border border-forest-dark/20 flex items-center justify-center text-forest-dark group-hover:bg-forest-dark group-hover:text-white transition-all">
                  +
                </button>
              </motion.div>
            ))}
            
            <button className="text-center w-full py-4 text-forest-dark font-semibold tracking-wide hover:text-saffron transition-colors underline underline-offset-4 decoration-saffron/30 hover:decoration-saffron">
              VIEW FULL MENU
            </button>
          </div>
        </div>
      </section>

      {/* Explore the vibe */}
      <section className="bg-forest-dark text-paper py-24 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Explore the Vibe.</h2>
              <p className="text-white/60 text-lg max-w-lg font-light">
                Casual, vibrant, and perfect for family dinners or quick lunches. From spicy Pad Thai to aromatic Biryani to signature Nasi Goreng.
              </p>
            </div>
            
            <div className="flex shrink-0 gap-4">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                &larr;
              </button>
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                &rarr;
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl">
              <img src="https://picsum.photos/seed/kigalifood/600/800" alt="The Food" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-serif mb-2">The Food</h3>
                <p className="text-white/70 text-sm font-light">Spicy, aromatic, authentic.</p>
              </div>
            </div>
            
            <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl md:translate-y-8">
              <img src="https://picsum.photos/seed/kigalidrinks/600/800" alt="The Drinks" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-serif mb-2">The Drinks</h3>
                <p className="text-white/70 text-sm font-light">Freshly squeezed & traditional.</p>
              </div>
            </div>

            <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl">
              <img src="https://picsum.photos/seed/kigaliatmos/600/800" alt="The Atmosphere" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-serif mb-2">The Atmosphere</h3>
                <p className="text-white/70 text-sm font-light">Warm, vibrant, inviting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial & Visit Us (Split Layout) */}
      <section className="bg-paper border-b border-forest-dark/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Testimonial Side */}
          <div className="bg-saffron p-12 lg:p-24 flex flex-col justify-center text-white relative overflow-hidden">
            <div className="absolute top-12 left-12 opacity-10">
              <Star className="w-48 h-48 fill-current" />
            </div>
            
            <blockquote className="relative z-10">
              <p className="text-3xl lg:text-5xl font-serif leading-tight mb-8">
                "The absolute best place for Asian cuisine in Kigali ❤️💙"
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                  <img src="https://picsum.photos/seed/customer/100/100" alt="Happy Customer" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-semibold uppercase tracking-widest text-sm">— Happy Customer</p>
                  <p className="text-white/70 text-xs mt-1">Google Reviews</p>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Location details */}
          <div className="p-12 lg:p-24 flex flex-col justify-center bg-white">
            <h2 className="text-4xl md:text-5xl font-serif text-forest-dark mb-6">Visit Us.</h2>
            <p className="text-forest-dark/70 text-lg mb-12 max-w-md font-light">
              We are located in the heart of the city, offering a warm atmosphere and the best Indonesian hospitality.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <h4 className="font-semibold text-forest-dark mb-1">Address</h4>
                  <p className="text-forest-dark/60 font-light text-sm">18 KG 4 Ave, Kigali<br/>Plus Code: 23RM+5F Kigali</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <h4 className="font-semibold text-forest-dark mb-1">Phone</h4>
                  <p className="text-forest-dark/60 font-light text-sm">0787 296 667</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
               <button className="bg-forest hover:bg-forest-dark text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2 text-sm shadow-lg shadow-forest/20">
                 <Navigation className="w-4 h-4" /> Get Directions
               </button>
               <button className="border border-forest/20 hover:bg-forest/5 text-forest-dark px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2 text-sm">
                 <Heart className="w-4 h-4" /> Save
               </button>
               <button className="border border-forest/20 hover:bg-forest/5 text-forest-dark px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2 text-sm">
                 <Share2 className="w-4 h-4" /> Share
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-dark text-white/50 py-12 text-center text-sm font-light">
        <p>&copy; {new Date().getFullYear()} Borneo Indonesian Restaurant, Kigali. All rights reserved.</p>
        <div className="mt-4 flex items-center justify-center gap-6 text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}
