import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    location: "",
    date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

 emailjs.send(
  "service_ejzkjwj",
  "template_fikdgye",
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        eventType: form.eventType,
        location: form.location,
        date: form.date,
        message: form.message,
      },
      "s3sHjL5faIrx-Tyt4"
    )
    .then(() => {
      alert("Booking request sent successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        location: "",
        date: "",
        message: "",
      });
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send booking request.");
    });
};

  return (
    <section className="booking" id="booking">
      <h2>Book DJ Ravix</h2>

      <form className="booking-form" onSubmit={handleSubmit}>
        <input
  type="text"
  name="name"
  value={form.name}
  placeholder="Full Name"
  onChange={handleChange}
/>

        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Email Address"
          onChange={handleChange}
        />

        <input
  type="tel"
  name="phone"
  value={form.phone}
  placeholder="Phone Number"
  onChange={handleChange}
/>

        <input
          type="text"
          name="eventType"
          value={form.eventType}
          placeholder="Event Type"
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          value={form.location}
          placeholder="Location"
          onChange={handleChange}
        />

       <input
  type="date"
  name="date"
  value={form.date}
  onChange={handleChange}
/>

        <textarea
          rows={5}
          name="message"
          value={form.message}
          placeholder="Tell us about your event..."
          onChange={handleChange}
        />

    <button type="submit">
  Submit Booking Request
</button>
      </form>
    </section>
  );
}