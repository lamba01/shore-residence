"use client";

const stats = [
  { value: "10+", label: "Years in Real Estate" },
  { value: "50+", label: "Properties Acquired" },
  { value: "£50M+", label: "Assets Under Management" },
  { value: "100%", label: "Client Retention Rate" },
];

const pillars = [
  {
    title: "Acquisition",
    text: "We identify undervalued assets before the market catches up — sourcing residential and commercial properties in locations with strong growth fundamentals.",
  },
  {
    title: "Development",
    text: "From ground-up builds to strategic refurbishments, we enhance every asset we touch — increasing value, improving liveability, and strengthening returns.",
  },
  {
    title: "Management",
    text: "We manage real estate portfolios with long-term discipline — protecting capital, maximising yield, and growing investor wealth over time.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "#141414",
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "40%",
          height: "1px",
          background: "linear-gradient(to right, #C9A96E, transparent)",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Top grid: eyebrow + headline left, intro text right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
            marginBottom: "6rem",
          }}
          className="about-top-grid"
        >
          {/* Left */}
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
                Who We Are
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
              Built on Conviction.
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
              Driven by Returns.
            </h2>

            <div
              style={{
                width: "48px",
                height: "1px",
                background: "#C9A96E",
                margin: "2rem 0",
              }}
            />

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                color: "#7A7060",
                lineHeight: 1.9,
                letterSpacing: "0.02em",
              }}
            >
              United Kingdom
            </p>
          </div>

          {/* Right */}
          <div style={{ paddingTop: "1rem" }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)",
                fontWeight: 300,
                color: "#E8E2D9",
                lineHeight: 1.9,
                opacity: 0.85,
                marginBottom: "1.5rem",
              }}
            >
              Shore Residence Limited is a full-service real estate firm focused
              on acquiring, developing, and managing premium properties across
              the United Kingdom's most strategic locations.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                fontWeight: 300,
                color: "#E8E2D9",
                lineHeight: 1.9,
                opacity: 0.6,
              }}
            >
              We work with a select group of investors, homeowners, and
              developers who want more than a transaction — they want a partner
              who understands the market, moves with precision, and delivers
              results that compound over time.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            borderTop: "1px solid rgba(201,169,110,0.15)",
            borderLeft: "1px solid rgba(201,169,110,0.15)",
            marginBottom: "6rem",
          }}
          className="stats-grid"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                padding: "2.5rem 2rem",
                borderRight: "1px solid rgba(201,169,110,0.15)",
                borderBottom: "1px solid rgba(201,169,110,0.15)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 600,
                  color: "#C9A96E",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 400,
                  color: "#7A7060",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Three pillars */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "3rem",
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
              How We Operate
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0",
              borderTop: "1px solid rgba(201,169,110,0.15)",
            }}
            className="pillars-grid"
          >
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                style={{
                  padding: "3rem 2.5rem 3rem 0",
                  borderRight: i < pillars.length - 1 ? "1px solid rgba(201,169,110,0.15)" : "none",
                  paddingLeft: i === 0 ? "0" : "2.5rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.6rem",
                    fontWeight: 600,
                    color: "#E8E2D9",
                    marginBottom: "1rem",
                  }}
                >
                  {pillar.title}
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.88rem",
                    fontWeight: 300,
                    color: "#E8E2D9",
                    lineHeight: 1.85,
                    opacity: 0.65,
                  }}
                >
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-top-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .pillars-grid {
            grid-template-columns: 1fr !important;
          }
          .pillars-grid > div {
            padding-left: 0 !important;
            padding-right: 0 !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(201,169,110,0.15) !important;
          }
        }
      `}</style>
    </section>
  );
}