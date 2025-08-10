import { useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Från EmailJS
        'YOUR_TEMPLATE_ID', // Från EmailJS
        form.current,
        'YOUR_PUBLIC_KEY' // Från EmailJS
      );

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Återställ formuläret efter 5 sekunder
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      setError('Det gick tyvärr inte att skicka meddelandet. Försök igen senare.');
      console.error('EmailJS Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">
          Kontakta <span className="section-title-accent">mig</span>
        </h2>
        
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-card">
            <h3 className="card-title">Kontaktinformation</h3>
            
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon-wrapper">
                  <FaEnvelope className="contact-icon" size={20} />
                </div>
                <div className="contact-detail">                  <h4 className="detail-title">E-post</h4>
                  <a href="mailto:omarissa179@gmail.com" className="detail-link">
                    omarissa179@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon-wrapper">
                  <FaPhone className="contact-icon" size={20} />
                </div>
                <div className="contact-detail">
                  <h4 className="detail-title">Telefon</h4>
                  <p className="detail-text">076-585 65 50</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon-wrapper">
                  <FaMapMarkerAlt className="contact-icon" size={20} />
                </div>
                <div className="contact-detail">
                  <h4 className="detail-title">Plats</h4>
                  <p className="detail-text">Malmö, Sverige</p>
                </div>
              </div>
            </div>
            
            <div className="social-section">
              <h4 className="social-title">Hitta mig på</h4>              <div className="social-links">
                <a 
                  href="https://github.com/Omar-Alissa" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaGithub size={24} />
                </a>
                <a                  href="https://www.linkedin.com/in/omar-al-issa-5a659b156/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-card">
            <h3 className="card-title">Skicka ett meddelande</h3>
            
            {submitted ? (
              <div className="success-message">
                <p>Tack för ditt meddelande! Jag återkommer till dig så snart som möjligt.</p>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="contact-form">
                <div className="form-field">
                  <label htmlFor="name" className="form-label">Namn</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Ditt namn"
                  />
                </div>
                
                <div className="form-field">
                  <label htmlFor="email" className="form-label">E-post</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Din e-postadress"
                  />
                </div>
                
                <div className="form-field">
                  <label htmlFor="subject" className="form-label">Ämne</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Meddelandets ämne"
                  />
                </div>
                
                <div className="form-field">
                  <label htmlFor="message" className="form-label">Meddelande</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-textarea"
                    placeholder="Ditt meddelande..."
                  ></textarea>
                </div>
                
                {error && (
                  <div className="error-message">
                    <p>{error}</p>
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={submitting}
                  className="submit-button"
                >
                  {submitting ? (
                    <>
                      <span>Skickar...</span>
                      <div className="loader"></div>
                    </>
                  ) : 'Skicka meddelande'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
