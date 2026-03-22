"use client";

import { motion } from "framer-motion";

const PANEL = {
  border: "1px solid rgba(96,165,250,0.28)",
  borderRadius: 12,
  background: "rgba(30,58,138,0.07)",
} as const;

const DIVIDER = "1px solid rgba(255,255,255,0.06)";

const GRAD = "linear-gradient(90deg, #60a5fa 0%, #22d3ee 100%)";

const skillGroups = [
  { key: "Backend",   skills: ["Python", "Django", "REST API", "PostgreSQL", "Celery", "Redis"] },
  { key: "AI / Data", skills: ["Data Pipeline", "AI Integration", "BIM Data Processing", "IFC Models", "ETL", "LLM APIs"] },
  { key: "Frontend",  skills: ["React", "Next.js", "TypeScript", "Three.js", "Tailwind CSS", "Framer Motion"] },
  { key: "Tools",     skills: ["Git", "Docker", "Vercel", "Linux", "Haskell", "Agile / Scrum"] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "96px 0", background: "rgba(255,255,255,0.012)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
          <p style={{ fontFamily: "monospace", fontSize: 12, letterSpacing: "0.25em", color: "#60a5fa", marginBottom: 12 }}>// SKILLS</p>
          <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 800, color: "#f9fafb", lineHeight: 1.15 }}>
            Tech{" "}
            <span style={{ background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>
              Stack
            </span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ position: "relative" }}>
          {/* Blueprint label */}
          <div style={{
            position: "absolute", top: -11, left: 24,
            background: "#07070f", padding: "0 10px",
            fontFamily: "monospace", fontSize: 11, letterSpacing: "0.2em",
            color: "#60a5fa", zIndex: 1,
          }}>
            TECH STACK · TK-002
          </div>

          <div style={PANEL}>
            {skillGroups.map(({ key, skills }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                style={{
                  display: "flex", alignItems: "baseline", gap: 24,
                  padding: "18px 32px",
                  borderBottom: i < skillGroups.length - 1 ? DIVIDER : "none",
                }}
              >
                <span style={{ fontFamily: "monospace", fontSize: 15, color: "#9ca3af", width: 110, flexShrink: 0, letterSpacing: "0.05em" }}>{key}</span>
                <span style={{ fontFamily: "monospace", fontSize: 16, color: "#e5e7eb" }}>{skills.join(" · ")}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
