import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about">
      <h2>About DJ Ravix</h2>

      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p>
          DJ Ravix is a professional DJ, MC, and entertainer based in Nairobi,
          Kenya. Specializing in Amapiano, Afrobeat, Club Bangers, Gengetone,
          Hip Hop, and Commercial Hits, DJ Ravix delivers unforgettable
          experiences for weddings, corporate events, clubs, private parties,
          and festivals.
        </p>

        <p>
          With a passion for music and crowd engagement, DJ Ravix keeps every
          audience energized from start to finish.
        </p>
      </motion.div>
    </section>
  );
}