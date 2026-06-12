"use client";

export default function Hero() {
  const handleScroll = (href) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#0D0D0D",
      }}
    >
      {/* 
        BACKGROUND: Replace this div with a <video> or <img> tag when ready.

        VIDEO EXAMPLE:
        <video
          autoPlay muted loop playsInline
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", zIndex:0 }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        IMAGE EXAMPLE:
        <img
          src="/images/hero.jpg" alt=""
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", zIndex:0 }}
        />
      */}

      {/* Placeholder bg — remove when you add the real media */}
      {/* <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background: "linear-gradient(135deg, #111 0%, #1a1a1a 50%, #0f0f0f 100%)",
        }}
      /> */}
              <video
          autoPlay muted loop playsInline
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", zIndex:0 }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>


      {/* Subtle gold grain texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(201,169,110,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Dark overlay — keep this even when you add real media */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background: "linear-gradient(to right, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.6) 60%, rgba(13,13,13,0.3) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          width: "100%",
          paddingTop: "72px",
        }}
      >
        <div style={{ maxWidth: "680px" }}>

          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "1px",
                background: "#C9A96E",
              }}
            />
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
              Real Estate · Investment · Development
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 600,
              color: "#E8E2D9",
              lineHeight: 1.05,
              margin: "0 0 0.5rem 0",
              letterSpacing: "-0.01em",
            }}
          >
            Where Capital
          </h1>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#C9A96E",
              lineHeight: 1.05,
              margin: "0 0 2rem 0",
              letterSpacing: "-0.01em",
            }}
          >
            Meets Prime Property
          </h1>

          {/* Gold rule */}
          <div
            style={{
              width: "60px",
              height: "1px",
              background: "#C9A96E",
              marginBottom: "2rem",
            }}
          />

          {/* Subheadline */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
              fontWeight: 300,
              color: "#E8E2D9",
              lineHeight: 1.8,
              opacity: 0.8,
              marginBottom: "3rem",
              maxWidth: "520px",
            }}
          >
            Shore Residence Limited acquires, develops, and manages high-value
            real estate — built for investors who expect more than a return.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => handleScroll("#projects")}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "#0D0D0D",
                background: "#C9A96E",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "1rem 2rem",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#b8965c")}
              onMouseLeave={(e) => (e.target.style.background = "#C9A96E")}
            >
              Explore Our Work
            </button>

            <button
              onClick={() => handleScroll("#contact")}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "#C9A96E",
                background: "transparent",
                border: "1px solid rgba(201,169,110,0.4)",
                cursor: "pointer",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "1rem 2rem",
                transition: "border-color 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "#C9A96E";
                e.target.style.color = "#E8E2D9";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "rgba(201,169,110,0.4)";
                e.target.style.color = "#C9A96E";
              }}
            >
              Start Investing
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: 0.4,
            cursor: "pointer",
          }}
          onClick={() => handleScroll("#about")}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.6rem",
              color: "#E8E2D9",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, #C9A96E, transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}