import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Admin() {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setBookings(data || []);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "40px",
      }}
    >
      <h1
        style={{
          color: "#00ffff",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        DJ Ravix Admin Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <div className="admin-card">
          <h2>Total Mixes</h2>
          <h3>12</h3>
        </div>

        <div className="admin-card">
          <h2>Bookings</h2>
          <h3>{bookings.length}</h3>
        </div>

        <div className="admin-card">
          <h2>Visitors</h2>
          <h3>Analytics</h3>
        </div>

        <div className="admin-card">
          <h2>Featured Mix</h2>
          <h3>Amapiano Mix</h3>
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2 style={{ color: "#00ffff" }}>Quick Links</h2>

        <p>
          <a
            href="https://analytics.google.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#00ffff" }}
          >
            Open Google Analytics
          </a>
        </p>

        <p>
          <a href="/" style={{ color: "#00ffff" }}>
            View Website
          </a>
        </p>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h2 style={{ color: "#00ffff" }}>Recent Bookings</h2>

        <table
          style={{
            width: "100%",
            marginTop: "20px",
            borderCollapse: "collapse",
            background: "#0f172a",
          }}
        >
          <thead>
            <tr>
              <th style={{ padding: "12px", border: "1px solid #1e293b" }}>
                Name
              </th>
              <th style={{ padding: "12px", border: "1px solid #1e293b" }}>
                Email
              </th>
              <th style={{ padding: "12px", border: "1px solid #1e293b" }}>
                Phone
              </th>
              <th style={{ padding: "12px", border: "1px solid #1e293b" }}>
                Event
              </th>
              <th style={{ padding: "12px", border: "1px solid #1e293b" }}>
                Date
              </th>
              <th style={{ padding: "12px", border: "1px solid #1e293b" }}>
                Message
              </th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td style={{ padding: "10px", border: "1px solid #1e293b" }}>
                  {booking.name}
                </td>
                <td style={{ padding: "10px", border: "1px solid #1e293b" }}>
                  {booking.email}
                </td>
                <td style={{ padding: "10px", border: "1px solid #1e293b" }}>
                  {booking.phone}
                </td>
                <td style={{ padding: "10px", border: "1px solid #1e293b" }}>
                  {booking.event_type}
                </td>
                <td style={{ padding: "10px", border: "1px solid #1e293b" }}>
                  {booking.date}
                </td>
                <td style={{ padding: "10px", border: "1px solid #1e293b" }}>
                  {booking.message}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}