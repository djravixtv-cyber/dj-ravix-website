import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-content">

      <img
  src="/ravix-logo.png"
  alt="DJ Ravix Logo"
  className="hero-logo"
/>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        DJ RAVIX
      </motion.h1>

      <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
>
  Professional DJ • MC • Event Entertainer
</motion.p>

<p className="hero-description">
  Nairobi's Premier DJ for Clubs, Weddings,
  Corporate Events and Private Parties.
</p>

<div className="hero-buttons">
        <a href="#booking">
          <button>Book Now</button>
        </a>

        <a href="#mixes">
          <button className="secondary-btn">
            Listen To Mixes
          </button>
        </a>
      </div>

    </section>
  );
}