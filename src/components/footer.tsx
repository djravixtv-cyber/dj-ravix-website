export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>DJ RAVIX</h2>

        <p>
          Professional DJ • Events • Clubs • Weddings • Festivals
        </p>

        <p>📧 djravixtv@gmail.com</p>

        <p>📍 Nairobi, Kenya</p>

        <p className="copyright">
          © {new Date().getFullYear()} DJ Ravix. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}