import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Instagram, Video, MessageCircle, ArrowRight, Calendar, Clapperboard, Palette, Rocket, Check, MapPin, Clock, Mail, Phone, Film, Camera, Share2, Users, FileText, Shield } from 'lucide-react'

const videos = [
  'https://player.vimeo.com/video/1157490752?title=0&byline=0&portrait=0',
  'https://player.vimeo.com/video/1157494558?title=0&byline=0&portrait=0',
  'https://player.vimeo.com/video/873633660?title=0&byline=0&portrait=0'
]

const portfolioItems = [
  { title: 'Wedding Promo – Amr & Lubab', video: videos[0] },
  { title: 'Even – Zeiss', video: videos[1] },
  { title: 'Cinema Ad – TeachMeCode Institute', video: videos[2] }
]

const steps = [
  {
    icon: Calendar,
    title: 'Book a Call',
    description: 'Tell us about your vision and goals for your brand'
  },
  {
    icon: Clapperboard,
    title: 'We Shoot',
    description: 'Professional filming with top-tier equipment'
  },
  {
    icon: Palette,
    title: 'We Edit',
    description: 'Creative editing with your personal touch'
  },
  {
    icon: Rocket,
    title: 'You Launch',
    description: 'Receive your content ready to go viral'
  }
]

const testimonials = [
  {
    name: 'Ahmed Al Rashed',
    role: 'CEO, TechStart UAE',
    text: 'Mustad transformed our brand identity. Our social media engagement increased by 300% in just 2 months!'
  },
  {
    name: 'Fatima Hassan',
    role: 'Founder, Bloom Beauty',
    text: 'Professional, creative, and delivered beyond our expectations. Our wedding video was absolutely stunning.'
  },
  {
    name: 'Omar Khalid',
    role: 'Director, TeachMeCode',
    text: 'The team understood our vision perfectly. The cinema ad exceeded all expectations.'
  }
]
const packages = [
  {
    name: 'Standard',
    price: 'AED 1500',
    description: 'Half-day shooting using professional equipment',
    features: [
      'Half-day shooting',
      'Professional equipment',
      'Up to 4 creative short vertical videos (Reels/TikToks)'
    ],
    featured: false
  },
  {
    name: 'Pro',
    price: 'AED 3500',
    description: 'Full-day shooting using professional equipment',
    features: [
      'Full-day shooting',
      'Professional equipment',
      'Up to 7 creative short vertical videos (Reels/TikToks)',
      'Up to 8 static posts (graphic design)'
    ],
    featured: true
  },
  {
    name: 'Pro Max',
    price: 'AED 6500',
    description: '2 Days of shooting with 40k worth of equipment',
    features: [
      '2 Days of shooting',
      '40k worth of equipment',
      'Up to 12 creative short vertical videos (Reels/TikToks)',
      'Up to 10 static posts (graphic design)',
      'Social media management (Arabic/English)'
    ],
    featured: false
  }
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="/" className="logo">
          <img src="/logo.webp" alt="Mustad" />
          <span className="logo-text">MUSTAD</span>
        </a>
        <ul className="nav-links">
          <li><Link to="/services">Services</Link></li>
          <li><a href="/#how-it-works">How It Works</a></li>
          <li><a href="/#packages">Packages</a></li>
          <li><a href="/#portfolio">Portfolio</a></li>
          <li><a href="/#testimonials">Reviews</a></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="hero-badge">Mustad LLC</span>
          <h1 className="hero-title">
            Yellow<br /><span>there!</span>
          </h1>
          <p className="hero-subtitle">— Sari Fayomie</p>
          <p className="hero-description">
            My name is <strong>Sari Fayomie</strong>, with a bunch of talented creators 
            are here to create professional, viral, and out-of-the-box content for your brand.<br /><br />
            Let's talk about your business and your vision. We will share our ideas on 
            how we can help you promote it and suggest content we can create to let 
            the world know about it.
          </p>
          <div className="hero-cta">
            <a href="#packages" className="btn btn-primary">
              View Plans <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </a>
          </div>
        </motion.div>
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img src="/sari.webp" alt="Sari Fayomie" className="hero-image" />
        </motion.div>
      </div>
    </section>
  )
}

