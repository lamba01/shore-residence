// "use client";

// import { useState } from "react";

// const projects = [
//   {
//     id: "sheffield",
//     title: "183 Queen Mary Road",
//     location: "Sheffield, S2 1HX",
//     type: "3-Bedroom Semi-Detached House",
//     status: "Completed",
//     image: "/images/sheffield-1.jpg",
//     videos: [
//       "/videos/sheffield-1.mp4",
//       "/videos/sheffield-2.mp4",
//       "/videos/sheffield-3.mp4",
//     ],
//     description:
//       "A full acquisition and refurbishment of a three-bedroom semi-detached property in Sheffield. The project involved a complete interior transformation — modernising the layout, upgrading all fixtures, and delivering a market-ready home with strong rental yield and resale value.",
//   },
//   {
//     id: "grays",
//     title: "142 Parsonage Road",
//     location: "Grays, RM20 4AQ",
//     type: "1-Bedroom Apartment",
//     status: "Completed",
//     image: "/images/grays-1.jpg",
//     videos: [
//       "/videos/grays-1.mp4",
//       "/videos/grays-2.mp4",
//       "/videos/grays-3.mp4",
//       "/videos/grays-4.mp4",
//       "/videos/grays-5.mp4",
//       "/videos/grays-6.mp4",
//     ],
//     description:
//       "Acquisition and full refurbishment of a one-bedroom apartment in Grays, Essex. The project focused on maximising the space, improving energy efficiency, and delivering a high-quality finish that significantly increased the property's market value and rental appeal.",
//   },
// ];
// // ─────────────────────────────────────────────

// function PlayIcon() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M8 5v14l11-7z" />
//     </svg>
//   );
// }

// function CloseIcon() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
//     </svg>
//   );
// }

// function ChevronIcon({ direction }) {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//       <path d={direction === "left" ? "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" : "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"} />
//     </svg>
//   );
// }

// function VideoLightbox({ project, startIndex, onClose }) {
//   const [currentIndex, setCurrentIndex] = useState(startIndex);

//   const prev = () => setCurrentIndex((i) => (i === 0 ? project.videos.length - 1 : i - 1));
//   const next = () => setCurrentIndex((i) => (i === project.videos.length - 1 ? 0 : i + 1));

//   return (
//     <div
//       onClick={onClose}
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 100,
//         background: "rgba(0,0,0,0.95)",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "1rem",
//       }}
//     >
//       <button
//         onClick={onClose}
//         style={{
//           position: "absolute",
//           top: "1.25rem",
//           right: "1.25rem",
//           background: "rgba(201,169,110,0.15)",
//           border: "1px solid rgba(201,169,110,0.3)",
//           color: "#C9A96E",
//           cursor: "pointer",
//           width: "40px",
//           height: "40px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <CloseIcon />
//       </button>

//       <div
//         onClick={(e) => e.stopPropagation()}
//         style={{ width: "100%", maxWidth: "900px", position: "relative" }}
//       >
//         <video
//           key={currentIndex}
//           controls
//           autoPlay
//           playsInline
//           style={{ width: "100%", maxHeight: "70vh", background: "#000", display: "block" }}
//         >
//           <source src={project.videos[currentIndex]} type="video/mp4" />
//         </video>

//         {project.videos.length > 1 && (
//           <>
//             <button
//               onClick={prev}
//               style={{
//                 position: "absolute", left: "-50px", top: "50%", transform: "translateY(-50%)",
//                 background: "rgba(201,169,110,0.15)", border: "1px solid rgba(201,169,110,0.3)",
//                 color: "#C9A96E", cursor: "pointer", width: "40px", height: "40px",
//                 display: "flex", alignItems: "center", justifyContent: "center",
//               }}
//               className="lightbox-arrow"
//             >
//               <ChevronIcon direction="left" />
//             </button>
//             <button
//               onClick={next}
//               style={{
//                 position: "absolute", right: "-50px", top: "50%", transform: "translateY(-50%)",
//                 background: "rgba(201,169,110,0.15)", border: "1px solid rgba(201,169,110,0.3)",
//                 color: "#C9A96E", cursor: "pointer", width: "40px", height: "40px",
//                 display: "flex", alignItems: "center", justifyContent: "center",
//               }}
//               className="lightbox-arrow"
//             >
//               <ChevronIcon direction="right" />
//             </button>
//           </>
//         )}

