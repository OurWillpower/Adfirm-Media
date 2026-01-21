import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, Globe, ArrowRight } from 'lucide-react';

const App = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#050505', color: 'white', overflowX: 'hidden', fontFamily: 'sans-serif' }}>
      
      {/* Navbar */}
      <nav style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '20px 5%', position: 'fixed', width: '100%', zIndex: 100,
        backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.05)',
        boxSizing: 'border-box'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.5px' }}>
          ADFIRM<span style={{ color: '#00f2ea' }}>MEDIA</span>
        </div>
        <button style={{ 
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', 
          color: 'white', padding: '10px 25px', borderRadius: '30px', cursor: 'pointer',
          fontWeight: 'bold', fontSize: '0.9rem', transition: 'all 0.3s'
        }}>
          Book Consultation
        </button>
      </nav>

      {/* Hero Section */}
      <section style={{ 
        minHeight: '100vh', display: 'flex', flexDirection: 'column', 
        justifyContent: 'center', alignItems: 'center', textAlign: 'center',
        position: 'relative', padding: '100px 20px 0'
      }}>
        
        {/* Animated Background Glow */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ 
            position: 'absolute', width: '60vw', height: '60vw', 
            background: 'radial-gradient(circle, #00f2ea 0%, rgba(0,0,0,0) 70%)', 
            filter: 'blur(120px)', zIndex: 0, top: '20%', pointerEvents: 'none'
          }}
        />

        <div style={{ zIndex: 1, maxWidth: '900px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ 
              display: 'inline-block', padding: '8px 16px', borderRadius: '20px', 
              background: 'rgba(0, 242, 234, 0.1)', color: '#00f2ea', marginBottom: '20px',
              fontSize: '0.9rem', fontWeight: 'bold', border: '1px solid rgba(0, 242, 234, 0.2)'
            }}
          >
            NEXT GEN MARKETING
          </motion.div>

          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ 
              fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: '1.05', 
              marginBottom: '30px', fontWeight: '800'
            }}
          >
            We don't chase trends. <br /> 
            <span style={{ 
              background: 'linear-gradient(to right, #fff, #888)', 
              WebkitBackgroundClip: 'text', color: 'transparent' 
            }}>We set them.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ fontSize: '1.2rem', color: '#888', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.6' }}
          >
            Adfirm Media bridges the gap between creative storytelling and hard data. 
            We scale brands that are ready to dominate.
          </motion.p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              padding: '18px 45px', fontSize: '1.1rem', fontWeight: 'bold',
              background: '#00f2ea', color: 'black', border: 'none', borderRadius: '50px',
              cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px',
              boxShadow: '0 0 30px rgba(0, 242, 234, 0.3)'
            }}
          >
            Partner With Us <ArrowRight size={20} />
          </motion.button>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '120px 5%', background: '#0a0a0a' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Why Adfirm?</h2>
          <p style={{ color: '#666' }}>Comprehensive solutions for the digital age.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          
          <ServiceCard 
            icon={<Rocket color="#00f2ea" size={32} />}
            title="Growth & Scale"
            desc="We use paid media strategies on Meta and Google to drive instant traffic and measurable ROI."
          />
          <ServiceCard 
            icon={<Zap color="#ff0055" size={32} />}
            title="Viral Content"
            desc="Short-form video production and creative strategy designed to capture attention in 3 seconds."
          />
          <ServiceCard 
            icon={<Globe color="#7000ff" size={32} />}
            title="Web & Funnels"
            desc="We build high-converting landing pages that turn curious visitors into paying customers."
          />

        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 5%', borderTop: '1px solid #222', background: '#050505' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>ADFIRM MEDIA</h3>
            <p style={{ color: '#666', maxWidth: '300px' }}>
              Redefining digital excellence for forward-thinking companies.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '40px' }}>
            <div>
              <h4 style={{ color: 'white', marginBottom: '20px' }}>Socials</h4>
              <p style={{ color: '#666', marginBottom: '10px' }}>Instagram</p>
              <p style={{ color: '#666', marginBottom: '10px' }}>LinkedIn</p>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '20px' }}>Company</h4>
              <p style={{ color: '#666', marginBottom: '10px' }}>About</p>
              <p style={{ color: '#666' }}>Contact</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '60px', paddingTop: '20px', borderTop: '1px solid #111', color: '#444', fontSize: '0.9rem' }}>
          &copy; 2024 Adfirm Media. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

// Component for Cards
const ServiceCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    style={{ 
      background: '#0f0f0f', padding: '40px', borderRadius: '16px', 
      border: '1px solid #222', transition: '0.3s'
    }}
  >
    <div style={{ marginBottom: '25px', background: 'rgba(255,255,255,0.03)', width: 'fit-content', padding: '15px', borderRadius: '50%' }}>
      {icon}
    </div>
    <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{title}</h3>
    <p style={{ color: '#888', lineHeight: '1.6', fontSize: '0.95rem' }}>{desc}</p>
  </motion.div>
);

export default App;
