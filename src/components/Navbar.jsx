"use client";
import Image from "next/image";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.4s ease, box-shadow 0.4s ease",
        background: scrolled ? "#0D0D0D" : "transparent",
        boxShadow: scrolled ? "0 1px 0 rgba(201,169,110,0.15)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            lineHeight: 1,
          }}
        >
          <Image
            src="/logo.png"
            alt="Shore Residence"
            width={120}
            height={30}
          />
        </a>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 400,
                color: "#E8E2D9",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                opacity: 0.75,
                transition: "opacity 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = 1;
                e.target.style.color = "#C9A96E";
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = 0.75;
                e.target.style.color = "#E8E2D9";
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "#0D0D0D",
              background: "#C9A96E",
              textDecoration: "none",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.6rem 1.4rem",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#b8965c")}
            onMouseLeave={(e) => (e.target.style.background = "#C9A96E")}
          >
            Get In Touch
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            display: "none",
            flexDirection: "column",
            gap: "5px",
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "1.5px",
                background: "#C9A96E",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: menuOpen
                  ? i === 0
                    ? "translateY(6.5px) rotate(45deg)"
                    : i === 2
                      ? "translateY(-6.5px) rotate(-45deg)"
                      : "scaleX(0)"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        style={{
          background: "#0D0D0D",
          overflow: "hidden",
          maxHeight: menuOpen ? "320px" : "0",
          transition: "max-height 0.4s ease",
          borderTop: menuOpen ? "1px solid rgba(201,169,110,0.15)" : "none",
        }}
        className="mobile-menu"
      >
        <div
          style={{
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 400,
                color: "#E8E2D9",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "#0D0D0D",
              background: "#C9A96E",
              textDecoration: "none",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.75rem 1.4rem",
              textAlign: "center",
              marginTop: "0.5rem",
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