//         <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1rem", padding: "0 0.25rem" }}>
//           <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#7A7060", letterSpacing: "0.1em" }}>
//             {currentIndex + 1} / {project.videos.length}
//           </span>
//           <div style={{ display: "flex", gap: "0.4rem" }}>
//             {project.videos.map((_, i) => (
//               <div
//                 key={i}
//                 onClick={() => setCurrentIndex(i)}
//                 style={{
//                   width: i === currentIndex ? "20px" : "6px", height: "6px",
//                   background: i === currentIndex ? "#C9A96E" : "rgba(201,169,110,0.25)",
//                   cursor: "pointer", transition: "width 0.3s ease, background 0.3s ease",
//                 }}
//               />
//             ))}
//           </div>
//           <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", fontStyle: "italic", color: "#C9A96E" }}>
//             {project.title}
//           </span>
//         </div>
//       </div>

//       {project.videos.length > 1 && (
//         <div style={{ display: "none", gap: "1rem", marginTop: "1.5rem" }} className="mobile-lightbox-arrows">
//           <button
//             onClick={(e) => { e.stopPropagation(); prev(); }}
//             style={{ background: "rgba(201,169,110,0.15)", border: "1px solid rgba(201,169,110,0.3)", color: "#C9A96E", cursor: "pointer", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}
//           >
//             <ChevronIcon direction="left" />
//           </button>
//           <button
//             onClick={(e) => { e.stopPropagation(); next(); }}
//             style={{ background: "rgba(201,169,110,0.15)", border: "1px solid rgba(201,169,110,0.3)", color: "#C9A96E", cursor: "pointer", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}
//           >
//             <ChevronIcon direction="right" />
//           </button>
//         </div>
//       )}

//       <style>{`
//         @media (max-width: 768px) {
//           .lightbox-arrow { display: none !important; }
//           .mobile-lightbox-arrows { display: flex !important; }
//         }
//       `}</style>
//     </div>
//   );
// }

// function ProjectCard({ project }) {
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [lightboxIndex, setLightboxIndex] = useState(0);

//   const openLightbox = (index = 0) => {
//     setLightboxIndex(index);
//     setLightboxOpen(true);
//   };

//   return (
//     <>
//       <div style={{ background: "#0D0D0D", overflow: "hidden", border: "1px solid rgba(201,169,110,0.1)" }}>
//         {/* Cover image */}
//         <div
//           style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", cursor: "pointer" }}
//           onClick={() => openLightbox(0)}
//         >
//           <img
//             src={project.image}
//             alt={project.title}
//             style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
//             onMouseEnter={(e) => (e.target.style.transform = "scale(1.03)")}
//             onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
//           />
//           <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 50%)", pointerEvents: "none" }} />
//           <div style={{
//             position: "absolute", top: "1rem", left: "1rem",
//             background: project.status === "Completed" ? "rgba(201,169,110,0.9)" : "rgba(30,58,95,0.9)",
//             color: project.status === "Completed" ? "#0D0D0D" : "#E8E2D9",
//             fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", fontWeight: 600,
//             letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.35rem 0.75rem",
//           }}>
//             {project.status}
//           </div>
//           <div style={{
//             position: "absolute", bottom: "1rem", right: "1rem",
//             background: "#C9A96E", color: "#0D0D0D", width: "44px", height: "44px",
//             display: "flex", alignItems: "center", justifyContent: "center",
//           }}>
//             <PlayIcon />
//           </div>
//         </div>

