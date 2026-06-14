import { motion } from "framer-motion";
import { title } from "framer-motion/m";

const mixes = [
  {
    title: "Amapiano Mix",
    genre: "Amapiano",
    file: "/mixes/amapiano-mix.mp3",
  },
  {
    title: "Bongo Mix",
    genre: "Bongo",
    file: "/mixes/bongo-mix.mp3",
  },
  {
    title: "Club Bangers Mix",
    genre: "Club",
    file: "/mixes/club-bangers-mix.mp3",
  },
  {
    title: "Club Music Mix",
    genre: "Club Music",
    file: "/mixes/club-music-mix.mp3",
  },
  {
    title: "Crunks Mix",
    genre: "Crunks",
    file: "/mixes/crunks-mix.mp3",
  },
  {
    title: "Gospel Mix",
    genre: "Gospel",
    file: "/mixes/gospel-mix.mp3",
  },
  {
    title: "HipHop Mix",
    genre: "HipHop",
    file: "/mixes/hiphop-mix.mp3",
  },
  {
    title: "Kamba Benga Mix",
    genre: "Kamba Benga",
    file: "/mixes/kamba-benga-mix.mp3",
  },
  {
    title: "Kikuyu Mugithi Mix",
    genre: "Mugithi",
    file: "/mixes/kikuyu-mugithi-mix.mp3",
  },
  {
    title: "Nigerian Afrobeats Mix",
    genre: "Afrobeats",
    file: "/mixes/nigerian-afrobeats-mix.mp3",
  },
  {
    title: "Reggae Mix",
    genre: "Reggae",
    file: "/mixes/reggae-mix.mp3",
  },
 {
  title: "Reggae Meditation Mix",
  genre: "Reggae",
  file: "/mixes/my-test-mix.mp3",
},

    

  
];

export default function Mixes() {
  return (
    <section className="mixes" id="mixes">
      <h2>Latest Mixes</h2>

      <div className="mix-grid">
  {mixes.map((mix) => (
    <motion.div
      key={mix.title}
      whileHover={{ scale: 1.05 }}
      className="mix-card"
    >
      <h3>{mix.title}</h3>
      <p>{mix.genre}</p>

      <div className="mix-buttons">
        <audio controls className="audio-player">
          <source src={mix.file} type="audio/mpeg" />
        </audio>

        <a href={mix.file} download className="download-btn">
          ⬇ Download
        </a>
      </div>
    </motion.div>
  ))}
</div>
</section>
  );
}