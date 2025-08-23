import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '6rem 1rem 4rem',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 3rem)',
              fontWeight: 700,
              marginBottom: '1rem',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Contact
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              width: 80,
              height: 4,
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              margin: '0 auto',
              borderRadius: 2,
            }}
          />
        </motion.div>

        <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 0.5rem' }}>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 style={{
              fontSize: 'clamp(1.3rem, 4vw, 1.5rem)',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '2rem',
              textAlign: 'center',
            }}>
              Informations de contact
            </h3>
            
            <div style={{ display: 'grid', gap: '1rem', marginBottom: '3rem' }}>
              <motion.a
                href="tel:+212682411270"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.25rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '15px',
                  textDecoration: 'none',
                  color: '#a8b2d1',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 45,
                  height: 45,
                  background: 'rgba(102, 126, 234, 0.2)',
                  borderRadius: '12px',
                  flexShrink: 0,
                }}>
                  <Phone size={22} color="#667eea" />
                </div>
                <div>
                  <div style={{ color: '#ffffff', fontWeight: 600, marginBottom: '0.25rem', fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
                    Téléphone
                  </div>
                  <div style={{ color: '#a8b2d1', fontSize: 'clamp(0.85rem, 2.2vw, 0.95rem)' }}>
                    +212 6 82 41 12 70
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="mailto:adam.sirri@insea.ma"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.25rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '15px',
                  textDecoration: 'none',
                  color: '#a8b2d1',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 45,
                  height: 45,
                  background: 'rgba(102, 126, 234, 0.2)',
                  borderRadius: '12px',
                  flexShrink: 0,
                }}>
                  <Mail size={22} color="#667eea" />
                </div>
                <div>
                  <div style={{ color: '#ffffff', fontWeight: 600, marginBottom: '0.25rem', fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
                    Email
                  </div>
                  <div style={{ color: '#a8b2d1', fontSize: 'clamp(0.85rem, 2.2vw, 0.95rem)' }}>
                    adam.sirri@insea.ma
                  </div>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.25rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 45,
                  height: 45,
                  background: 'rgba(102, 126, 234, 0.2)',
                  borderRadius: '12px',
                  flexShrink: 0,
                }}>
                  <MapPin size={22} color="#667eea" />
                </div>
                <div>
                  <div style={{ color: '#ffffff', fontWeight: 600, marginBottom: '0.25rem', fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
                    Adresse
                  </div>
                  <div style={{ color: '#a8b2d1', fontSize: 'clamp(0.85rem, 2.2vw, 0.95rem)' }}>
                    Résidence Bayti 3, Avenue Hssaine, 11100, Sala Jadida
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Media */}
            <div>
              <h4 style={{
                fontSize: 'clamp(1.1rem, 3vw, 1.2rem)',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}>
                Réseaux sociaux
              </h4>
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <motion.a
                  href="https://www.linkedin.com/in/adam-sirri-5b848a348/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 55,
                    height: 55,
                    background: 'rgba(102, 126, 234, 0.2)',
                    borderRadius: '15px',
                    textDecoration: 'none',
                    border: '1px solid rgba(102, 126, 234, 0.3)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(102, 126, 234, 0.3)';
                    e.target.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(102, 126, 234, 0.2)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <Linkedin size={26} color="#667eea" />
                </motion.a>

                <motion.a
                  href="https://github.com/Adamos123421/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 55,
                    height: 55,
                    background: 'rgba(102, 126, 234, 0.2)',
                    borderRadius: '15px',
                    textDecoration: 'none',
                    border: '1px solid rgba(102, 126, 234, 0.3)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(102, 126, 234, 0.3)';
                    e.target.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(102, 126, 234, 0.2)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <Github size={26} color="#667eea" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
