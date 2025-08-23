import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Brain, Settings } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'Langages de Programmation',
      icon: <Code size={24} />,
      color: '#667eea',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'SQL', level: 80 },
      ]
    },
    {
      title: 'Bases de Données',
      icon: <Database size={24} />,
      color: '#764ba2',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'NoSQL', level: 75 },
        { name: 'Pinecone', level: 80 },
      ]
    },
    {
      title: 'Frameworks & Outils',
      icon: <Settings size={24} />,
      color: '#f093fb',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'Spring Boot', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'Git', level: 90 },
      ]
    },
    {
      title: 'Machine Learning & IA',
      icon: <Brain size={24} />,
      color: '#4facfe',
      skills: [
        { name: 'Scikit-Learn', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'OpenAI Embeddings', level: 85 },
        { name: 'NLTK/spaCy', level: 75 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud size={24} />,
      color: '#43e97b',
      skills: [
        { name: 'Google Cloud', level: 80 },
        { name: 'Azure', level: 75 },
        { name: 'CI/CD', level: 80 },
        { name: 'DevOps', level: 75 },
      ]
    },
    {
      title: 'Cybersécurité & VoIP',
      icon: <Settings size={24} />,
      color: '#ff6b6b',
      skills: [
        { name: 'Sécurité réseau', level: 80 },
        { name: 'VoIP/SIP', level: 85 },
        { name: 'Cryptographie', level: 75 },
        { name: 'Asterisk', level: 80 },
      ]
    }
  ];

  const transversalSkills = [
    'Résolution de problèmes complexes',
    'Travail en équipe',
    'Communication efficace',
    'Gestion de projet',
    'Apprentissage rapide',
    'Adaptabilité',
    'Pensée analytique',
    'Innovation',
    'Sécurité informatique',
    'Analyse de vulnérabilités'
  ];

  return (
    <section
      id="skills"
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
            Compétences
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

        {/* Technical Skills */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '3rem',
          padding: '0 0.5rem'
        }}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + categoryIndex * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '1.5rem',
                  borderRadius: '20px',
                  border: `1px solid ${category.color}30`,
                  backdropFilter: 'blur(10px)',
                  height: '100%',
                }}
              >
                {/* Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                }}>
                  <div style={{
                    color: category.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 45,
                    height: 45,
                    background: `${category.color}20`,
                    borderRadius: '12px',
                    flexShrink: 0,
                  }}>
                    {category.icon}
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
                    fontWeight: 600,
                    color: '#ffffff',
                    margin: 0,
                  }}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.1 }}
                    >
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.5rem',
                      }}>
                        <span style={{ 
                          color: '#ffffff', 
                          fontWeight: 500,
                          fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
                        }}>
                          {skill.name}
                        </span>
                        <span style={{ 
                          color: category.color, 
                          fontWeight: 600,
                          fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)'
                        }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div style={{
                        width: '100%',
                        height: 8,
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: 4,
                        overflow: 'hidden',
                      }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 1 + categoryIndex * 0.1 + skillIndex * 0.1 }}
                          style={{
                            height: '100%',
                            background: `linear-gradient(45deg, ${category.color}, ${category.color}80)`,
                            borderRadius: 4,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Transversal Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{ padding: '0 0.5rem' }}
        >
          <h3 style={{
            fontSize: 'clamp(1.3rem, 4vw, 1.5rem)',
            fontWeight: 600,
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '2rem',
          }}>
            Compétences Transversales
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem',
            maxWidth: 800,
            margin: '0 auto'
          }}>
            {transversalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                style={{
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  textAlign: 'center',
                }}
              >
                <span style={{ 
                  color: '#a8b2d1',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                  fontWeight: 500,
                }}>
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
