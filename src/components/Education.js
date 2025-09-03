import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const educationData = [
    {
      institution: 'Institut National de Statistiques et Économie Appliquée',
      degree: 'Second Year in Engineering Cycle',
      period: '2024-2025',
      description: 'Data and Software Engineering Track',
      icon: <GraduationCap size={24} />,
      color: '#667eea'
    },
    {
      institution: 'Institut National de Statistiques et Économie Appliquée',
      degree: 'First Year in Engineering Cycle',
      period: '2023-2024',
      description: 'Data and Software Engineering Track',
      icon: <GraduationCap size={24} />,
      color: '#764ba2'
    },
    {
      institution: 'Lycée Moulay Youssef',
      degree: 'Second Year of CPGE',
      period: '2022-2023',
      description: 'Mathematics - Physics Specialization',
      icon: <Award size={24} />,
      color: '#f093fb'
    },
    {
      institution: 'Lycée Moulay Youssef',
      degree: 'First Year of CPGE',
      period: '2021-2022',
      description: 'Mathematics, Physics-Chemistry, Engineering Sciences, Philosophy',
      icon: <Award size={24} />,
      color: '#667eea'
    },
    {
      institution: 'Lycée Al-Qods',
      degree: 'General Baccalaureate in Mathematics-Sciences',
      period: '2021',
      description: 'Very Good Mention',
      icon: <Award size={24} />,
      color: '#764ba2'
    }
  ];

  return (
    <section
      id="education"
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
            Education
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

        <div style={{ position: 'relative', padding: '0 0.5rem' }}>
          {/* Desktop Timeline */}
          <div style={{ 
            position: 'relative',
            display: 'none',
            '@media (min-width: 768px)': {
              display: 'block'
            }
          }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, #667eea, #764ba2)',
              transform: 'translateX(-50%)',
              zIndex: 1,
            }} />

            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '3rem',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {/* Left side (even index) */}
                {index % 2 === 0 ? (
                  <>
                    <div style={{ flex: 1, paddingRight: '3rem' }}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          padding: '2rem',
                          borderRadius: '20px',
                          border: `1px solid ${item.color}30`,
                          backdropFilter: 'blur(10px)',
                          position: 'relative',
                        }}
                      >
                        <div style={{
                          position: 'absolute',
                          right: '-1rem',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: 0,
                          height: 0,
                          borderTop: '10px solid transparent',
                          borderBottom: '10px solid transparent',
                          borderLeft: `10px solid ${item.color}30`,
                        }} />
                        
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          marginBottom: '1rem',
                        }}>
                          <div style={{
                            color: item.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 50,
                            height: 50,
                            background: `${item.color}20`,
                            borderRadius: '15px',
                          }}>
                            {item.icon}
                          </div>
                          <div>
                            <h3 style={{
                              fontSize: '1.3rem',
                              fontWeight: 600,
                              color: '#ffffff',
                              marginBottom: '0.5rem',
                            }}>
                              {item.degree}
                            </h3>
                            <p style={{
                              fontSize: '1rem',
                              color: item.color,
                              fontWeight: 500,
                            }}>
                              {item.institution}
                            </p>
                          </div>
                        </div>
                        
                        <p style={{
                          fontSize: '1rem',
                          color: '#a8b2d1',
                          lineHeight: 1.6,
                          marginBottom: '1rem',
                        }}>
                          {item.description}
                        </p>
                        
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: '#8892b0',
                          fontSize: '0.9rem',
                        }}>
                          <Calendar size={16} />
                          {item.period}
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div style={{
                      width: 20,
                      height: 20,
                      background: item.color,
                      borderRadius: '50%',
                      border: '4px solid rgba(15, 15, 35, 0.95)',
                      boxShadow: `0 0 0 4px ${item.color}30`,
                      zIndex: 3,
                    }} />
                    
                    <div style={{ flex: 1, paddingLeft: '3rem' }} />
                  </>
                ) : (
                  <>
                    <div style={{ flex: 1, paddingRight: '3rem' }} />
                    
                    {/* Timeline dot */}
                    <div style={{
                      width: 20,
                      height: 20,
                      background: item.color,
                      borderRadius: '50%',
                      border: '4px solid rgba(15, 15, 35, 0.95)',
                      boxShadow: `0 0 0 4px ${item.color}30`,
                      zIndex: 3,
                    }} />
                    
                    <div style={{ flex: 1, paddingLeft: '3rem' }}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          padding: '2rem',
                          borderRadius: '20px',
                          border: `1px solid ${item.color}30`,
                          backdropFilter: 'blur(10px)',
                          position: 'relative',
                        }}
                      >
                        <div style={{
                          position: 'absolute',
                          left: '-1rem',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: 0,
                          height: 0,
                          borderTop: '10px solid transparent',
                          borderBottom: '10px solid transparent',
                          borderRight: `10px solid ${item.color}30`,
                        }} />
                        
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          marginBottom: '1rem',
                        }}>
                          <div style={{
                            color: item.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 50,
                            height: 50,
                            background: `${item.color}20`,
                            borderRadius: '15px',
                          }}>
                            {item.icon}
                          </div>
                          <div>
                            <h3 style={{
                              fontSize: '1.3rem',
                              fontWeight: 600,
                              color: '#ffffff',
                              marginBottom: '0.5rem',
                            }}>
                              {item.degree}
                            </h3>
                            <p style={{
                              fontSize: '1rem',
                              color: item.color,
                              fontWeight: 500,
                            }}>
                              {item.institution}
                            </p>
                          </div>
                        </div>
                        
                        <p style={{
                          fontSize: '1rem',
                          color: '#a8b2d1',
                          lineHeight: 1.6,
                          marginBottom: '1rem',
                        }}>
                          {item.description}
                        </p>
                        
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: '#8892b0',
                          fontSize: '0.9rem',
                        }}>
                          <Calendar size={16} />
                          {item.period}
                        </div>
                      </motion.div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div style={{ 
            display: 'block',
            '@media (min-width: 768px)': {
              display: 'none'
            }
          }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: '1.5rem',
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, #667eea, #764ba2)',
              zIndex: 1,
            }} />

            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '2rem',
                  position: 'relative',
                  zIndex: 2,
                  paddingLeft: '3rem',
                }}
              >
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: '0.75rem',
                  top: '1.5rem',
                  width: 16,
                  height: 16,
                  background: item.color,
                  borderRadius: '50%',
                  border: '3px solid rgba(15, 15, 35, 0.95)',
                  boxShadow: `0 0 0 3px ${item.color}30`,
                  zIndex: 3,
                  transform: 'translateX(-50%)',
                }} />

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '1.5rem',
                    borderRadius: '15px',
                    border: `1px solid ${item.color}30`,
                    backdropFilter: 'blur(10px)',
                    width: '100%',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem',
                  }}>
                    <div style={{
                      color: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      background: `${item.color}20`,
                      borderRadius: '10px',
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{
                        fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                        fontWeight: 600,
                        color: '#ffffff',
                        marginBottom: '0.25rem',
                        lineHeight: 1.2,
                      }}>
                        {item.degree}
                      </h3>
                      <p style={{
                        fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                        color: item.color,
                        fontWeight: 500,
                      }}>
                        {item.institution}
                      </p>
                    </div>
                  </div>
                  
                  <p style={{
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    color: '#a8b2d1',
                    lineHeight: 1.6,
                    marginBottom: '1rem',
                  }}>
                    {item.description}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#8892b0',
                    fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)',
                  }}>
                    <Calendar size={14} />
                    {item.period}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (min-width: 768px) {
          div[style*="display: none"] {
            display: block !important;
          }
          div[style*="display: block"] {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
