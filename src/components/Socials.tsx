import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Socials() {
  const socials = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@DjRavixTv",
      icon: <FaYoutube />,
    },
    {
      name: "Facebook",
      url: "https://web.facebook.com/profile.php?id=61590392347827",
      icon: <FaFacebook />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/djravix254/",
      icon: <FaInstagram />,
    },
    {
      name: "Telegram",
      url: "https://t.me/djravixtv",
      icon: <FaTelegram />,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@djravixtv2",
      icon: <FaTiktok />,
    },
    {
      name: "X",
      url: "https://x.com/RavixDj",
      icon: <FaXTwitter />,
    },
    {
      name: "HearThis",
      url: "https://hearthis.at/dj-ravix-tv/",
      icon: "🎵",
    },
  ];

  return (
    <section className="socials">
      <h2>Follow DJ Ravix</h2>

      <div className="social-grid">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <div>
              <div className="social-icon">
                {social.icon}
              </div>

              <h3>{social.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}