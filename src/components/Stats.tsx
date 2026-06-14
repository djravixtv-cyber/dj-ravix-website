import { motion } from "framer-motion";

const stats = [
  { number: "150+", label: "Events Played" },
  { number: "50K+", label: "Listeners" },
  { number: "100+", label: "Mixes Released" },
  { number: "5+", label: "Years Experience" },
];

export default function Stats() {
  return (
    <section className="stats">
      <h2>DJ Ravix By The Numbers</h2>

      <div className="stats-grid">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            className="stat-card"
            whileHover={{ scale: 1.08 }}
          >
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}