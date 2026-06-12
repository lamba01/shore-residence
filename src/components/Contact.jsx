"use client";

import { useState } from "react";

const contactDetails = [
  {
    label: "Email",
    value: "info@shoreresidence.co.uk",
    href: "mailto:info@shoreresidence.co.uk",
  },
  {
    label: "Phone",
    value: "+44 000 000 0000",
    href: "tel:+440000000000",
  },
  {
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/440000000000",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");

    // ─────────────────────────────────────────────
    // Wire up your email service here (Resend, Nodemailer, etc.)
    // For now this simulates a successful submission.
    // ─────────────────────────────────────────────
    await new Promise((res) => setTimeout(res, 1500));
    setStatus("success");
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
  };

  return (
    <section
      id="contact"
      style={{
        background: "#0D0D0D",
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "40%",
          height: "1px",
          background: "linear-gradient(to left, #C9A96E, transparent)",
        }}
      />

      {/* Background gold glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "500px",
          height: "500px",
          background: "radial-gradient(ellipse at 100% 100%, rgba(201,169,110,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "end",
            marginBottom: "5rem",
          }}
          className="contact-header-grid"
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              <div style={{ width: "32px", height: "1px", background: "#C9A96E" }} />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  color: "#C9A96E",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Get In Touch
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 600,
                color: "#E8E2D9",
                lineHeight: 1.1,
                marginBottom: "0.4rem",
                letterSpacing: "-0.01em",
              }}
            >
              Let's Talk
            </h2>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "#C9A96E",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Real Estate.
            </h2>
          </div>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
              fontWeight: 300,
              color: "#E8E2D9",
              lineHeight: 1.9,
              opacity: 0.65,
              paddingBottom: "0.5rem",
            }}
          >
            Whether you're looking to invest, sell, or explore what's possible
            with a property — we're happy to have a conversation. No pressure,
            no jargon. Just straight talk about real estate.
          </p>
        </div>

        {/* Main grid: form left, contact info right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="contact-main-grid"
        >
          {/* Form */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Name */}
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(201,169,110,0.5)";
                    e.target.style.outline = "none";
                  }}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.15)")}
                />
              </div>

              {/* Email + Phone */}
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
                className="form-two-col"
              >
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@email.com"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(201,169,110,0.5)";
                      e.target.style.outline = "none";
                    }}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.15)")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 000 000 0000"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(201,169,110,0.5)";
                      e.target.style.outline = "none";
                    }}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.15)")}
                  />
                </div>
              </div>

              {/* Interest */}
              <div>
                <label style={labelStyle}>I'm interested in</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    color: formData.interest ? "#E8E2D9" : "#7A7060",
                    cursor: "pointer",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(201,169,110,0.5)";
                    e.target.style.outline = "none";
                  }}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.15)")}
                >
                  <option value="" disabled style={{ background: "#141414" }}>Select an option</option>
                  <option value="investing" style={{ background: "#141414" }}>Investing / Investment Opportunities</option>
                  <option value="buying" style={{ background: "#141414" }}>Buying a Property</option>
                  <option value="selling" style={{ background: "#141414" }}>Selling a Property</option>
                  <option value="development" style={{ background: "#141414" }}>Property Development</option>
                  <option value="consulting" style={{ background: "#141414" }}>Real Estate Consulting</option>
                  <option value="other" style={{ background: "#141414" }}>Something Else</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a little about what you're looking for..."
                  rows={5}
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    minHeight: "120px",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(201,169,110,0.5)";
                    e.target.style.outline = "none";
                  }}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.15)")}
                />
              </div>

              {/* Error message */}
              {status === "error" && (
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#e07070", letterSpacing: "0.02em" }}>
                  Please fill in your name, email and message.
                </p>
              )}

              {/* Success message */}
              {status === "success" && (
                <div
                  style={{
                    padding: "1rem 1.25rem",
                    border: "1px solid rgba(201,169,110,0.3)",
                    background: "rgba(201,169,110,0.06)",
                  }}
                >
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#C9A96E", lineHeight: 1.6 }}>
                    Thank you — we'll be in touch shortly.
                  </p>
                </div>
              )}

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={status === "sending" || status === "success"}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "#0D0D0D",
                  background: status === "success" ? "rgba(201,169,110,0.5)" : "#C9A96E",
                  border: "none",
                  cursor: status === "sending" || status === "success" ? "not-allowed" : "pointer",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "1.1rem 2rem",
                  width: "100%",
                  transition: "background 0.2s ease",
                  marginTop: "0.5rem",
                }}
                onMouseEnter={(e) => {
                  if (status === "idle" || status === "error") e.target.style.background = "#b8965c";
                }}
                onMouseLeave={(e) => {
                  if (status === "idle" || status === "error") e.target.style.background = "#C9A96E";
                }}
              >
                {status === "sending" ? "Sending..." : status === "success" ? "Message Sent" : "Send Message"}
              </button>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <div
              style={{
                borderTop: "1px solid rgba(201,169,110,0.15)",
                marginBottom: "3rem",
              }}
            >
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: "1.75rem 0",
                    borderBottom: "1px solid rgba(201,169,110,0.15)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.68rem",
                      color: "#7A7060",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      flexShrink: 0,
                    }}
                  >
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    target={item.label === "WhatsApp" ? "_blank" : undefined}
                    rel="noreferrer"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 300,
                      color: "#E8E2D9",
                      textDecoration: "none",
                      textAlign: "right",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#C9A96E")}
                    onMouseLeave={(e) => (e.target.style.color = "#E8E2D9")}
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>

            {/* Response time note */}
            <div
              style={{
                padding: "1.75rem",
                border: "1px solid rgba(201,169,110,0.12)",
                background: "rgba(201,169,110,0.03)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  color: "#E8E2D9",
                  lineHeight: 1.7,
                  opacity: 0.75,
                  marginBottom: "1rem",
                }}
              >
                "We respond to every enquiry personally — usually within one business day."
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.72rem",
                  color: "#7A7060",
                  letterSpacing: "0.08em",
                }}
              >
                — Shore Residence Limited
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-header-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .contact-main-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const labelStyle = {
  display: "block",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.68rem",
  fontWeight: 500,
  color: "#7A7060",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  marginBottom: "0.5rem",
};

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(201,169,110,0.15)",
  color: "#E8E2D9",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.88rem",
  fontWeight: 300,
  padding: "0.85rem 1rem",
  transition: "border-color 0.2s ease",
  boxSizing: "border-box",
};