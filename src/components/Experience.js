import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Building, Users } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  const [terminalText, setTerminalText] = useState('');
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    if (inView) {
      setShowTerminal(true);
      const command = '$ cat experience.json';
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

  const experienceData = [
    {
      company: 'OwnLy.nz',
      position: 'Développeur IA',
      period: 'Printemps 2025',
      description: 'Création d\'une intelligence artificielle pour assister les employés dans leurs tâches tout en répondant aux questions des clients.',
      icon: <Building size={24} />,
      color: '#667eea',
      skills: ['IA', 'Machine Learning', 'Développement']
    },
    {
      company: 'TéléPerformance',
      position: 'Service Client',
      period: 'Été 2023',
      description: 'Communication et service client.',
      icon: <Users size={24} />,
      color: '#764ba2',
      skills: ['Communication', 'Service Client']
    }
  ];

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '6rem 2rem 4rem',
        background: 'rgba(255, 255, 255, 0.02)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              marginBottom: '1rem',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Expérience Professionnelle
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

        {/* Terminal Hint */}
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(102, 126, 234, 0.2)',
              borderRadius: '8px',
              padding: '0.75rem',
              margin: '0 auto 2rem',
              maxWidth: 400,
              fontFamily: 'Consolas, Monaco, "Courier New", monospace',
              fontSize: '0.8rem',
              color: '#00ff00',
              backdropFilter: 'blur(5px)',
              textAlign: 'center',
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
              → Loading {experienceData.length} professional experiences...
            </div>
          </motion.div>
        )}

        <div style={{ display: 'grid', gap: '3rem' }}>
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '2.5rem',
                  borderRadius: '20px',
                  border: `1px solid ${item.color}30`,
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Background decoration */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 200,
                  height: 200,
                  background: `radial-gradient(circle, ${item.color}10 0%, transparent 70%)`,
                  borderRadius: '50%',
                  transform: 'translate(50%, -50%)',
                }} />

                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                    marginBottom: '1.5rem',
                  }}>
                    <div style={{
                      color: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 60,
                      height: 60,
                      background: `${item.color}20`,
                      borderRadius: '15px',
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#ffffff',
                        marginBottom: '0.5rem',
                      }}>
                        {item.position}
                      </h3>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '1rem',
                        flexWrap: 'wrap',
                      }}>
                        <p style={{
                          fontSize: '1.1rem',
                          color: item.color,
                          fontWeight: 500,
                        }}>
                          {item.company}
                        </p>
                        
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: '#8892b0',
                          fontSize: '0.9rem',
                          padding: '0.25rem 0.75rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '20px',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}>
                          <Calendar size={16} />
                          {item.period}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#a8b2d1',
                    lineHeight: 1.7,
                    marginBottom: '1.5rem',
                  }}>
                    {item.description}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                  }}>
                    {item.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.2 + skillIndex * 0.1 }}
                        style={{
                          padding: '0.5rem 1rem',
                          background: `${item.color}20`,
                          color: item.color,
                          borderRadius: '20px',
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          border: `1px solid ${item.color}30`,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional info section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            marginTop: '4rem',
            textAlign: 'center',
          }}
        >
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '2rem',
            borderRadius: '20px',
            border: '1px solid rgba(102, 126, 234, 0.2)',
            backdropFilter: 'blur(10px)',
          }}>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 600,
              color: '#667eea',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}>
              <Briefcase size={24} />
              En Recherche d'Opportunités
            </h3>
            <p style={{
              fontSize: '1rem',
              color: '#a8b2d1',
              lineHeight: 1.6,
            }}>
              Actuellement en formation d'ingénierie, je suis ouvert aux opportunités 
              de stage et de collaboration dans les domaines de l'IA, du développement 
              et de l'ingénierie logicielle.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
