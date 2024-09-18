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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.433267824332!2d2.179328715663905!3d41.384093979263774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f4e60f2a59%3A0xbfc0d2a74dc5fd5d!2sEl%20Born%2C%20Barcelona!5e0!3m2!1sen!2ses!4v1695064896945!5m2!1sen!2ses"
            width="200%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="contact-details">
        <p>seanyghughes@gmail.com </p>
        <p>+34 617 153 058</p>
        <p>Barcelona, España</p>
      </div>
    </div>
  );
}
