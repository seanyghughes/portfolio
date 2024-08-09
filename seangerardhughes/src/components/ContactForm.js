import React from 'react';

export default function ContactForm() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>

        <div className="map-container">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10028.783476794897!2d-0.1130156!3d51.4630719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760561e501d3c3%3A0x21b6f5d4d89e43ea!2sBrixton%2C%20London!5e0!3m2!1sen!2suk!4v1691625294896!5m2!1sen!2suk" 
            width="200%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="contact-details">
        <p>Email: seanyghughes@gmail.com </p>
        <p>Phone: +44 7786 102005</p>
        <p>Address: London, United Kingdom</p>
      </div>
    </div>
  );
}
