"use client";

import { motion } from "framer-motion";

const PANEL = {
  border: "1px solid rgba(96,165,250,0.28)",
  borderRadius: 12,
  background: "rgba(30,58,138,0.07)",
} as const;

const DIVIDER = "1px solid rgba(255,255,255,0.06)";

const GRAD = "linear-gradient(90deg, #60a5fa 0%, #22d3ee 100%)";

const profile = [
  { key: "NAME",        val: "Takumi Kotobuki" },
  { key: "AGE",         val: "23" },
  { key: "NATIONALITY", val: "Japanese" },
  { key: "LOCATION",    val: "Tokyo → France (Paris · Lyon · Sophia Antipolis · Montpellier)" },
  { key: "ROLE",        val: "Backend Engineer — BIM & AI Data" },
  { key: "VISA",        val: "Carte Passeport Talent (eligible)" },
  { key: "EDUCATION",   val: "B.Sc. Computer Science, Monash University (1st Class Honours)" },
  { key: "LANGUAGE",    val: "Japanese (native) · English (fluent) · French (learning)" },
  { key: "EXPERIENCE",  val: "5+ years professional" },
];

function PanelLabel({ text }: { text: string }) {
  return (
    <div style={{
      position: "absolute", top: -11, left: 24,
      background: "#07070f", padding: "0 10px",
      fontFamily: "monospace", fontSize: 11, letterSpacing: "0.2em",
      color: "#60a5fa", zIndex: 1,
    }}>
      {text}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>

        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
          <p style={{ fontFamily: "monospace", fontSize: 12, letterSpacing: "0.25em", color: "#60a5fa", marginBottom: 12 }}>// ABOUT</p>
          <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 800, color: "#f9fafb", lineHeight: 1.15 }}>
            Building where{" "}
            <span style={{ background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>
              architecture meets code
            </span>
          </h2>
        </motion.div>

        {/* Profile panel */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
          style={{ position: "relative", marginBottom: 48 }}>
          <PanelLabel text="PROFILE · TK-001" />
          <div style={PANEL}>
            {profile.map(({ key, val }, i) => (
              <div key={key} style={{
                display: "flex", alignItems: "baseline", gap: 24,
                padding: "14px 32px",
                borderBottom: i < profile.length - 1 ? DIVIDER : "none",
              }}>
                <span style={{ fontFamily: "monospace", fontSize: 15, color: "#9ca3af", width: 110, flexShrink: 0, letterSpacing: "0.05em" }}>{key}</span>
                <span style={{ fontFamily: "monospace", fontSize: 16, color: "#e5e7eb" }}>{val}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Prose */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }}
          style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {[
            <>I'm a backend software engineer specializing in BIM data processing and AI integration for the construction industry. At <strong style={{ color: "#e5e7eb", fontWeight: 500 }}>Tektome</strong>, I build automated data pipelines that parse, transform, and enrich BIM model data using AI — making building information actionable.</>,
            <>My stack centers around <span style={{ color: "#60a5fa" }}>Python, Django, PostgreSQL, and REST APIs</span>. I design background task systems, data processing workflows, and integrate AI to automate BIM data manipulation at scale.</>,
            <>Actively seeking a backend / AI-data engineering role in <span style={{ color: "#60a5fa" }}>France</span>. Eligible for the Carte Passeport Talent.</>,
          ].map((text, i) => (
            <p key={i} style={{ fontSize: 17, color: "#b0b7c3", lineHeight: 1.85 }}>{text}</p>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
