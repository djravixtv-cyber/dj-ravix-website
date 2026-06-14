import { motion } from "framer-motion";

const events = [
  {
    title: "Neon Vibes Festival",
    location: "Nairobi",
    date: "25 Aug 2026",
  },
  {
    title: "Amapiano Nights",
    location: "Mombasa",
    date: "10 Sep 2026",
  },
  {
    title: "Ravix Live Experience",
    location: "Kisumu",
    date: "22 Oct 2026",
  },
];

export default function Events() {
  return (
    <section className="events" id="events">
      <h2>Upcoming Events</h2>

      <div className="event-grid">
        {events.map((event) => (
          <motion.div
            key={event.title}
            className="event-card"
            whileHover={{ y: -10 }}
          >
            <h3>{event.title}</h3>
            <p>{event.location}</p>
            <span>{event.date}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}