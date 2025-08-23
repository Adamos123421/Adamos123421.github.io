import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = ({ currentSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À Propos' },
    { id: 'education', label: 'Éducation' },
    { id: 'experience', label: 'Expérience' },
    { id: 'projects', label: 'Projets' },
    { id: 'skills', label: 'Compétences' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '1rem 2rem',
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            cursor: 'pointer',
          }}
          onClick={() => scrollToSection('home')}
        >
          Adam Sirri
        </motion.div>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
        }}>
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: currentSection === item.id ? '#667eea' : '#a8b2d1',
                fontSize: '1rem',
                fontWeight: 500,
                cursor: 'pointer',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                if (currentSection !== item.id) {
                  e.target.style.color = '#ffffff';
                }
              }}
              onMouseLeave={(e) => {
                if (currentSection !== item.id) {
                  e.target.style.color = '#a8b2d1';
                }
              }}
            >
              {item.label}
              {currentSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    borderRadius: 1,
                  }}
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleMenuToggle}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '8px',
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1rem 0',
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            padding: '0 2rem',
          }}>
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleMenuItemClick(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: currentSection === item.id ? '#667eea' : '#a8b2d1',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  padding: '1rem',
                  borderRadius: '8px',
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  if (currentSection !== item.id) {
                    e.target.style.color = '#ffffff';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentSection !== item.id) {
                    e.target.style.color = '#a8b2d1';
                    e.target.style.background = 'transparent';
                  }
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Mobile Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          nav {
            display: none !important;
          }
          
          button[style*="display: none"] {
            display: block !important;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;
