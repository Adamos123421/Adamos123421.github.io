import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  const [terminalText, setTerminalText] = useState('');
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    if (inView) {
      setShowTerminal(true);
      const command = '$ whoami';
      let index = 0;
      
      const typeInterval = setInterval(() => {
        if (index <= command.length) {
          setTerminalText(command.slice(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
        }
      }, 100);
      
      return () => clearInterval(typeInterval);
    }
  }, [inView]);

  return (
    <section
      id="about"
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
            À Propos
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

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem',
          padding: '0 0.5rem'
        }}>
          {/* Personal Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 style={{
              fontSize: 'clamp(1.3rem, 4vw, 1.5rem)',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '1.5rem',
            }}>
              Profil Personnel
            </h3>
            <p style={{
              fontSize: 'clamp(1rem, 3vw, 1.1rem)',
              color: '#a8b2d1',
              lineHeight: 1.7,
              marginBottom: '1rem',
            }}>
              Étudiant en ingénierie, ayant suivi les enseignements des Classes Préparatoires aux Grandes Écoles avec une spécialité en Mathématiques et en Physique, j'exerce en parallèle de mes études une activité professionnelle de programmation de sites et applications et solution IA pour différentes entreprises.
            </p>

            {/* Terminal Hint */}
            {showTerminal && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '1px solid rgba(102, 126, 234, 0.2)',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  marginBottom: '1.5rem',
                  fontFamily: 'Consolas, Monaco, "Courier New", monospace',
                  fontSize: '0.8rem',
                  color: '#00ff00',
                  backdropFilter: 'blur(5px)',
                }}
              >
                <div style={{ color: '#00ff00' }}>
                  {terminalText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    style={{ color: '#00ff00' }}
                  >
                    |
                  </motion.span>
                </div>
                <div style={{ color: '#ffffff', marginTop: '0.5rem' }}>
                  → Adam Sirri - Data & Software Engineer
                </div>
              </motion.div>
            )}
            
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{
                fontSize: 'clamp(1.1rem, 3vw, 1.2rem)',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '1rem',
              }}>
                Spécialisations
              </h4>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                {['Data and Software Engineering', 'Machine Learning & AI', 'Cybersecurity', 'VoIP & Telecommunications', 'Cloud Infrastructure', 'Computer Vision'].map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    style={{
                      fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                      color: '#a8b2d1',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                    }}
                  >
                    <div style={{
                      width: 6,
                      height: 6,
                      background: '#667eea',
                      borderRadius: '50%',
                      flexShrink: 0,
                    }} />
                    {spec}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 style={{
              fontSize: 'clamp(1.3rem, 4vw, 1.5rem)',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '1.5rem',
            }}>
              Coordonnées
            </h3>
            
            <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
              <motion.a
                href="tel:+212682411270"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: '#a8b2d1',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <Phone size={18} color="#667eea" />
                <span style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>+212 6 82 41 12 70</span>
              </motion.a>

              <motion.a
                href="mailto:adam.sirri@insea.ma"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: '#a8b2d1',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <Mail size={18} color="#667eea" />
                <span style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>adam.sirri@insea.ma</span>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <MapPin size={18} color="#667eea" />
                <span style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>Résidence Bayti 3, Avenue Hssaine, 11100, Sala Jadida</span>
              </motion.div>

              <motion.a
                href="https://www.linkedin.com/in/adam-sirri-5b848a348/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.3 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: '#a8b2d1',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <Linkedin size={18} color="#667eea" />
                <span style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>LinkedIn Profile</span>
              </motion.a>

              <motion.a
                href="https://github.com/Adamos123421/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.4 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: '#a8b2d1',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <Github size={18} color="#667eea" />
                <span style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>GitHub Profile</span>
              </motion.a>
            </div>

            {/* Languages */}
            <div>
              <h4 style={{
                fontSize: 'clamp(1.1rem, 3vw, 1.2rem)',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '1rem',
              }}>
                Langues
              </h4>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {[
                  { name: 'Français', level: 'Langue maternelle', percentage: 100 },
                  { name: 'Arabe', level: 'Langue maternelle', percentage: 100 },
                  { name: 'Anglais', level: 'C2', percentage: 95 }
                ].map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.5rem',
                    }}>
                      <span style={{ color: '#ffffff', fontWeight: 500, fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>{lang.name}</span>
                      <span style={{ color: '#a8b2d1', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>{lang.level}</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: 6,
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 3,
                      overflow: 'hidden',
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${lang.percentage}%` } : {}}
                        transition={{ duration: 1, delay: 1.8 + index * 0.2 }}
                        style={{
                          height: '100%',
                          background: 'linear-gradient(45deg, #667eea, #764ba2)',
                          borderRadius: 3,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
