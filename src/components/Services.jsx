"use client";

import { useState } from "react";

const clusters = [
  {
    category: "Acquisition & Sourcing",
    description: "We move early on the right assets — identifying and securing residential and commercial properties in locations with strong long-term fundamentals.",
    services: [
      {
        title: "Real Estate Investment",
        text: "We identify and acquire high-potential properties positioned for long-term capital growth and strong investment returns.",
      },
      {
        title: "Property Acquisition",
        text: "Sourcing residential and commercial properties in strategic UK locations — off-market deals, undervalued assets, and high-growth corridors.",
      },
    ],
  },
  {
    category: "Development & Renovation",
    description: "We don't just buy properties — we transform them. Every asset we touch is improved, enhanced, and positioned to perform.",
    services: [
      {
        title: "Property Development",
        text: "Improving and enhancing properties through considered development — maximising value, improving liveability, and strengthening market appeal.",
      },
      {
        title: "Property Renovation & Refurbishment",
        text: "Transforming underperforming properties into desirable investments through expert renovation, refurbishment, and repositioning.",
      },
    ],
  },
  {
    category: "Sales & Investment",
    description: "From curated investment opportunities to full portfolio management — we connect capital with the right assets and grow them over time.",
    services: [
      {
        title: "Investment Opportunities",
        text: "Providing access to carefully selected real estate investment opportunities — each one vetted, structured, and built for performance.",
      },
      {
        title: "Property Sales",
        text: "Marketing and selling investment properties to homeowners and investors through targeted, results-driven sales strategies.",
      },
      {
        title: "Portfolio Management",
        text: "Managing and growing real estate asset portfolios with long-term discipline — protecting capital and compounding returns over time.",
      },
    ],
  },
  {
    category: "Advisory",
    description: "Informed decisions start with the right intelligence. We bring rigorous research and expert guidance to every stage of the property journey.",
    services: [
      {
        title: "Market Analysis & Due Diligence",
        text: "Conducting thorough research and property evaluations to support informed, confident investment decisions.",
      },
      {
        title: "Real Estate Consulting",
        text: "Expert guidance on property acquisition, investment strategy, and market trends — tailored to your goals and risk appetite.",
      },
    ],
  },
];

export default function Services() {
  const [activeCluster, setActiveCluster] = useState(0);

  return (
    <section
      id="services"
      style={{
        background: "#0D0D0D",
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top gold rule */}
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

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Section header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "end",
            marginBottom: "5rem",
          }}
          className="services-header-grid"
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
                What We Do
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
              Full-Spectrum
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
              Real Estate Services
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
            From first acquisition to long-term portfolio growth — we handle
            every stage of the property investment journey with precision,
            market intelligence, and a commitment to results.
          </p>
        </div>

        {/* Cluster tabs */}
        <div
          style={{
            display: "flex",
            gap: "0",
            borderBottom: "1px solid rgba(201,169,110,0.15)",
            marginBottom: "4rem",
            overflowX: "auto",
          }}
          className="cluster-tabs"
        >
          {clusters.map((cluster, i) => (
            <button
              key={cluster.category}
              onClick={() => setActiveCluster(i)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.72rem",
                fontWeight: activeCluster === i ? 500 : 400,
                color: activeCluster === i ? "#C9A96E" : "#7A7060",
                background: "none",
                border: "none",
                borderBottom: activeCluster === i ? "1px solid #C9A96E" : "1px solid transparent",
                cursor: "pointer",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "1rem 2rem 1rem 0",
                marginBottom: "-1px",
                transition: "color 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                if (activeCluster !== i) e.target.style.color = "#E8E2D9";
              }}
              onMouseLeave={(e) => {
                if (activeCluster !== i) e.target.style.color = "#7A7060";
              }}
            >
              {cluster.category}
            </button>
          ))}
        </div>

        {/* Active cluster content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="cluster-content-grid"
        >
          {/* Left: cluster description */}
          <div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#E8E2D9",
                lineHeight: 1.6,
                marginBottom: "3rem",
                opacity: 0.85,
              }}
            >
              "{clusters[activeCluster].description}"
            </p>

            {/* Cluster indicator dots */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {clusters.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setActiveCluster(i)}
                  style={{
                    width: activeCluster === i ? "24px" : "6px",
                    height: "6px",
                    background: activeCluster === i ? "#C9A96E" : "rgba(201,169,110,0.25)",
                    cursor: "pointer",
                    transition: "width 0.3s ease, background 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: service cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {clusters[activeCluster].services.map((service, i) => (
              <div
                key={service.title}
                style={{
                  padding: "2rem 0",
                  borderBottom: "1px solid rgba(201,169,110,0.12)",
                  borderTop: i === 0 ? "1px solid rgba(201,169,110,0.12)" : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.5rem",
                  }}
                >
                  {/* Gold dot */}
                  <div
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#C9A96E",
                      marginTop: "0.45rem",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.25rem",
                        fontWeight: 600,
                        color: "#E8E2D9",
                        marginBottom: "0.6rem",
                        lineHeight: 1.2,
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 300,
                        color: "#E8E2D9",
                        lineHeight: 1.85,
                        opacity: 0.6,
                      }}
                    >
                      {service.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "5rem",
            paddingTop: "3rem",
            borderTop: "1px solid rgba(201,169,110,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 300,
              color: "#E8E2D9",
              opacity: 0.6,
              maxWidth: "480px",
              lineHeight: 1.8,
            }}
          >
            Not sure which service fits your situation? Let's talk — we'll point
            you in the right direction.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "#0D0D0D",
              background: "#C9A96E",
              textDecoration: "none",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "1rem 2rem",
              transition: "background 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#b8965c")}
            onMouseLeave={(e) => (e.target.style.background = "#C9A96E")}
          >
            Speak to Us
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-header-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .cluster-content-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .cluster-tabs {
            gap: 0 !important;
          }
          .cluster-tabs button {
            padding: 1rem 1.25rem 1rem 0 !important;
            font-size: 0.65rem !important;
          }
        }
      `}</style>
    </section>
  );
}