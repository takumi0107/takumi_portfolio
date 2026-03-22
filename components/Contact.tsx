"use client";

import { motion } from "framer-motion";

const PANEL = {
  border: "1px solid rgba(96,165,250,0.28)",
  borderRadius: 12,
  background: "rgba(30,58,138,0.07)",
} as const;

const DIVIDER = "1px solid rgba(255,255,255,0.06)";

const GRAD = "linear-gradient(90deg, #60a5fa 0%, #22d3ee 100%)";

const rows = [
  { key: "EMAIL",    val: "t7kotobuki@gmail.com",                       href: "mailto:t7kotobuki@gmail.com" },
  { key: "LINKEDIN", val: "linkedin.com/in/takumi-kotobuki-683a58282",   href: "https://www.linkedin.com/in/takumi-kotobuki-683a58282/", external: true },
  { key: "GITHUB",   val: "github.com/takumi0107",                       href: "https://github.com/takumi0107", external: true },
  { key: "LOCATION", val: "Anywhere in France" },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "96px 0", background: "rgba(255,255,255,0.012)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
          <p style={{ fontFamily: "monospace", fontSize: 12, letterSpacing: "0.25em", color: "#60a5fa", marginBottom: 12 }}>// CONTACT</p>
          <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 800, color: "#f9fafb", lineHeight: 1.15 }}>
            Let's{" "}
            <span style={{ background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>
              work together
            </span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
          style={{ position: "relative", maxWidth: 720 }}>
          <div style={{
            position: "absolute", top: -11, left: 24,
            background: "#07070f", padding: "0 10px",
            fontFamily: "monospace", fontSize: 11, letterSpacing: "0.2em",
            color: "#60a5fa", zIndex: 1,
          }}>
            CONTACT · TK-004
          </div>

          <div style={PANEL}>
            {rows.map(({ key, val, href, external }, i) => (
              <div key={key} style={{
                display: "flex", alignItems: "baseline", gap: 24,
                padding: "14px 32px",
                borderBottom: i < rows.length - 1 ? DIVIDER : "none",
              }}>
                <span style={{ fontFamily: "monospace", fontSize: 15, color: "#9ca3af", width: 110, flexShrink: 0, letterSpacing: "0.05em" }}>{key}</span>
                {href ? (
                  <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
                    style={{ fontFamily: "monospace", fontSize: 16, color: "#60a5fa", textDecoration: "none" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#93c5fd"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#60a5fa"; }}>
                    {val}
                  </a>
                ) : (
                  <span style={{ fontFamily: "monospace", fontSize: 16, color: "#e5e7eb" }}>{val}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
