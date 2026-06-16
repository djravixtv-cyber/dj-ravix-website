import { motion } from "framer-motion";

export default function FeaturedMix() {
  return (
    <section className="featured-mix">
      <h2>🔥 Featured Mix Of The Week</h2>

      <motion.div
        className="featured-card"
        whileHover={{ scale: 1.02 }}
      >
        <h3>Amapiano Mega Mix 2025</h3>

        <p>
          The hottest Amapiano selections mixed by DJ Ravix.
        </p>

        <audio controls className="audio-player">
          <source
            src="/mixes/amapiano-mix.mp3"
            type="audio/mpeg"
          />
        </audio>

        <a
          href="/mixes/amapiano-mix.mp3"
          download
          className="download-btn"
        >
          Download Mix
        </a>
      </motion.div>
    </section>
  );
}