function Packages() {
  return (
    <section className="packages" id="packages">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Let's Talk Dirhams and Fils!</h2>
          <p className="section-subtitle">Choose the perfect package for your brand</p>
        </div>
        <div className="packages-grid">
          {packages.map((pkg, i) => (
            <motion.div 
              key={pkg.name}
              className={`package-card ${pkg.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {pkg.featured && <span className="featured-badge">Popular</span>}
              <h3 className="package-name">{pkg.name}</h3>
              <p className="package-description">{pkg.description}</p>
              <ul className="package-features">
                {pkg.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <div className="package-price">{pkg.price}*</div>
              <a href="#contact" className="btn package-btn">Chat on WhatsApp</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">Showcasing our creative productions</p>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item, i) => (
            <motion.div 
              key={i}
              className="portfolio-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <iframe 
                src={item.video} 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
                title={item.title}
              />
              <div className="portfolio-overlay">
                <h3 className="portfolio-title">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Simple process, exceptional results</p>
        </div>
        <div className="steps-grid">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              className="step-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="step-icon">
                <step.icon size={28} />
              </div>
              <span className="step-number">0{i + 1}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle">Trusted by brands across the UAE</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `*New Inquiry*\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`
    window.open(`https://wa.me/971501234567?text=${encodeURIComponent(text)}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section className="contact-form" id="contact-form">
      <div className="container">
        <div className="contact-form-grid">
          <div className="contact-form-info">
            <h2>Let's Work Together</h2>
            <p>Fill out the form and we'll get back to you within 24 hours.</p>
            <div className="contact-info-items">
              <div className="contact-info-item">
                <MapPin size={20} />
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="contact-info-item">
                <Clock size={20} />
                <span>Sat - Thu: 10AM - 8PM</span>
              </div>
              <div className="contact-info-item">
                <Mail size={20} />
                <span>hello@mustad.ae</span>
              </div>
              <div className="contact-info-item">
                <Phone size={20} />
                <span>+971 50 123 4567</span>
              </div>
            </div>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="form-success">
                <Check size={48} />
                <h3>Thank you!</h3>
                <p>We'll be in touch soon.</p>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <input type="text" placeholder="Your Name *" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="form-row">
                  <input type="email" placeholder="Email *" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
                <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} required>
                  <option value="">Select Service *</option>
                  <option value="video">Video Production</option>
                  <option value="photo">Photography</option>
                  <option value="reels">Reels/TikTok</option>
                  <option value="social">Social Media Management</option>
                  <option value="event">Corporate Events</option>
                  <option value="other">Other</option>
                </select>
                <textarea placeholder="Tell us about your project..." rows="4" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/logo.webp" alt="Mustad" className="footer-logo" />
            <p>Professional content creation for brands that stand out.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link to="/services">Services</Link>
            <a href="/#how-it-works">How It Works</a>
            <a href="/#packages">Packages</a>
            <a href="/#portfolio">Portfolio</a>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-links">
            <h4>Services</h4>
            <Link to="/services/video">Video Production</Link>
            <Link to="/services/photography">Photography</Link>
            <Link to="/services/social">Social Media</Link>
            <Link to="/services/events">Corporate Events</Link>
          </div>
          <div className="footer-links">
            <h4>Legal</h4>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mustad LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function Services() {
  const services = [
    { icon: Film, title: 'Video Production', description: 'Professional video creation from concept to final cut. Corporate videos, commercials, documentaries, and more.', path: '/services/video' },
    { icon: Camera, title: 'Photography', description: 'High-quality photography for brands, products, events, and portraits. Professional editing included.', path: '/services/photography' },
    { icon: Share2, title: 'Social Media', description: 'Complete social media management. Content strategy, posting schedules, and engagement growth.', path: '/services/social' },
    { icon: Users, title: 'Corporate Events', description: 'Event coverage for conferences, product launches, team building, and celebrations.', path: '/services/events' }
  ]
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="page-title">Our Services</motion.h1>
          <p className="page-subtitle">Professional content creation solutions for your brand</p>
        </div>
      </section>
      <section className="services-list">
        <div className="container">
          <div className="services-grid">
            {services.map((service, i) => (
              <motion.div key={i} className="service-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <service.icon size={40} className="service-icon" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.path} className="service-link">Learn More <ArrowRight size={16} /></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceDetail({ title, description, features, details, process }) {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="page-title">{title}</motion.h1>
          <p className="page-subtitle">{description}</p>
        </div>
      </section>
      <section className="service-detail">
        <div className="container">
          <div className="service-overview">
            <h3>What's Included</h3>
            <div className="service-features">
              {features.map((f, i) => (
                <motion.div key={i} className="feature-item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Check size={20} className="feature-check" />
                  <span>{f}</span>
                </motion.div>
              ))}
            </div>
          </div>
          {details && <div className="service-details"><h3>Why Choose Us</h3><p>{details}</p></div>}
          {process && (
            <div className="service-process">
              <h3>Our Process</h3>
              <div className="process-steps">
                {process.map((step, i) => (
                  <div key={i} className="process-step">
                    <span className="process-num">0{i + 1}</span>
                    <div>
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="service-cta">
            <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function VideoProduction() {
  return <ServiceDetail 
    title="Video Production" 
    description="Professional video production services in Dubai for brands that want to stand out"
    features={['4K & 8K RED & Sony cinema cameras', 'Drone cinematography with licensed pilots', 'Professional 3-point lighting setup', 'Creative direction & concept development', 'Scriptwriting & storyboarding', 'Color grading & professional post-production', 'Sound design & royalty-free music', 'Fast turnaround with revisions included']}
    details="With over 5 years of experience in the UAE market, we've produced content for Fortune 500 companies, startups, and everything in between. Our team uses state-of-the-art equipment worth over AED 400,000 to ensure your content looks premium and professional."
    process={[
      { title: 'Discovery & Concept', desc: 'We meet to understand your vision, target audience, and goals. Our creative team develops concepts and storyboards for your approval.' },
      { title: 'Pre-Production', desc: 'We handle location scouting, casting, crew coordination, and all logistics. Every detail is planned before the shoot day.' },
      { title: 'Production', desc: 'Our professional crew executes the shoot with premium equipment. We capture multiple angles and takes to ensure we have the best footage.' },
      { title: 'Post-Production', desc: 'Our editors work their magic—color grading, motion graphics, sound design, and visual effects to create a polished final product.' },
      { title: 'Delivery', desc: 'You receive the final video in multiple formats optimized for different platforms—web, social, broadcast, and more.' }
    ]}
  />
}

function Photography() {
  return <ServiceDetail 
    title="Photography" 
    description="Professional photography services for brands, products, events, and portraits"
    features={['Professional studio setup available', 'Product photography with clean backgrounds', 'Brand & corporate photography', 'Event coverage (corporate & private)', 'Portrait & fashion shoots', 'Professional photo retouching', 'High-resolution RAW & JPEG delivery', 'Quick turnaround available']}
    details="Our photographers have worked with leading brands in Dubai and the UAE. Whether you need clean product shots for your e-commerce site, professional headshots for your team, or event coverage, we deliver stunning images that represent your brand professionally."
    process={[
      { title: 'Consultation', desc: 'We discuss your requirements, style preferences, and deliverables. We also suggest locations, props, and styling options.' },
      { title: 'Preparation', desc: 'We prepare the equipment, set up lighting, and arrange the studio or location. For products, we prepare backgrounds and props.' },
      { title: 'The Shoot', desc: 'We capture hundreds of shots from various angles with different lighting setups. You can view some shots on set.' },
      { title: 'Editing', desc: 'Our retouchers enhance colors, remove imperfections, adjust lighting, and ensure each image is perfect.' },
      { title: 'Delivery', desc: 'You receive your edited photos in high resolution, ready for print or web use.' }
    ]}
  />
}

function SocialMedia() {
  return <ServiceDetail 
    title="Social Media Management" 
    description="Complete social media solutions to grow your brand presence online"
    features={['Content strategy tailored to your brand', 'High-quality content creation (posts & stories)', 'Posting schedule optimization', 'Community management & engagement', 'Monthly analytics & performance reports', 'Hashtag research & SEO optimization', 'Audience growth strategies', 'Platform-specific optimization']}
    details="In today's digital age, your social media presence can make or break your brand. Our social media management service handles everything from content creation to community engagement, helping you build a loyal following and convert followers into customers."
    process={[
      { title: 'Audit & Strategy', desc: 'We analyze your current social media presence, competitor landscape, and target audience to develop a winning strategy.' },
      { title: 'Content Planning', desc: 'We create a content calendar with themes, captions, and posting schedules optimized for each platform.' },
      { title: 'Content Creation', desc: 'Our team creates scroll-stopping content—graphics, videos, Reels, and stories that resonate with your audience.' },
      { title: 'Community Management', desc: 'We engage with your followers, respond to comments and messages, and build relationships with potential customers.' },
      { title: 'Reporting', desc: 'Monthly reports showing growth, engagement metrics, and recommendations for continuous improvement.' }
    ]}
  />
}

function CorporateEvents() {
  return <ServiceDetail 
    title="Corporate Events" 
    description="Professional event coverage for conferences, product launches, and celebrations"
    features={['Multi-camera conference coverage', 'Product launch events', 'Team building & company celebrations', 'Seminars & workshops documentation', 'Live streaming & virtual events', 'Highlight reels & same-day edits', 'Full event documentation', 'Professional team (2-10+ crew)']}
    details="From intimate team gatherings to large-scale conferences, we capture every important moment of your corporate events. Our team is experienced in handling events of all sizes and types, ensuring nothing is missed."
    process={[
      { title: 'Pre-Event Planning', desc: 'We coordinate with event organizers, understand the schedule, and plan camera positions and equipment requirements.' },
      { title: 'Event Coverage', desc: 'Our professional crew captures every important moment—keynotes, panel discussions, networking, and behind-the-scenes.' },
      { title: 'Live Streaming', desc: 'For virtual or hybrid events, we handle live streaming to multiple platforms with professional quality.' },
      { title: 'Editing', desc: 'We compile footage into a highlight reel, full event documentary, or custom deliverables as per your requirements.' },
      { title: 'Delivery', desc: 'Receive your edited content within days—even same-day edits for highlight reels to share immediately.' }
    ]}
  />
}

function PrivacyPolicy() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="page-title">Privacy Policy</motion.h1>
        </div>
      </section>
      <section className="legal-content">
        <div className="container">
          <p>At Mustad LLC, we value your privacy. This policy outlines how we collect, use, and protect your information.</p>
          <h3>Information We Collect</h3>
          <p>We collect information you provide directly to us, including name, email, phone number, and project details when you contact us or use our services.</p>
          <h3>How We Use Your Information</h3>
          <p>We use your information to provide services, communicate with you about projects, and improve our services.</p>
          <h3>Data Protection</h3>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access.</p>
          <h3>Contact Us</h3>
          <p>For privacy concerns, contact us at hello@mustad.ae</p>
        </div>
      </section>
    </div>
  )
}

function TermsConditions() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="page-title">Terms & Conditions</motion.h1>
        </div>
      </section>
      <section className="legal-content">
        <div className="container">
          <p>By using Mustad LLC services, you agree to these terms.</p>
          <h3>Services</h3>
          <p>We provide professional media production services as outlined in our packages and agreements.</p>
          <h3>Payment Terms</h3>
          <p>Payment terms vary by project. A deposit is required to secure booking, with remaining balance due upon completion.</p>
          <h3>Intellectual Property</h3>
          <p>Upon full payment, clients receive rights to final deliverables as specified in their service agreement.</p>
          <h3>Cancellations</h3>
          <p>Cancellation fees may apply depending on the stage of project completion.</p>
          <h3>Contact Us</h3>
          <p>For questions, contact us at hello@mustad.ae</p>
        </div>
      </section>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <Navbar />
          <Hero />
          <HowItWorks />
          <Packages />
          <Portfolio />
          <Testimonials />
          <ContactForm />
          <Footer />
        </>} />
        <Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
        <Route path="/services/video" element={<><Navbar /><VideoProduction /><Footer /></>} />
        <Route path="/services/photography" element={<><Navbar /><Photography /><Footer /></>} />
        <Route path="/services/social" element={<><Navbar /><SocialMedia /><Footer /></>} />
        <Route path="/services/events" element={<><Navbar /><CorporateEvents /><Footer /></>} />
        <Route path="/privacy" element={<><Navbar /><PrivacyPolicy /><Footer /></>} />
        <Route path="/terms" element={<><Navbar /><TermsConditions /><Footer /></>} />
        <Route path="/contact" element={<><Navbar /><ContactForm /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