//         {/* Card body */}
//         <div style={{ padding: "1.75rem" }}>
//           <div style={{ marginBottom: "1.25rem" }}>
//             <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 600, color: "#E8E2D9", lineHeight: 1.2, marginBottom: "0.3rem" }}>
//               {project.title}
//             </h3>
//             <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#C9A96E", letterSpacing: "0.08em" }}>
//               {project.location}
//             </p>
//           </div>

//           <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "#7A7060", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
//             {project.type}
//           </p>

//           <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "#E8E2D9", lineHeight: 1.85, opacity: 0.65, marginBottom: "1.75rem" }}>
//             {project.description}
//           </p>

//           {/* Video thumbnails */}
//           <div>
//             <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "#7A7060", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
//               {project.videos.length} Video{project.videos.length > 1 ? "s" : ""} — tap to watch
//             </p>
//             <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
//               {project.videos.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => openLightbox(i)}
//                   style={{
//                     width: "44px", height: "44px",
//                     background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.2)",
//                     color: "#C9A96E", cursor: "pointer", display: "flex", alignItems: "center",
//                     justifyContent: "center", flexDirection: "column", gap: "2px",
//                     transition: "background 0.2s ease, border-color 0.2s ease",
//                   }}
//                   onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,169,110,0.18)"; e.currentTarget.style.borderColor = "#C9A96E"; }}
//                   onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(201,169,110,0.08)"; e.currentTarget.style.borderColor = "rgba(201,169,110,0.2)"; }}
//                 >
//                   <PlayIcon />
//                   <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.55rem", opacity: 0.7 }}>{i + 1}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {lightboxOpen && (
//         <VideoLightbox project={project} startIndex={lightboxIndex} onClose={() => setLightboxOpen(false)} />
//       )}
//     </>
//   );
// }

// export default function Projects() {
//   return (
//     <section id="projects" style={{ background: "#141414", padding: "8rem 2rem", position: "relative", overflow: "hidden" }}>
//       <div style={{ position: "absolute", top: 0, left: 0, width: "40%", height: "1px", background: "linear-gradient(to right, #C9A96E, transparent)" }} />

//       <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
//         {/* Header */}
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "end", marginBottom: "4rem" }} className="projects-header-grid">
//           <div>
//             <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
//               <div style={{ width: "32px", height: "1px", background: "#C9A96E" }} />
//               <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 500, color: "#C9A96E", letterSpacing: "0.2em", textTransform: "uppercase" }}>
//                 Our Work
//               </span>
//             </div>
//             <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 600, color: "#E8E2D9", lineHeight: 1.1, marginBottom: "0.4rem", letterSpacing: "-0.01em" }}>
//               Projects That
//             </h2>
//             <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 300, fontStyle: "italic", color: "#C9A96E", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
//               Speak for Themselves
//             </h2>
//           </div>
//           <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.9rem, 1.5vw, 1rem)", fontWeight: 300, color: "#E8E2D9", lineHeight: 1.9, opacity: 0.65, paddingBottom: "0.5rem" }}>
//             Every project we take on is an opportunity to add real value — to the property, to the neighbourhood, and to our investors. Here's a look at what we've delivered.
//           </p>
//         </div>

