"use client";

import { motion } from "framer-motion";

const PANEL = {
  border: "1px solid rgba(96,165,250,0.28)",
  borderRadius: 12,
  background: "rgba(30,58,138,0.07)",
} as const;

const DIVIDER = "1px solid rgba(255,255,255,0.07)";
const GRAD = "linear-gradient(90deg, #60a5fa 0%, #22d3ee 100%)";

const projects = [
  {
    tag: "WORK · AI DATA",
    title: "AI-Powered BIM Pipeline",
    company: "Tektome",
    stack: ["Python", "Django", "AI", "PostgreSQL"],
    description: "AI-driven pipeline that parses, transforms, and enriches BIM model data at scale.",
  },
  {
    tag: "WORK · BACKEND",
    title: "BIM Data Processing System",
    company: "Tektome",
    stack: ["Python", "Django", "REST API", "PostgreSQL"],
    description: "Backend system processing BIM exports with background tasks and structured data APIs.",
  },
  {
    tag: "PORTFOLIO",
    title: "This Portfolio",
    company: "Personal",
    stack: ["Next.js", "Three.js", "Tailwind", "Framer Motion"],
    description: "Portfolio with live 五重塔 pagoda scene built in React Three Fiber.",
    link: "#",
  },
  {
    tag: "UNIVERSITY · FRP",
    title: "Tetris — Functional Reactive",
    company: "Monash University",
    stack: ["TypeScript", "RxJS", "FRP"],
    description: "Tetris via Observable streams for animation, input, and game state.",
    link: "https://github.com/takumi0107/tetris",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
          <p style={{ fontFamily: "monospace", fontSize: 12, letterSpacing: "0.25em", color: "#60a5fa", marginBottom: 12 }}>// PROJECTS</p>
          <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 800, color: "#f9fafb", lineHeight: 1.15 }}>
            Work &amp;{" "}
            <span style={{ background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>
              Projects
            </span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: -11, left: 24, background: "#07070f", padding: "0 10px", fontFamily: "monospace", fontSize: 11, letterSpacing: "0.2em", color: "#60a5fa", zIndex: 1 }}>
            PROJECTS · TK-003
          </div>

          <div style={PANEL}>
            {projects.map(({ tag, title, company, stack, description, link }, i) => {
              const isLink = Boolean(link);
              const inner = (
                <>
                  <span style={{ fontFamily: "monospace", fontSize: 13, color: "#9ca3af", width: 150, flexShrink: 0, letterSpacing: "0.1em" }}>{tag}</span>
                  <span style={{ fontFamily: "monospace", fontSize: 17, color: "#f3f4f6", fontWeight: 600, width: 260, flexShrink: 0 }}>{title}</span>
                  <span style={{ fontFamily: "monospace", fontSize: 15, color: "#c9d1dc", flex: 1 }}>{description}</span>
                  <span style={{ fontFamily: "monospace", fontSize: 14, color: "#6b7280", width: 240, flexShrink: 0, textAlign: "right" }}>{stack.join(" · ")}</span>
                  {isLink && <span style={{ fontFamily: "monospace", fontSize: 13, color: "#6b7280", flexShrink: 0 }}>↗</span>}
                </>
              );

              return (
                <motion.div key={title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  style={{ borderBottom: i < projects.length - 1 ? DIVIDER : "none" }}>
                  {isLink ? (
                    <a href={link} target={link === "#" ? undefined : "_blank"} rel={link === "#" ? undefined : "noopener noreferrer"}
                      style={{ display: "flex", alignItems: "baseline", gap: 20, padding: "20px 32px", flexWrap: "wrap", textDecoration: "none", transition: "background 0.15s" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                      {inner}
                    </a>
                  ) : (
                    <div style={{ display: "flex", alignItems: "baseline", gap: 20, padding: "20px 32px", flexWrap: "wrap" }}>
                      {inner}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
