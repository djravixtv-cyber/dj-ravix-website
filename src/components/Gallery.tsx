import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
  "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
  "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec",
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