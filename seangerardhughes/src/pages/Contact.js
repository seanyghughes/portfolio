import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub as faGithubBrand, faTwitter as faTwitterBrand } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>Ready to discuss your data analytics needs? Let's connect and explore how I can help transform your business with data-driven insights.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Feel free to reach out through any of these channels. I typically respond within 24 hours.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>sean.hughes@example.com</p>
                  <span>Best for detailed project discussions</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+353 (0) 87 123 4567</p>
                  <span>Available Mon-Fri, 9 AM - 6 PM GMT</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>Dublin, Ireland</p>
                  <span>Available for remote and local projects</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a href="https://linkedin.com/in/seanhughes" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://github.com/seanhughes" target="_blank" rel="noopener noreferrer" className="social-link github">
                  <FontAwesomeIcon icon={faGithubBrand} />
                </a>
                <a href="https://twitter.com/seanhughes" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                  <FontAwesomeIcon icon={faTwitterBrand} />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send Me a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or how I can help..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <p>Thank you! Your message has been sent successfully. I'll get back to you soon.</p>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="contact-cta">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how data analytics can transform your business. I offer free initial consultations to understand your needs and explore potential solutions.</p>
          <div className="cta-buttons">
            <button className="cta-button primary">Schedule a Consultation</button>
            <button className="cta-button secondary">Download My Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
