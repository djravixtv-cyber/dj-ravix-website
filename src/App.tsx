import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ParticleScene from "./components/ParticleScene";
import Mixes from "./components/Mixes";
import Events from "./components/Events";
import Booking from "./components/Booking";
import Stats from "./components/Stats";
import Gallery from "./components/Gallery";
import WhatsAppButton from "./components/WhatsAppButton";
function App() {
  return (
    <div className="app">
      <div className="background">
        <ParticleScene />
      </div>

      <Navbar />

      <Hero />
      <Stats />

      <Mixes />
      <Events />
      <Gallery />
      <Booking />
      <WhatsAppButton />
    </div>
  );
}

export default App;