//         {/* Cards */}
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }} className="projects-grid">
//           {projects.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @media (max-width: 768px) {
//           .projects-header-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
//           .projects-grid { grid-template-columns: 1fr !important; }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
// ─────────────────────────────────────────────
// TO ADD A NEW PROJECT: just add a new object
// to this array following the same structure.
// ─────────────────────────────────────────────
const projects = [
  {
    id: "sheffield",
    title: "183 Queen Mary Road",
    location: "Sheffield, S2 1HX",
    type: "3-Bedroom Semi-Detached House",
    status: "Completed",
    image:
      "https://res.cloudinary.com/dci43ezfp/image/upload/v1781350376/sheffield-1_dui6mr.jpg",
    videos: [
      "https://res.cloudinary.com/dci43ezfp/video/upload/v1781350312/sheffield-1_gxsivl.mp4",
      "https://res.cloudinary.com/dci43ezfp/video/upload/v1781350222/sheffield-2_cx2hws.mp4",
      "https://res.cloudinary.com/dci43ezfp/video/upload/v1781350195/sheffield-3_nju3km.mp4",
    ],
    description:
      "A full acquisition and refurbishment of a three-bedroom semi-detached property in Sheffield. The project involved a complete interior transformation — modernising the layout, upgrading all fixtures, and delivering a market-ready home with strong rental yield and resale value.",
  },
  {
    id: "grays",
    title: "142 Parsonage Road",
    location: "Grays, RM20 4AQ",
    type: "1-Bedroom Apartment",
    status: "Completed",
    image:
      "https://res.cloudinary.com/dci43ezfp/image/upload/v1781350362/grays-1_p7wurh.jpg",
    videos: [
      "https://res.cloudinary.com/dci43ezfp/video/upload/v1781350153/grays-1_jvhruf.mp4",
      "https://res.cloudinary.com/dci43ezfp/video/upload/v1781350128/grays-2_citcgo.mp4",
      "https://res.cloudinary.com/dci43ezfp/video/upload/v1781350153/grays-3_viqpal.mp4",
      "https://res.cloudinary.com/dci43ezfp/video/upload/v1781350152/grays-4_t1bf7b.mp4",
      "https://res.cloudinary.com/dci43ezfp/video/upload/v1781350132/grays-5_nxlsxx.mp4",
      "https://res.cloudinary.com/dci43ezfp/video/upload/v1781350172/grays-6_trdupr.mp4",
    ],
    description:
      "Acquisition and full refurbishment of a one-bedroom apartment in Grays, Essex. The project focused on maximising the space, improving energy efficiency, and delivering a high-quality finish that significantly increased the property's market value and rental appeal.",
  },
];
// ─────────────────────────────────────────────

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
}

function ChevronIcon({ direction }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path
        d={
          direction === "left"
            ? "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
            : "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
        }
      />
    </svg>
  );
}

