import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Crown, Calendar, Clock, Shield, Sparkles, Heart, Star, Users, Globe,
  Mail, Phone, MapPin, Lock, Send, MessageCircle, BookOpen, FileText,
  ArrowRight, ArrowLeft, ArrowUpRight, ChevronDown, ChevronRight, Check,
  X, Menu, LogOut, User, Pen, RefreshCw, Ticket, Funnel, Save, Instagram
} from 'lucide-react'
import { mockServices, faqData, formatDuration, formatPrice, type Service } from './lib/data'

// ─── Header ────────────────────────────────────────────────────────────────────
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/booking', label: 'Book' },
  { to: '/support', label: 'Support' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || mobileOpen ? 'bg-[rgba(10,9,8,0.95)] backdrop-blur-md border-b border-gold-soft' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <svg width="38" height="38" viewBox="0 0 60 60" fill="none" className="transition-transform group-hover:scale-105">
              <path d="M30 4 L36 18 L52 18 L40 28 L44 44 L30 36 L16 44 L20 28 L8 18 L24 18 Z" stroke="#c9a961" strokeWidth="1.2" fill="none"/>
              <circle cx="30" cy="28" r="3" fill="#c9a961"/>
            </svg>
            <div className="flex flex-col leading-none">
              <span className="font-italiana text-xl tracking-[0.2em] text-cream">CHARLOTTE</span>
              <span className="text-[0.55rem] tracking-[0.35em] text-gold mt-1 uppercase">Prestige Management</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={({ isActive }) => `text-sm tracking-[0.15em] uppercase transition-all duration-300 relative py-2 ${isActive ? 'text-gold' : 'text-cream-dim hover:text-cream'}`}>
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && <motion.span layoutId="navunderline" className="absolute -bottom-1 left-0 right-0 h-px bg-gold" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/login" className="text-sm tracking-[0.15em] uppercase text-cream-dim hover:text-gold transition-colors">Sign In</Link>
            <Link to="/booking" className="btn-primary text-xs py-2.5 px-5">Reserve</Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-cream" aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden overflow-hidden">
              <div className="py-4 flex flex-col gap-1">
                {navLinks.map(link => (
                  <NavLink key={link.to} to={link.to} end={link.to === '/'} className={({ isActive }) => `px-4 py-3 text-sm tracking-[0.15em] uppercase transition-colors ${isActive ? 'text-gold border-l-2 border-gold bg-[rgba(201,169,97,0.06)]' : 'text-cream-dim hover:text-cream hover:bg-[rgba(201,169,97,0.04)]'}`}>
                    {link.label}
                  </NavLink>
                ))}
                <div className="border-t border-gold-soft mt-3 pt-3 flex flex-col gap-2">
                  <Link to="/login" className="px-4 py-3 text-sm text-cream tracking-[0.15em] uppercase">Sign In</Link>
                  <Link to="/booking" className="mx-4 btn-primary text-xs mt-2">Reserve Now</Link>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="relative bg-[#080706] border-t border-gold-soft mt-auto">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,169,97,0.4)] to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <svg width="34" height="34" viewBox="0 0 60 60" fill="none">
                <path d="M30 4 L36 18 L52 18 L40 28 L44 44 L30 36 L16 44 L20 28 L8 18 L24 18 Z" stroke="#c9a961" strokeWidth="1.2" fill="none"/>
                <circle cx="30" cy="28" r="3" fill="#c9a961"/>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-italiana text-lg tracking-[0.2em] text-cream">CHARLOTTE</span>
                <span className="text-[0.5rem] tracking-[0.35em] text-gold mt-1 uppercase">Prestige Management</span>
              </div>
            </div>
            <p className="text-sm text-cream-dim leading-relaxed font-light">An intimate concierge for the discerning. Discretion, refinement, and an unwavering commitment to the extraordinary.</p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-5 font-medium">Navigate</h4>
            <ul className="space-y-3">
              {[['About', '/about'], ['Services', '/services'], ['Reservations', '/booking'], ['Support', '/support'], ['Contact', '/contact']].map(([label, to]) => (
                <li key={to}><Link to={to} className="text-sm text-cream-dim hover:text-gold transition-colors font-light">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-5 font-medium">Experiences</h4>
            <ul className="space-y-3">
              {['Private Companionship', 'Couples Experience', 'Weekend Retreat', 'Travel Companion', 'Private Dining'].map(item => (
                <li key={item}><Link to="/services" className="text-sm text-cream-dim hover:text-gold transition-colors font-light">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-5 font-medium">Connect</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-cream-dim font-light">
                <Mail size={14} className="text-gold" />
                <a href="mailto:concierge@charlotteprestige.com" className="hover:text-gold transition-colors">concierge@charlotteprestige.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream-dim font-light">
                <Phone size={14} className="text-gold" />
                <span>+1 (888) 555-0192</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-cream-dim font-light">
                <MapPin size={14} className="text-gold mt-0.5" />
                <span>By appointment only<br />Manhattan · London · Dubai</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              {[Instagram, Send].map((Icon, i) => (
                <a key={i} href="#" className="p-2 border border-gold-soft hover:border-gold hover:bg-[rgba(201,169,97,0.08)] transition-all">
                  <Icon size={14} className="text-gold" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-gold my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-dim tracking-wider">© {new Date().getFullYear()} Charlotte Prestige Management. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Discretion'].map(label => (
              <Link key={label} to="/contact" className="text-xs text-cream-dim hover:text-gold transition-colors tracking-wider">{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Home Page ─────────────────────────────────────────────────────────────────
function HomePage() {
  const featured = mockServices.filter(s => s.featured)

  return (
    <div className="bg-royal">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/1679618/pexels-photo-1679618.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0908]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="ornament-line mb-8 justify-center">
            <Crown size={14} /> <span>Est. Anno MMXXV</span> <Crown size={14} />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="font-display text-5xl sm:text-7xl lg:text-8xl text-cream leading-[1.05] mb-6">
            The Art of<br /><span className="font-italiana text-gradient-gold">Refined Indulgence</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="font-display italic text-xl sm:text-2xl text-cream-dim max-w-2xl mx-auto mb-3">
            Where discretion meets desire.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }} className="text-sm text-cream-dim max-w-xl mx-auto mb-10 leading-relaxed font-light">
            A bespoke concierge for those who seek the extraordinary. Every encounter curated. Every detail attended to. Every moment yours to command.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/booking" className="btn-primary"><Calendar size={16} /> Reserve an Experience</Link>
            <Link to="/services" className="btn-secondary">Explore Services <ArrowRight size={16} /></Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-cream-dim text-xs tracking-[0.2em] uppercase">
            <span className="flex items-center gap-2"><Lock size={12} className="text-gold" /> Absolute Discretion</span>
            <span className="flex items-center gap-2"><Shield size={12} className="text-gold" /> Verified Companions</span>
            <span className="flex items-center gap-2"><Star size={12} className="text-gold" /> Concierge Service</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent" />
        </motion.div>
      </section>

      {/* Distinction */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="ornament-line mb-6 justify-center"><span>The Charlotte Prestige Difference</span></div>
            <h2 className="font-display text-4xl sm:text-5xl text-cream mb-4">A House of Distinction</h2>
            <p className="text-cream-dim max-w-xl mx-auto font-light">For over a decade we have refined the craft of companionship — where every detail is considered, every preference honored, every moment elevated.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Absolute Discretion', desc: 'Your privacy is our highest vow. Every interaction is conducted with the utmost confidentiality — from initial inquiry to final parting.' },
              { icon: Crown, title: 'Curated Excellence', desc: 'Our companions are hand-selected for their refinement, intelligence, and grace. Each one embodies the sophistication of the Charlotte Prestige standard.' },
              { icon: Heart, title: 'Bespoke Experiences', desc: 'No two encounters are alike. We tailor every detail to your desires — venue, ambiance, conversation, and company.' },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-card p-8 hover:bg-card-hover transition-all duration-500 group">
                <item.icon size={28} className="text-gold mb-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <h3 className="font-display text-2xl text-cream mb-3">{item.title}</h3>
                <p className="text-sm text-cream-dim leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 px-6 bg-gradient-to-b from-[rgba(20,17,15,0.6)] to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="ornament-line mb-6 justify-center"><span>Signature</span></div>
            <h2 className="font-display text-4xl sm:text-5xl text-cream mb-4">Bespoke Experiences</h2>
            <p className="text-cream-dim max-w-xl mx-auto font-light">Each offering is a chapter in our ongoing story of refined companionship.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((service, i) => (
              <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative aspect-[3/4] overflow-hidden bg-card border border-gold-soft hover:border-gold transition-all cursor-pointer">
                <img src={service.image_url} alt={service.name} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[rgba(10,9,8,0.4)] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-gold text-[0.65rem] tracking-[0.25em] uppercase mb-2">{service.category}</div>
                  <h3 className="font-display text-2xl text-cream mb-2">{service.name}</h3>
                  <p className="text-xs text-cream-dim mb-4 font-light line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cream font-display text-lg">{formatPrice(service.price_cents)}</span>
                    <Link to="/booking" className="text-gold text-xs tracking-[0.2em] uppercase flex items-center gap-1 hover:gap-2 transition-all">Reserve <ArrowRight size={12} /></Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary">View All Services <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="ornament-line mb-6 justify-center"><span>The Process</span></div>
            <h2 className="font-display text-4xl sm:text-5xl text-cream mb-4">Effortless from Beginning to End</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              ['Inquiry', 'A discreet introduction to our concierge, in person or by message.'],
              ['Curation', 'We match your desires to one of our refined companions.'],
              ['Arrangement', 'Every detail — venue, ambiance, timing — handled with care.'],
              ['Experience', 'An evening — or weekend — beyond expectation.'],
            ].map(([title, desc], i) => (
              <div key={title} className="relative">
                <div className="text-gold font-italiana text-5xl mb-3 opacity-50">0{i + 1}</div>
                <h3 className="font-display text-xl text-cream mb-2">{title}</h3>
                <p className="text-sm text-cream-dim font-light leading-relaxed">{desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-8 -right-3 w-6 h-px bg-gradient-to-r from-gold to-transparent" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-12 md:p-16 relative border border-gold-soft">
            <div className="ornament-line mb-6"><span>Words from Our Patrons</span></div>
            <Sparkles className="text-gold opacity-30 mb-4" size={40} />
            <blockquote className="font-display italic text-2xl md:text-3xl text-cream leading-relaxed mb-8">
              "Charlotte Prestige has redefined what I thought possible. The level of detail, the discretion, the sheer refinement — it is unlike anything else. Every encounter is masterfully composed."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a961] to-[#a8884a] flex items-center justify-center text-[#0a0908] font-italiana">A</div>
              <div>
                <div className="text-cream">A Distinguished Member</div>
                <div className="text-xs text-gold tracking-[0.2em] uppercase">Patron since 2021</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="ornament-line mb-6 justify-center"><span>Begin</span></div>
          <h2 className="font-display text-4xl sm:text-6xl text-cream mb-6">Your story awaits.</h2>
          <p className="text-cream-dim max-w-xl mx-auto mb-10 font-light leading-relaxed">A conversation is all it takes. Our concierge stands ready, day or night, to begin curating something unforgettable.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="btn-primary"><Calendar size={16} /> Reserve an Experience</Link>
            <Link to="/contact" className="btn-secondary"><MessageCircle size={16} /> Speak to Concierge</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── About Page ────────────────────────────────────────────────────────────────
function AboutPage() {
  return (
    <div className="bg-royal pt-32">
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="ornament-line mb-8 justify-center"><span>The House</span></motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-5xl sm:text-7xl text-cream mb-6">Our <span className="font-italiana text-gradient-gold">Story</span></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="font-display italic text-xl text-cream-dim max-w-2xl mx-auto">A decade devoted to the craft of refined companionship.</motion.p>
        </div>
      </section>

      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative aspect-[16/7] overflow-hidden border border-gold-soft">
            <img src="https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,9,8,0.7)] via-transparent to-[rgba(10,9,8,0.7)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="ornament-line"><Crown size={14} /> <span>Since MMXX</span> <Crown size={14} /></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl text-cream mb-6">A House Built on Trust</h2>
            <p className="text-cream-dim leading-relaxed font-light mb-4">Charlotte Prestige was founded on a simple but uncompromising idea: that companionship, at its highest expression, is an art form. Not a transaction, but a craft — one that demands refinement, empathy, and an unwavering commitment to the person before us.</p>
            <p className="text-cream-dim leading-relaxed font-light">From a single salon in Manhattan, we have grown into a trusted house serving distinguished members across three continents. Yet our philosophy has never wavered: every encounter is bespoke, every detail considered, every confidence sacred.</p>
          </motion.div>

          <div className="divider-gold my-12" />

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl text-cream mb-6">Our Philosophy</h2>
            <p className="text-cream-dim leading-relaxed font-light mb-4">We believe that true luxury lies in the considered gesture, the unhurried moment, the conversation that lingers. Our companions are chosen for their depth as much as their beauty — well-traveled, well-read, fluent in the languages of art, wine, and wit.</p>
            <p className="text-cream-dim leading-relaxed font-light">Every arrangement begins with a conversation. We listen — to your preferences, your mood, the unspoken detail — and compose an experience that feels inevitable, as if it could not have unfolded any other way.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="ornament-line mb-6 justify-center"><span>Our Vows</span></div>
            <h2 className="font-display text-4xl sm:text-5xl text-cream mb-4">The Pillars of Charlotte Prestige</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Discretion', text: 'Every conversation is held in strictest confidence. Our members\' identities are never disclosed, never recorded, never shared.' },
              { icon: Sparkles, title: 'Refinement', text: 'From the cut of a suit to the choice of vintage, every detail is considered. We attend to the things you would never think to ask for.' },
              { icon: Heart, title: 'Genuine Connection', text: 'Our companions are present, attentive, and authentically engaged. The art of conversation is the foundation of everything we offer.' },
              { icon: Crown, title: 'Excellence', text: 'Only the most exceptional individuals join the Charlotte Prestige family. Each companion is interviewed, vetted, and trained to our exacting standards.' },
              { icon: Users, title: 'Bespoke Service', text: 'No two members are the same, and no two experiences should be. Every encounter is composed uniquely for you.' },
              { icon: Globe, title: 'Worldwide Reach', text: 'From Manhattan to Mykonos, London to Dubai — wherever your travels take you, a Charlotte Prestige companion can be arranged.' },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card p-7 hover:bg-card-hover transition-all duration-500">
                <item.icon size={26} className="text-gold mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-cream mb-3">{item.title}</h3>
                <p className="text-sm text-cream-dim leading-relaxed font-light">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-[rgba(45,90,63,0.08)] to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[['10+', 'Years of Service'], ['1,200+', 'Distinguished Members'], ['85+', 'Curated Companions'], ['3', 'Continents']].map(([val, label]) => (
              <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="font-italiana text-5xl text-gradient-gold mb-2">{val}</div>
                <div className="text-xs tracking-[0.25em] uppercase text-cream-dim">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Services Page ─────────────────────────────────────────────────────────────
function ServicesPage() {
  const [category, setCategory] = useState('all')
  const categories = ['all', ...new Set(mockServices.map(s => s.category).filter(Boolean))]
  const filtered = category === 'all' ? mockServices : mockServices.filter(s => s.category === category)

  return (
    <div className="bg-royal pt-32 pb-20">
      <section className="px-6 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="ornament-line mb-8 justify-center"><span>The Collection</span></motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-5xl sm:text-7xl text-cream mb-6">Our <span className="font-italiana text-gradient-gold">Services</span></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="font-display italic text-xl text-cream-dim max-w-2xl mx-auto">A curated suite of experiences, each composed with intention.</motion.p>
        </div>
      </section>

      <section className="px-6 mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button key={cat} onClick={() => setCategory(cat)} className={`px-5 py-2 text-xs tracking-[0.2em] uppercase transition-all border ${category === cat ? 'border-gold bg-[rgba(201,169,97,0.1)] text-gold' : 'border-gold-soft text-cream-dim hover:border-gold hover:text-cream'}`}>
                {cat === 'all' ? 'All Experiences' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((service, i) => (
              <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group relative bg-card border border-gold-soft hover:border-gold overflow-hidden transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={service.image_url} alt={service.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14110f] via-[rgba(20,17,15,0.3)] to-transparent" />
                  {service.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[rgba(201,169,97,0.15)] border border-gold backdrop-blur-sm flex items-center gap-1">
                      <Sparkles size={11} className="text-gold" />
                      <span className="text-[0.6rem] tracking-[0.2em] uppercase text-gold">Signature</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 text-[0.65rem] tracking-[0.25em] uppercase text-gold">{service.category}</div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl text-cream mb-2">{service.name}</h3>
                  <p className="text-sm text-cream-dim mb-5 font-light leading-relaxed line-clamp-3">{service.description}</p>
                  <div className="flex items-center gap-4 mb-5 text-xs text-cream-dim">
                    <span className="flex items-center gap-1.5"><Clock size={12} className="text-gold" /> {formatDuration(service.duration_minutes)}</span>
                  </div>
                  <div className="flex items-center justify-between pt-5 border-t border-gold-soft">
                    <div>
                      <div className="text-[0.65rem] tracking-[0.2em] uppercase text-cream-dim mb-1">From</div>
                      <span className="font-display text-2xl text-cream">{formatPrice(service.price_cents)}</span>
                    </div>
                    <Link to="/booking" className="btn-primary text-xs py-2.5 px-4">Reserve <ArrowRight size={12} /></Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 mt-12">
        <div className="max-w-3xl mx-auto text-center bg-card p-10 border border-gold-soft">
          <h3 className="font-display text-3xl text-cream mb-3">Seeking something else?</h3>
          <p className="text-cream-dim mb-6 font-light">We compose entirely bespoke experiences for our distinguished members. Speak with our concierge to design something uniquely yours.</p>
          <Link to="/contact" className="btn-secondary">Speak to Concierge</Link>
        </div>
      </section>
    </div>
  )
}

// ─── Booking Page ──────────────────────────────────────────────────────────────
const timeSlots = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

function BookingPage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ service_id: '', customer_name: '', customer_email: '', customer_phone: '', appointment_date: '', appointment_time: '', notes: '' })

  const selectedService = mockServices.find(s => s.id === Number(form.service_id))
  const dates = Array.from({ length: 30 }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() + i + 1)
    return { value: d.toISOString().split('T')[0], label: d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) }
  })

  const update = (key: string, val: string) => setForm(f => ({ ...f, [key]: val }))

  const canProceed = () => {
    if (step === 1) return !!form.service_id
    if (step === 2) return !!form.appointment_date && !!form.appointment_time
    if (step === 3) return !!form.customer_name && !!form.customer_email
    return true
  }

  const next = () => {
    if (step < 3) setStep(s => s + 1)
    else setSubmitted(true)
  }

  return (
    <div className="bg-royal pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="ornament-line mb-6 justify-center"><span>Reservations</span></div>
          <h1 className="font-display text-5xl sm:text-6xl text-cream mb-4">Book an Experience</h1>
          <p className="text-cream-dim font-light">A few moments to begin your story.</p>
        </div>

        <div className="flex items-center justify-center mb-10 gap-2">
          {[1, 2, 3].map(s => (
            <div key={s} className="flex items-center">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium border transition-all ${step >= s ? 'border-gold bg-[rgba(201,169,97,0.15)] text-gold' : 'border-gold-soft text-cream-dim'}`}>
                {step > s ? <Check size={14} /> : s}
              </div>
              {s < 3 && <div className={`w-12 h-px ${step > s ? 'bg-gold' : 'bg-[rgba(201,169,97,0.15)]'}`} />}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div key="done" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-card p-10 md:p-14 border border-gold text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c9a961] to-[#a8884a] flex items-center justify-center mx-auto mb-6">
                <Check size={32} className="text-[#0a0908]" strokeWidth={2.5} />
              </div>
              <h2 className="font-display text-4xl text-cream mb-3">Reservation Received</h2>
              <p className="text-cream-dim font-light mb-8 max-w-md mx-auto">Thank you. A member of our concierge team will be in touch shortly to confirm the details of your experience.</p>
              <div className="bg-[rgba(45,90,63,0.1)] border border-gold-soft p-6 text-left max-w-md mx-auto mb-8">
                <div className="text-xs tracking-[0.2em] uppercase text-gold mb-3">Confirmation #1047</div>
                <div className="space-y-2 text-sm text-cream">
                  <div><span className="text-cream-dim">Experience:</span> {selectedService?.name}</div>
                  <div><span className="text-cream-dim">Date:</span> {form.appointment_date}</div>
                  <div><span className="text-cream-dim">Time:</span> {form.appointment_time}</div>
                </div>
              </div>
              <div className="flex gap-3 justify-center">
                <Link to="/" className="btn-secondary text-xs">Return Home</Link>
              </div>
            </motion.div>
          ) : (
            <>
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-card p-8 md:p-10 border border-gold-soft">
                  <h2 className="font-display text-3xl text-cream mb-2">Choose Your Experience</h2>
                  <p className="text-cream-dim mb-6 font-light text-sm">Select the offering that speaks to your intention.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {mockServices.map(s => (
                      <button key={s.id} onClick={() => update('service_id', String(s.id))} className={`text-left p-4 border transition-all ${Number(form.service_id) === s.id ? 'border-gold bg-[rgba(201,169,97,0.08)]' : 'border-gold-soft hover:border-gold hover:bg-[rgba(201,169,97,0.04)]'}`}>
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-display text-lg text-cream">{s.name}</h3>
                          {Number(form.service_id) === s.id && <Check size={16} className="text-gold flex-shrink-0 mt-1" />}
                        </div>
                        <p className="text-xs text-cream-dim mb-3 font-light line-clamp-2">{s.description}</p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-cream-dim flex items-center gap-1"><Clock size={11} className="text-gold" /> {formatDuration(s.duration_minutes)}</span>
                          <span className="text-gold font-display text-base">{formatPrice(s.price_cents)}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-card p-8 md:p-10 border border-gold-soft">
                  <h2 className="font-display text-3xl text-cream mb-2">When Shall We Meet?</h2>
                  <p className="text-cream-dim mb-6 font-light text-sm">Select a date and time for your experience.</p>

                  {selectedService && (
                    <div className="bg-[rgba(45,90,63,0.1)] border border-gold-soft p-4 mb-6 flex items-center gap-3">
                      <Crown size={20} className="text-gold flex-shrink-0" />
                      <div>
                        <div className="text-cream font-display">{selectedService.name}</div>
                        <div className="text-xs text-cream-dim">{formatDuration(selectedService.duration_minutes)} · {formatPrice(selectedService.price_cents)}</div>
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <label className="label-royal flex items-center gap-2"><Calendar size={12} /> Date</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2 max-h-64 overflow-y-auto p-1">
                      {dates.map(d => (
                        <button key={d.value} onClick={() => update('appointment_date', d.value)} className={`px-3 py-3 text-xs border transition-all ${form.appointment_date === d.value ? 'border-gold bg-[rgba(201,169,97,0.1)] text-gold' : 'border-gold-soft text-cream-dim hover:border-gold hover:text-cream'}`}>{d.label}</button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="label-royal flex items-center gap-2"><Clock size={12} /> Time</label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-2">
                      {timeSlots.map(t => (
                        <button key={t} onClick={() => update('appointment_time', t)} className={`px-3 py-3 text-sm border transition-all ${form.appointment_time === t ? 'border-gold bg-[rgba(201,169,97,0.1)] text-gold' : 'border-gold-soft text-cream-dim hover:border-gold hover:text-cream'}`}>{t}</button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-card p-8 md:p-10 border border-gold-soft">
                  <h2 className="font-display text-3xl text-cream mb-2">Your Details</h2>
                  <p className="text-cream-dim mb-6 font-light text-sm">A few details so our concierge may reach you discreetly.</p>

                  <div className="space-y-5">
                    <div>
                      <label className="label-royal flex items-center gap-2"><User size={12} /> Full Name</label>
                      <input type="text" value={form.customer_name} onChange={e => update('customer_name', e.target.value)} placeholder="As you wish to be addressed" className="input-royal" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="label-royal flex items-center gap-2"><Mail size={12} /> Email</label>
                        <input type="email" value={form.customer_email} onChange={e => update('customer_email', e.target.value)} placeholder="you@example.com" className="input-royal" required />
                      </div>
                      <div>
                        <label className="label-royal flex items-center gap-2"><Phone size={12} /> Phone</label>
                        <input type="tel" value={form.customer_phone} onChange={e => update('customer_phone', e.target.value)} placeholder="+1 (555) 000-0000" className="input-royal" />
                      </div>
                    </div>
                    <div>
                      <label className="label-royal flex items-center gap-2"><FileText size={12} /> Special Requests <span className="text-cream-dim normal-case tracking-normal">(optional)</span></label>
                      <textarea value={form.notes} onChange={e => update('notes', e.target.value)} rows={4} placeholder="Preferences, location, ambiance, or anything else we should know…" className="input-royal resize-none" />
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-[rgba(45,90,63,0.08)] border border-gold-soft">
                    <h4 className="text-gold text-xs tracking-[0.2em] uppercase mb-2">Reservation Summary</h4>
                    <div className="text-sm text-cream space-y-1">
                      <div><span className="text-cream-dim">Experience:</span> {selectedService?.name}</div>
                      <div><span className="text-cream-dim">When:</span> {form.appointment_date} at {form.appointment_time}</div>
                      <div><span className="text-cream-dim">Investment:</span> {formatPrice(selectedService?.price_cents || 0)}</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>

        {!submitted && (
          <div className="flex items-center justify-between mt-6">
            <button onClick={() => setStep(s => Math.max(1, s - 1))} disabled={step === 1} className="btn-ghost flex items-center gap-2 disabled:opacity-30"><ArrowLeft size={14} /> Back</button>
            <button onClick={next} disabled={!canProceed()} className="btn-primary">{step === 3 ? 'Confirm Reservation' : 'Continue'} <ArrowRight size={14} /></button>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Contact Page ──────────────────────────────────────────────────────────────
function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => { setSent(true); setSending(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }, 1000)
  }

  return (
    <div className="bg-royal pt-32 pb-20 min-h-screen">
      <section className="px-6 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,9,8,0.7)] to-[#0a0908]" />
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="ornament-line mb-8 justify-center"><span>Reach Us</span></motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-5xl sm:text-7xl text-cream mb-4">Begin a <span className="font-italiana text-gradient-gold">Conversation</span></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="font-display italic text-xl text-cream-dim max-w-2xl mx-auto">Our concierge stands ready to receive your inquiry, day or night.</motion.p>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-card p-7 border border-gold-soft">
              <h3 className="font-display text-2xl text-cream mb-5">Direct Channels</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Mail size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[0.65rem] tracking-[0.2em] uppercase text-cream-dim mb-1">Email</div>
                    <a href="mailto:concierge@charlotteprestige.com" className="text-cream hover:text-gold transition-colors">concierge@charlotteprestige.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[0.65rem] tracking-[0.2em] uppercase text-cream-dim mb-1">Concierge Line</div>
                    <div className="text-cream">+1 (888) 555-0192</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[0.65rem] tracking-[0.2em] uppercase text-cream-dim mb-1">Salons</div>
                    <div className="text-cream text-sm leading-relaxed">Manhattan · London · Dubai<br /><span className="text-cream-dim font-light">By appointment only</span></div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[0.65rem] tracking-[0.2em] uppercase text-cream-dim mb-1">Hours</div>
                    <div className="text-cream text-sm">24 hours · 7 days a week<br /><span className="text-cream-dim font-light">Concierge always available</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-7 border border-gold-soft">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle size={20} className="text-gold" />
                <h3 className="font-display text-xl text-cream">Live Chat</h3>
              </div>
              <p className="text-sm text-cream-dim font-light leading-relaxed">For the swiftest reply, use our contact form. Our team responds within hours, always discreetly.</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-card p-8 border border-gold-soft">
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c9a961] to-[#a8884a] flex items-center justify-center mx-auto mb-4">
                    <Check size={26} className="text-[#0a0908]" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-display text-2xl text-cream mb-2">Message Received</h3>
                  <p className="text-cream-dim font-light mb-5">Our concierge will be in touch shortly.</p>
                  <button onClick={() => setSent(false)} className="btn-secondary text-xs">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="label-royal">Your Name</label>
                      <input type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="input-royal" placeholder="As you wish to be addressed" />
                    </div>
                    <div>
                      <label className="label-royal">Email</label>
                      <input type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="input-royal" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="label-royal">Phone <span className="text-cream-dim normal-case tracking-normal">(optional)</span></label>
                      <input type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className="input-royal" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div>
                      <label className="label-royal">Subject</label>
                      <select value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} className="input-royal" required>
                        <option value="">Select a topic</option>
                        <option>General Inquiry</option>
                        <option>Private Companionship</option>
                        <option>Couples Experience</option>
                        <option>Weekend Retreat</option>
                        <option>Travel Companion</option>
                        <option>Event Hosting</option>
                        <option>Membership</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="label-royal">Your Message</label>
                    <textarea required rows={6} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} className="input-royal resize-none" placeholder="Share as much or as little as you wish. Every word is held in confidence." />
                  </div>
                  <button type="submit" disabled={sending} className="btn-primary w-full md:w-auto"><Send size={14} /> {sending ? 'Sending…' : 'Send to Concierge'}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Support Page ──────────────────────────────────────────────────────────────
function SupportPage() {
  const [openFaq, setOpenFaq] = useState(-1)

  return (
    <div className="bg-royal pt-32 pb-20 min-h-screen px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="ornament-line mb-6 justify-center"><span>Concierge Support</span></div>
          <h1 className="font-display text-5xl sm:text-7xl text-cream mb-4">How May We <span className="font-italiana text-gradient-gold">Assist?</span></h1>
          <p className="text-cream-dim font-light">Answers, assistance, and attentive care — always at hand.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Ticket, title: 'Open a Ticket', desc: 'For detailed inquiries and written correspondence.' },
            { icon: MessageCircle, title: 'Live Chat', desc: 'Instant conversation with our concierge team.' },
            { icon: Phone, title: 'Concierge Line', desc: '+1 (888) 555-0192 · 24/7' },
          ].map(item => (
            <div key={item.title} className="bg-card p-6 border border-gold-soft hover:border-gold transition-all group cursor-pointer">
              <item.icon size={24} className="text-gold mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-lg text-cream mb-1 group-hover:text-gold transition-colors">{item.title}</h3>
              <p className="text-xs text-cream-dim font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen size={20} className="text-gold" />
            <h2 className="font-display text-3xl text-cream">Frequently Asked</h2>
          </div>
          <div className="space-y-2">
            {faqData.map((item, i) => (
              <div key={i} className="bg-card border border-gold-soft overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-[rgba(201,169,97,0.04)] transition-colors">
                  <span className="font-display text-lg text-cream">{item.q}</span>
                  <ChevronDown size={16} className={`text-gold transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="px-5 pb-5 text-sm text-cream-dim font-light leading-relaxed border-t border-gold-soft pt-4">
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Ticket size={20} className="text-gold" />
            <h2 className="font-display text-3xl text-cream">Open a Ticket</h2>
          </div>
          <div className="bg-card p-8 border border-gold-soft">
            <form onSubmit={e => { e.preventDefault(); alert('Ticket submitted! Our team will respond shortly.') }} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="label-royal">Your Name</label>
                  <input type="text" required className="input-royal" />
                </div>
                <div>
                  <label className="label-royal">Email</label>
                  <input type="email" required className="input-royal" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="label-royal">Category</label>
                  <select className="input-royal">
                    <option>General</option>
                    <option>Booking</option>
                    <option>Payment</option>
                    <option>Account</option>
                    <option>Discretion</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="label-royal">Priority</label>
                  <select className="input-royal">
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="label-royal">Subject</label>
                <input type="text" required className="input-royal" placeholder="A brief summary" />
              </div>
              <div>
                <label className="label-royal">Message</label>
                <textarea required rows={5} className="input-royal resize-none" placeholder="Tell us how we may assist..." />
              </div>
              <button type="submit" className="btn-primary"><Send size={14} /> Submit Ticket</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}

// ─── Login Page ────────────────────────────────────────────────────────────────
function LoginPage() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const navigate = useNavigate()

  return (
    <div className="bg-royal min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="text-center mb-10">
          <Crown size={32} className="text-gold mx-auto mb-4" />
          <h1 className="font-display text-4xl text-cream mb-2">{mode === 'signin' ? 'Welcome Back' : 'Join the House'}</h1>
          <p className="text-cream-dim text-sm font-light">{mode === 'signin' ? 'Sign in to your private account.' : 'Create your discreet account.'}</p>
        </div>

        <div className="bg-card p-8 border border-gold-soft">
          <form onSubmit={e => { e.preventDefault(); navigate('/') }} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="label-royal">Your Name</label>
                <div className="relative">
                  <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" />
                  <input type="text" placeholder="How we shall address you" className="input-royal pl-10" required />
                </div>
              </div>
            )}
            <div>
              <label className="label-royal">Email</label>
              <div className="relative">
                <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" />
                <input type="email" placeholder="you@example.com" className="input-royal pl-10" required />
              </div>
            </div>
            <div>
              <label className="label-royal">Password</label>
              <div className="relative">
                <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" />
                <input type="password" placeholder="••••••••" className="input-royal pl-10" required minLength={6} />
              </div>
            </div>
            <button type="submit" className="btn-primary w-full">{mode === 'signin' ? 'Sign In' : 'Create Account'} <ArrowRight size={14} /></button>
          </form>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-[rgba(201,169,97,0.15)]" />
            <span className="text-xs text-cream-dim tracking-[0.2em] uppercase">or</span>
            <div className="flex-1 h-px bg-[rgba(201,169,97,0.15)]" />
          </div>

          <button onClick={() => navigate('/')} className="btn-secondary w-full text-xs">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <div className="text-center mt-6 text-sm">
            <button type="button" onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')} className="text-cream-dim hover:text-gold transition-colors">
              {mode === 'signin' ? "Don't have an account? Create one" : 'Already a member? Sign in'}
            </button>
          </div>
        </div>

        <div className="text-center mt-6 text-xs text-cream-dim">
          <Link to="/" className="hover:text-gold transition-colors">← Return Home</Link>
        </div>

        <div className="mt-8 text-center text-xs text-cream-dim bg-[rgba(20,17,15,0.4)] border border-gold-soft p-4">
          <div className="ornament-line mb-2 justify-center"><span>Demo Access</span></div>
          <div className="font-mono text-[0.7rem]">
            <div>Customer: customer@royal.com / royal123</div>
            <div>Admin: admin@royal.com / royal123</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// ─── 404 Page ──────────────────────────────────────────────────────────────────
function NotFoundPage() {
  return (
    <div className="bg-royal min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md">
        <Crown size={48} className="text-gold mx-auto mb-6 opacity-40" />
        <div className="font-italiana text-8xl text-gradient-gold mb-4">404</div>
        <h1 className="font-display text-4xl text-cream mb-4">A Wrong Turn</h1>
        <p className="text-cream-dim font-light mb-8">The path you sought has wandered beyond our halls. Allow us to guide you back.</p>
        <Link to="/" className="btn-primary">Return to the House</Link>
      </motion.div>
    </div>
  )
}

// ─── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
