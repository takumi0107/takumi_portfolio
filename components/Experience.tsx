"use client";

import { motion } from "framer-motion";

const PANEL = {
  border: "1px solid rgba(96,165,250,0.28)",
  borderRadius: 12,
  background: "rgba(30,58,138,0.07)",
} as const;

const DIVIDER = "1px solid rgba(255,255,255,0.06)";
const GRAD = "linear-gradient(90deg, #60a5fa 0%, #22d3ee 100%)";

const experiences = [
  {
    company: "Tektome Ltd",
    role: "Backend Engineer — BIM & AI Data",
    period: "Nov 2024 – Present",
    location: "Tokyo, Japan",
    bullets: [
      "Build AI-driven pipelines that parse, transform, and enrich BIM model data at scale.",
      "Design background task systems and REST APIs for structured BIM data processing.",
      "Integrate LLM APIs to automate data manipulation and validation workflows.",
      "Develop an in-house 3D web viewer for architectural model visualization.",
    ],
  },
  {
    company: "Valleyin Co., Ltd.",
    role: "AI Developer / Team Leader / Software Developer",
    period: "Jan 2020 – Nov 2024",
    location: "Tokyo, Japan",
    bullets: [
      "Built an AI scraping tool using OCR and fine-tuning to extract product information automatically.",
      "Deployed and operated the solution on Google Cloud Platform for daily production runs.",
      "Led a scraping team — managed task allocation, quality reviews, and delivery.",
      "Developed a web scraping automation system with Ruby on Rails and SQL storage.",
      "Built a communication and event app for Japanese executives using React Native.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
          <p style={{ fontFamily: "monospace", fontSize: 12, letterSpacing: "0.25em", color: "#60a5fa", marginBottom: 12 }}>// EXPERIENCE</p>
          <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 800, color: "#f9fafb", lineHeight: 1.15 }}>
            Work{" "}
            <span style={{ background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>
              History
            </span>
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {experiences.map(({ company, role, period, location, bullets }, i) => (
            <motion.div key={company}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ position: "relative" }}>
              <div style={{
                position: "absolute", top: -11, left: 24,
                background: "#07070f", padding: "0 10px",
                fontFamily: "monospace", fontSize: 11, letterSpacing: "0.2em",
                color: "#60a5fa", zIndex: 1,
              }}>
                {`EXP-00${i + 1}`}
              </div>

              <div style={PANEL}>
                {/* Header row */}
                <div style={{ display: "flex", alignItems: "baseline", gap: 24, padding: "18px 32px", borderBottom: DIVIDER, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "monospace", fontSize: 17, color: "#f3f4f6", fontWeight: 700, flexShrink: 0 }}>{company}</span>
                  <span style={{ fontFamily: "monospace", fontSize: 15, color: "#60a5fa", flex: 1 }}>{role}</span>
                  <span style={{ fontFamily: "monospace", fontSize: 13, color: "#6b7280", flexShrink: 0 }}>{period}</span>
                  <span style={{ fontFamily: "monospace", fontSize: 13, color: "#4b5563", flexShrink: 0 }}>{location}</span>
                </div>

                {/* Bullets */}
                <div style={{ padding: "18px 32px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {bullets.map((b, j) => (
                    <div key={j} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <span style={{ fontFamily: "monospace", fontSize: 13, color: "#374151", flexShrink: 0, marginTop: 3 }}>→</span>
                      <span style={{ fontSize: 15, color: "#c9d1dc", lineHeight: 1.7 }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