function VideoLightbox({ project, startIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? project.videos.length - 1 : i - 1));
  const next = () =>
    setCurrentIndex((i) => (i === project.videos.length - 1 ? 0 : i + 1));

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(0,0,0,0.95)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "1.25rem",
          right: "1.25rem",
          background: "rgba(201,169,110,0.15)",
          border: "1px solid rgba(201,169,110,0.3)",
          color: "#C9A96E",
          cursor: "pointer",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CloseIcon />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: "100%", maxWidth: "900px", position: "relative" }}
      >
        <video
          key={currentIndex}
          controls
          autoPlay
          playsInline
          style={{
            width: "100%",
            maxHeight: "70vh",
            background: "#000",
            display: "block",
          }}
        >
          <source src={project.videos[currentIndex]} type="video/mp4" />
        </video>

        {project.videos.length > 1 && (
          <>
            <button
              onClick={prev}
              style={{
                position: "absolute",
                left: "-50px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(201,169,110,0.15)",
                border: "1px solid rgba(201,169,110,0.3)",
                color: "#C9A96E",
                cursor: "pointer",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="lightbox-arrow"
            >
              <ChevronIcon direction="left" />
            </button>
            <button
              onClick={next}
              style={{
                position: "absolute",
                right: "-50px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(201,169,110,0.15)",
                border: "1px solid rgba(201,169,110,0.3)",
                color: "#C9A96E",
                cursor: "pointer",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="lightbox-arrow"
            >
              <ChevronIcon direction="right" />
            </button>
          </>
        )}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "1rem",
            padding: "0 0.25rem",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              color: "#7A7060",
              letterSpacing: "0.1em",
            }}
          >
            {currentIndex + 1} / {project.videos.length}
          </span>
          <div style={{ display: "flex", gap: "0.4rem" }}>
            {project.videos.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrentIndex(i)}
                style={{
                  width: i === currentIndex ? "20px" : "6px",
                  height: "6px",
                  background:
                    i === currentIndex ? "#C9A96E" : "rgba(201,169,110,0.25)",
                  cursor: "pointer",
                  transition: "width 0.3s ease, background 0.3s ease",
                }}
              />
            ))}
          </div>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.85rem",
              fontStyle: "italic",
              color: "#C9A96E",
            }}
          >
            {project.title}
          </span>
        </div>
      </div>

      {project.videos.length > 1 && (
        <div
          style={{ display: "none", gap: "1rem", marginTop: "1.5rem" }}
          className="mobile-lightbox-arrows"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            style={{
              background: "rgba(201,169,110,0.15)",
              border: "1px solid rgba(201,169,110,0.3)",
              color: "#C9A96E",
              cursor: "pointer",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            style={{
              background: "rgba(201,169,110,0.15)",
              border: "1px solid rgba(201,169,110,0.3)",
              color: "#C9A96E",
              cursor: "pointer",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .lightbox-arrow { display: none !important; }
          .mobile-lightbox-arrows { display: flex !important; }
        }
      `}</style>
    </div>
  );
}

function ProjectCard({ project }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index = 0) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div
        style={{
          background: "#0D0D0D",
          overflow: "hidden",
          border: "1px solid rgba(201,169,110,0.1)",
        }}
      >
        {/* Cover image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/9",
            overflow: "hidden",
            cursor: "pointer",
          }}
          onClick={() => openLightbox(0)}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.5s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 50%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              background:
                project.status === "Completed"
                  ? "rgba(201,169,110,0.9)"
                  : "rgba(30,58,95,0.9)",
              color: project.status === "Completed" ? "#0D0D0D" : "#E8E2D9",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "0.35rem 0.75rem",
            }}
          >
            {project.status}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "1rem",
              right: "1rem",
              background: "#C9A96E",
              color: "#0D0D0D",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PlayIcon />
          </div>
        </div>

        {/* Card body */}
        <div style={{ padding: "1.75rem" }}>
          <div style={{ marginBottom: "1.25rem" }}>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "#E8E2D9",
                lineHeight: 1.2,
                marginBottom: "0.3rem",
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                color: "#C9A96E",
                letterSpacing: "0.08em",
              }}
            >
              {project.location}
            </p>
          </div>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.72rem",
              color: "#7A7060",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            {project.type}
          </p>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 300,
              color: "#E8E2D9",
              lineHeight: 1.85,
              opacity: 0.65,
              marginBottom: "1.75rem",
            }}
          >
            {project.description}
          </p>

          {/* Video thumbnails */}
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.65rem",
                color: "#7A7060",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              {project.videos.length} Video
              {project.videos.length > 1 ? "s" : ""} — tap to watch
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {project.videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => openLightbox(i)}
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "rgba(201,169,110,0.08)",
                    border: "1px solid rgba(201,169,110,0.2)",
                    color: "#C9A96E",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "2px",
                    transition: "background 0.2s ease, border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(201,169,110,0.18)";
                    e.currentTarget.style.borderColor = "#C9A96E";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(201,169,110,0.08)";
                    e.currentTarget.style.borderColor = "rgba(201,169,110,0.2)";
                  }}
                >
                  <PlayIcon />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.55rem",
                      opacity: 0.7,
                    }}
                  >
                    {i + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <VideoLightbox
          project={project}
          startIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: "#141414",
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "end",
            marginBottom: "4rem",
          }}
          className="projects-header-grid"
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
              <div
                style={{ width: "32px", height: "1px", background: "#C9A96E" }}
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
                Our Work
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
              Projects That
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
              Speak for Themselves
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
            Every project we take on is an opportunity to add real value — to
            the property, to the neighbourhood, and to our investors.
            Here&apos;s a look at what we&apos;ve delivered.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",
          }}
          className="projects-grid"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-header-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
