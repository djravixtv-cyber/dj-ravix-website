import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "ravix2025") {
      localStorage.setItem("admin", "true");
      navigate("/admin");
    } else {
      alert("Wrong password");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#020617",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,.05)",
          padding: "40px",
          borderRadius: "20px",
          width: "350px",
        }}
      >
        <h2 style={{ color: "#00ffff" }}>
          DJ Ravix Admin Login
        </h2>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "12px",
            background: "#00ffff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}