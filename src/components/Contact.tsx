export default function Contact() {
  return (
    <section className="contact">
      <h2>📞 Contact DJ Ravix</h2>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Phone</h3>
          <a href="tel:+254714785433">
            +254 714 785 433
          </a>
        </div>

        <div className="contact-card">
          <h3>Email</h3>
          <a href="mailto:djravixtv@gmail.com">
            djravixtv@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <h3>WhatsApp</h3>
          <a
            href="https://wa.me/254714785433"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="contact-card">
          <h3>Location</h3>
          <p>Nairobi, Kenya</p>
        </div>
      </div>
    </section>
  );
}