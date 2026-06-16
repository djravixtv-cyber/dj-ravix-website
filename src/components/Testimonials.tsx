export default function Testimonials() {
  const testimonials = [
    {
      name: "Brian K.",
      text: "DJ Ravix brought incredible energy to our event. The dance floor stayed full all night.",
    },
    {
      name: "Esther M.",
      text: "Amazing DJ for our wedding. Professional, punctual and the music selection was perfect.",
    },
    {
      name: "James O.",
      text: "One of the best DJs in Nairobi. Great mixes and excellent crowd interaction.",
    },
  ];

  return (
    <section className="testimonials">
      <h2>⭐ Client Testimonials</h2>

      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="stars">★★★★★</div>

            <p>"{testimonial.text}"</p>

            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}