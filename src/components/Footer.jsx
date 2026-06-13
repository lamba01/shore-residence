const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0D0D0D",
        borderTop: "1px solid rgba(201,169,110,0.12)",
        padding: "3rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "2.5rem",
            paddingBottom: "2.5rem",
            borderBottom: "1px solid rgba(201,169,110,0.08)",
          }}
        >
          {/* Wordmark */}
          <div
            style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "#C9A96E",
                letterSpacing: "0.04em",
              }}
            >
              Shore Residence
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.58rem",
                fontWeight: 400,
                color: "#7A7060",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginTop: "3px",
              }}
            >
              Limited
            </span>
          </div>

          {/* Nav links */}
          <nav style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer-link"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 400,
                  color: "#7A7060",
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.72rem",
              fontWeight: 300,
              color: "#7A7060",
              lineHeight: 1.6,
            }}
          >
            © {new Date().getFullYear()} Shore Residence Limited. All rights
            reserved.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.72rem",
              fontWeight: 300,
              color: "#7A7060",
            }}
          >
            United Kingdom
          </p>
        </div>
      </div>

      <style>{`
        .footer-link { transition: color 0.2s ease; }
        .footer-link:hover { color: #C9A96E !important; }
      `}</style>
    </footer>
  );
}
