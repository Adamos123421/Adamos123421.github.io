import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '2rem',
      }}
    >
      {/* Animated background elements */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: 200,
            height: 200,
            background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '15%',
            width: 300,
            height: 300,
            background: 'linear-gradient(45deg, rgba(118, 75, 162, 0.1), rgba(102, 126, 234, 0.1))',
            borderRadius: '50%',
            filter: 'blur(50px)',
          }}
        />
      </div>

      <div style={{ maxWidth: 1200, textAlign: 'center', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              marginBottom: '1rem',
              background: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.2,
            }}
          >
            Adam Sirri
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              fontWeight: 400,
              marginBottom: '2rem',
              color: '#a8b2d1',
              lineHeight: 1.4,
            }}
          >
            Ingénieur en Data & Software Engineering
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              fontSize: '1.1rem',
              maxWidth: 600,
              margin: '0 auto 3rem',
              color: '#8892b0',
              lineHeight: 1.6,
            }}
          >
            Spécialisé en Intelligence Artificielle, Machine Learning et Développement Full-Stack.
            Passionné par l'innovation technologique et la résolution de problèmes complexes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                border: 'none',
                color: '#ffffff',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
              }}
            >
              <Mail size={20} />
              Me Contacter
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('/cv-adam-sirri.pdf', '_blank')}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(102, 126, 234, 0.3)',
                color: '#ffffff',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Download size={20} />
              Télécharger CV
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
          }}
          onClick={scrollToAbout}
          whileHover={{ y: 5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={30} color="#667eea" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
