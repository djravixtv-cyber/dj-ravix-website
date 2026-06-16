import { motion } from "framer-motion";

const images = [
  "/ravix-logo.png",
];

export default function Gallery() {
  return (
    <section className="gallery">
      <h2>Live Performance Gallery</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="gallery-card"
            whileHover={{ scale: 1.05 }}
          >
            <img src={img} alt="DJ Ravix Event" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}