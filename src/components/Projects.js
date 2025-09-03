import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Globe, Shield, Phone, Eye, Bot } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  const [terminalText, setTerminalText] = useState('');
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    if (inView) {
      setShowTerminal(true);
      const command = '$ find projects/ -name "*.js" -o -name "*.py"';
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

  const projectsData = [
    {
      title: 'Live RAG Bot',
      description: 'AI documentary assistant capable of answering questions directly from Google Drive, combining semantic search and GPT-3.5-turbo generation.',
      stack: ['Node.js', 'Express', 'React.js', 'OpenAI Embeddings', 'Pinecone', 'Google Cloud VM', 'Cloudflare Tunnel', 'CI/CD'],
      features: ['Real-time indexing', 'Multi-language', 'Responses with citations', 'Secure 24/7 cloud service'],
      links: [
        { name: 'Live Demo', url: 'https://counseling-italy-basket-clothes.trycloudflare.com/', icon: <Globe size={16} /> },
        { name: 'GitHub', url: 'https://github.com/Adamos123421/ragBOT-service', icon: <Github size={16} /> },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/posts/adam-sirri-5b848a348_live-rag-bot-demo-github-repohttpslnkdin-activity-7364327322465767424-8PFB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFbsftwBmBj3h10kvCxZnEDBsqVNmkoAFfQ', icon: <ExternalLink size={16} /> }
      ],
      icon: <Bot size={24} />,
      color: '#667eea',
      category: 'AI/ML'
    },
    {
      title: 'Cybersecurity Lab',
      description: 'Real-time monitoring and intrusion detection on Google Cloud VM with Splunk Enterprise.',
      stack: ['Splunk Enterprise', 'Splunk Universal Forwarder', 'Google Cloud', 'Interactive Dashboards', 'Security Alerts'],
      features: ['Real-time monitoring', 'Intrusion detection', 'Interactive dashboards', 'Alert system'],
      links: [
        { name: 'Demo', url: 'https://creatures-certification-temperature-showing.trycloudflare.com/fr-FR/account/login?return_to=%2Ffr-FR%2F', icon: <Globe size={16} /> },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/posts/adam-sirri-5b848a348_projet-siem-avec-splunk-my-new-cybersecurity-activity-7364406026827161600-ZZVe?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFbsftwBmBj3h10kvCxZnEDBsqVNmkoAFfQ', icon: <ExternalLink size={16} /> }
      ],
      icon: <Shield size={24} />,
      color: '#764ba2',
      category: 'Cybersecurity'
    },
    {
      title: 'VoIP Service',
      description: 'Complete deployment of a VoIP service with SIP/RTP management, GCP firewall, NAT traversal and cross-platform client testing.',
      stack: ['Asterisk', 'Google Cloud', 'SIP/RTP', 'GCP Firewall', 'NAT traversal'],
      features: ['Complete VoIP service', 'SIP/RTP management', 'GCP Firewall', 'Cross-platform testing'],
      links: [
        { name: 'LinkedIn Demo', url: 'https://www.linkedin.com/posts/adam-sirri-5b848a348_voip-asterisk-sip-activity-7364442370714624000-9kxv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFbsftwBmBj3h10kvCxZnEDBsqVNmkoAFfQ', icon: <ExternalLink size={16} /> }
      ],
      icon: <Phone size={24} />,
      color: '#f093fb',
      category: 'Infrastructure'
    },
    {
      title: 'Computer Vision Projects',
      description: 'Hand Sign Recognition and YOLOv4 Real-Time Object Detection with GPU/CPU optimizations.',
      stack: ['MediaPipe', 'OpenCV', 'Python', 'YOLOv4', 'GPU/CPU optimization'],
      features: ['Gesture detection', 'Email alerts', '25-30 FPS', '80+ classes'],
      links: [
        { name: 'Hand Sign', url: 'https://www.linkedin.com/posts/adam-sirri-5b848a348_computervision-machinelearning-python-activity-7363695067422715904-sZCJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFbsftwBmBj3h10kvCxZnEDBsqVNmkoAFfQ', icon: <Eye size={16} /> },
        { name: 'Object Detection', url: 'https://www.linkedin.com/posts/adam-sirri-5b848a348_computervision-deeplearning-yolo-activity-7363657928857260034-8mZ5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFbsftwBmBj3h10kvCxZnEDBsqVNmkoAFfQ', icon: <Eye size={16} /> },
        { name: 'Hand Sign GitHub', url: 'https://github.com/Adamos123421/hand_sign', icon: <Github size={16} /> },
        { name: 'Object Detection GitHub', url: 'https://github.com/Adamos123421/object-detection', icon: <Github size={16} /> }
      ],
      icon: <Eye size={24} />,
      color: '#667eea',
      category: 'Computer Vision'
    }
  ];

  return (
    <section
      id="projects"
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
            Projets
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
              → Found {projectsData.length} projects in portfolio
            </div>
          </motion.div>
        )}

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem',
          padding: '0 0.5rem'
        }}>
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '1.5rem',
                  borderRadius: '20px',
                  border: `1px solid ${project.color}30`,
                  backdropFilter: 'blur(10px)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Background decoration */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 120,
                  height: 120,
                  background: `radial-gradient(circle, ${project.color}10 0%, transparent 70%)`,
                  borderRadius: '50%',
                  transform: 'translate(50%, -50%)',
                }} />

                <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Header */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1.25rem',
                  }}>
                    <div style={{
                      color: project.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 45,
                      height: 45,
                      background: `${project.color}20`,
                      borderRadius: '12px',
                      flexShrink: 0,
                    }}>
                      {project.icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{
                        fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
                        fontWeight: 600,
                        color: '#ffffff',
                        marginBottom: '0.25rem',
                        lineHeight: 1.2,
                      }}>
                        {project.title}
                      </h3>
                      <span style={{
                        fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                        color: project.color,
                        fontWeight: 500,
                        padding: '0.25rem 0.5rem',
                        background: `${project.color}20`,
                        borderRadius: '8px',
                        border: `1px solid ${project.color}30`,
                        display: 'inline-block',
                      }}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    color: '#a8b2d1',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                    flex: 1,
                  }}>
                    {project.description}
                  </p>

                  {/* Features */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <h4 style={{
                      fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)',
                      fontWeight: 600,
                      color: '#8892b0',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>
                      Features
                    </h4>
                    <div style={{ display: 'grid', gap: '0.4rem' }}>
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.8 + index * 0.2 + featureIndex * 0.1 }}
                          style={{
                            fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)',
                            color: '#a8b2d1',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                          }}
                        >
                          <div style={{
                            width: 3,
                            height: 3,
                            background: project.color,
                            borderRadius: '50%',
                            flexShrink: 0,
                          }} />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <h4 style={{
                      fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)',
                      fontWeight: 600,
                      color: '#8892b0',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>
                      Technologies
                    </h4>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {project.stack.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.5, delay: 1 + index * 0.2 + techIndex * 0.05 }}
                          style={{
                            padding: '0.2rem 0.5rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            color: '#ffffff',
                            borderRadius: '8px',
                            fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                            fontWeight: 500,
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    marginTop: 'auto',
                    flexWrap: 'wrap',
                  }}>
                    {project.links.map((link, linkIndex) => (
                      <motion.a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          padding: '0.5rem 0.75rem',
                          background: `${project.color}20`,
                          color: project.color,
                          borderRadius: '8px',
                          textDecoration: 'none',
                          fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                          fontWeight: 500,
                          border: `1px solid ${project.color}30`,
                          transition: 'all 0.3s ease',
                          flexShrink: 0,
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = `${project.color}30`;
                          e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = `${project.color}20`;
                          e.target.style.transform = 'translateY(0)';
                        }}
                      >
                        {link.icon}
                        {link.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
