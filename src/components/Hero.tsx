import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-content" id="home">
  <motion.h1
  initial={{ opacity: 0, y: -100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  DJ RAVIX
</motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Kenya's Next Big Sound
      </motion.p>

      <div className="hero-buttons">
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 40px cyan",
          }}
        >
          Listen To Mixes
        </motion.button>

        <motion.button
          className="secondary-btn"
          whileHover={{
            scale: 1.1,
          }}
        >
          Book DJ Ravix
        </motion.button>
      </div>
    </section>
  );
}