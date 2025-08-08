import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Sparkles, Heart, Star, Zap, Palette, Globe, Users } from 'lucide-react';
import { fancyTextStyles, convertText } from './fontStyles';
import './App.css';

function Header() {
  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="header-content">
        <div className="logo">
          <Sparkles className="logo-icon" />
          <h1>FancyText Pro</h1>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </motion.header>
  );
}

function Footer() {
  return (
    <motion.footer 
      className="footer"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="footer-content">
        <div className="footer-section">
          <h3>FancyText Pro</h3>
          <p>Transform your text into stunning styles instantly</p>
          <div className="social-links">
            <a href="#"><Globe /></a>
            <a href="#"><Users /></a>
            <a href="#"><Heart /></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#cookies">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 FancyText Pro. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}

function TextGenerator({ inputText, setInputText }) {
  return (
    <div className="text-generator">
      <motion.div 
        className="input-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Transform Your Text</h2>
        <p>Enter your text below and watch it transform into beautiful styles</p>
        <div className="input-container">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your text here..."
            className="text-input"
          />
        </div>
      </motion.div>
    </div>
  );
}

function GeneratedStyles({ inputText }) {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [displayCount, setDisplayCount] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section className="generated-styles-section">
      <div className="font-controls">
        <button className="font-size-btn">A-</button>
        <button className="font-size-btn active">A</button>
        <button className="font-size-btn">A+</button>
      </div>
      
      <motion.div 
        className="results-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3>Generated Styles ({displayCount} of {fancyTextStyles.length} Stylish Fonts)</h3>
        
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          color: '#6B7280',
          fontSize: '0.9rem'
        }}>
          Showing {Math.ceil(displayCount / 3)} rows of styles
        </div>
        
        <div className="text-grid">
          {fancyTextStyles.slice(0, displayCount).map((style, index) => {
            const displayText = inputText.trim() || "Fancy Text";
            const convertedText = convertText(displayText, style);
            
            return (
              <motion.div
                key={index}
                className="text-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: Math.min(index * 0.02, 0.5) 
                }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-display">
                  {convertedText}
                </div>
                <div className="card-actions">
                  <button
                    onClick={() => copyToClipboard(convertedText, index)}
                    className={`copy-btn ${copiedIndex === index ? 'copied' : ''}`}
                  >
                    {copiedIndex === index ? 'Copied!' : 'Copy'}
                  </button>
                  <button className="favorite-btn">
                    <Heart size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {displayCount < fancyTextStyles.length && (
          <motion.div
            className="load-more-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              className="load-more-btn"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setDisplayCount(prev => Math.min(prev + 12, fancyTextStyles.length));
                  setIsLoading(false);
                }, 500);
              }}
              disabled={isLoading}
            >
              {isLoading ? 'Loading More Styles...' : `Load More Styles (+${Math.min(12, fancyTextStyles.length - displayCount)} styles)`}
            </button>
          </motion.div>
        )}
        
        {displayCount >= fancyTextStyles.length && (
          <motion.div
            className="load-more-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="success-message">
              ✨ All {fancyTextStyles.length} Styles Loaded Successfully!
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: <Zap />,
      title: "Instant Generation",
      description: "See your text transform in real-time as you type. No waiting, no delays."
    },
    {
      icon: <Copy />,
      title: "Easy Copy & Paste",
      description: "Click any style to instantly copy it to your clipboard. Use anywhere you want."
    },
          {
        icon: <Palette />,
        title: "Stylish Fonts",
        description: "Creative and unique font styles that make your text stand out."
      },
    {
      icon: <Sparkles />,
      title: "Beautiful Design",
      description: "Modern, responsive design that looks great on all devices."
    }
  ];

  return (
    <section className="features" id="features">
      <motion.div 
        className="features-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Why Choose FancyText Pro?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <motion.div 
        className="about-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-header">
          <h2>About FancyText Pro</h2>
          <p>Your ultimate text transformation tool</p>
        </div>
        <div className="about-grid">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Transform Your Text Instantly</h3>
            <p>FancyText Pro is the most creative text transformation tool available online. Our stylish fonts include Greek, Native American, Geometric, and many other unique styles that make your text truly stand out.</p>
            <p>With our creative font collection, you can transform any text into beautiful, eye-catching formats that are perfect for social media, gaming usernames, and creative content. Our real-time conversion ensures you see results instantly as you type.</p>
            <div className="about-stats">
              <div className="stat">
                <h4>20+</h4>
                <p>Stylish Fonts</p>
              </div>
              <div className="stat">
                <h4>100%</h4>
                <p>Creative Styles</p>
              </div>
              <div className="stat">
                <h4>24/7</h4>
                <p>Available</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="image-placeholder">
              <Sparkles size={80} />
              <h3>Stylish Text</h3>
              <p>Creative fonts that make your text unique</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Enter Your Text",
      description: "Type or paste your text into the input field. You can use any text - names, messages, or phrases."
    },
    {
      number: "02",
      title: "Choose Your Style",
      description: "Browse through our collection of creative and stylish font styles. Each style transforms your text uniquely."
    },
    {
      number: "03",
      title: "Copy & Use",
      description: "Click the copy button next to any style you like. Your transformed text is ready to use anywhere!"
    }
  ];

  return (
    <section className="how-it-works">
      <motion.div 
        className="how-it-works-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Three simple steps to transform your text</p>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function FontStyles() {
  const styleCategories = [
    {
      category: "Bold & Strong",
      styles: ["Bold", "Italic", "Bold Italic"],
      description: "Make your text bold and impactful"
    },
    {
      category: "Elegant & Cursive",
      styles: ["Script", "Script Bold", "Gothic"],
      description: "Sophisticated styles for formal occasions"
    },
    {
      category: "Modern & Clean",
      styles: ["Sans Serif", "Sans Serif Bold", "Monospace"],
      description: "Clean and modern styles for professional use"
    },
    {
      category: "Decorative & Fun",
      styles: ["Circled", "Squared", "Fullwidth"],
      description: "Fun and decorative styles that stand out"
    },
    {
      category: "Special Effects",
      styles: ["Small Caps", "Upside Down", "Double Struck"],
      description: "Unique effects to make your text memorable"
    }
  ];

  return (
    <section className="font-styles" id="styles">
      <motion.div 
        className="font-styles-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-header">
          <h2>Font Styles</h2>
          <p>Explore our collection of creative and stylish text styles</p>
        </div>
        <div className="styles-grid">
          {styleCategories.map((category, index) => (
            <motion.div
              key={index}
              className="style-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{category.category}</h3>
              <p>{category.description}</p>
              <div className="style-examples">
                {category.styles.map((style, styleIndex) => {
                  const styleObj = fancyTextStyles.find(s => s.name === style);
                  return (
                    <div key={styleIndex} className="style-example">
                      <span className="style-name">{style}</span>
                      <span className="style-preview">{styleObj ? convertText("Hello", styleObj) : style}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function FAQs() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How do I use FancyText Pro?",
      answer: "Simply type your text in the input field and watch it transform into different styles in real-time. Click the copy button next to any style you like to copy it to your clipboard.",
      icon: "?"
    },
    {
      question: "Are all the styles creative and unique?",
      answer: "Yes! All our fonts are carefully designed to be creative and eye-catching. We include Greek, Native American, Geometric, and many other unique styles that make your text stand out.",
      icon: "✓"
    },
    {
      question: "Can I use these styles on social media?",
      answer: "Absolutely! Our text styles work perfectly on most social media platforms including Instagram, Twitter, Facebook, TikTok, and more. Just copy and paste the transformed text.",
      icon: "📱"
    },
    {
      question: "Do you support numbers and special characters?",
      answer: "Yes! Our tool supports numbers, letters, and most special characters. Numbers will be transformed using appropriate number styles, while special characters remain unchanged.",
      icon: "🔢"
    },
    {
      question: "Is my text stored or saved anywhere?",
      answer: "No, we don't store or save any of your text. Everything is processed in real-time in your browser and is never sent to any servers.",
      icon: "🔒"
    },
    {
      question: "Can I use this on mobile devices?",
      answer: "Yes! FancyText Pro is fully responsive and works great on all devices including smartphones and tablets.",
      icon: "📱"
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="faqs" id="faq">
      <motion.div 
        className="faqs-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about FancyText Pro</p>
        </div>
        <div className="faqs-grid">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${openFaq === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="faq-header" onClick={() => toggleFaq(index)}>
                <div className="faq-icon-left">{faq.icon}</div>
                <h3>{faq.question}</h3>
                <div className="faq-icon">
                  {openFaq === index ? '−' : '+'}
                </div>
              </div>
              <motion.div 
                className="faq-content"
                initial={false}
                animate={{ 
                  height: openFaq === index ? 'auto' : 0,
                  opacity: openFaq === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function App() {
  const [inputText, setInputText] = useState('');

  return (
    <div className="App">
      <Header />
      <main className="main">
        <TextGenerator inputText={inputText} setInputText={setInputText} />
        <GeneratedStyles inputText={inputText} />
        <Features />
        <About />
        <HowItWorks />
        <FontStyles />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
}

export default App;