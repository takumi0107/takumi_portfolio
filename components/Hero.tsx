"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const BIMScene = dynamic(() => import("./BIMScene"), { ssr: false });

const GRAD = "linear-gradient(90deg, #60a5fa 0%, #22d3ee 100%)";

export default function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>

      {/* Blueprint grid */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(96,165,250,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,0.6) 1px,transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      {/* Glow */}
      <div style={{ position: "absolute", top: "25%", left: "15%", width: 400, height: 400, borderRadius: "50%", background: "rgba(37,99,235,0.08)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "20%", right: "20%", width: 300, height: 300, borderRadius: "50%", background: "rgba(124,58,237,0.08)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1100, margin: "0 auto", padding: "80px 48px 64px", display: "flex", flexDirection: "row", alignItems: "center", gap: 80, flexWrap: "wrap" }}>

        {/* ── Left: text ── */}
        <motion.div
          style={{ flex: "1 1 380px", minWidth: 0 }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: "monospace", fontSize: 11, letterSpacing: "0.18em",
            color: "#22d3ee", border: "1px solid rgba(34,211,238,0.25)",
            background: "rgba(34,211,238,0.06)", padding: "6px 16px", borderRadius: 99,
            marginBottom: 28,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", animation: "pulse 2s infinite" }} />
            AVAILABLE · FRANCE
          </div>

          {/* Name */}
          <h1 style={{ fontWeight: 800, lineHeight: 1, marginBottom: 16, letterSpacing: "-0.02em" }}>
            <span style={{ display: "block", fontSize: "clamp(52px,7vw,88px)", color: "#f9fafb" }}>Takumi</span>
            <span style={{
              display: "block", fontSize: "clamp(52px,7vw,88px)",
              background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text",
              WebkitTextFillColor: "transparent", color: "transparent",
            }}>
              Kotobuki
            </span>
          </h1>

          <p style={{ fontFamily: "monospace", fontSize: 13, letterSpacing: "0.22em", color: "#6b7280", marginBottom: 10, textTransform: "uppercase" }}>
            Backend Engineer — BIM &amp; AI Data
          </p>

          <p style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.75, maxWidth: 400, marginBottom: 40 }}>
            Building AI-powered BIM data pipelines with Python &amp; Django.<br />
            Open to <span style={{ color: "#9ca3af" }}>Paris · Lyon · Sophia Antipolis · Montpellier</span>.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#projects" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 28px", borderRadius: 8,
              background: "#2563eb", color: "#fff",
              border: "1px solid #3b82f6",
              fontSize: 14, fontWeight: 600, letterSpacing: "0.04em",
              textDecoration: "none",
              boxShadow: "0 0 28px rgba(37,99,235,0.4)",
              transition: "all 0.2s",
            }}>
              View Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center",
              padding: "12px 28px", borderRadius: 8,
              background: "transparent", color: "#9ca3af",
              border: "1px solid rgba(255,255,255,0.12)",
              fontSize: 14, fontWeight: 500, letterSpacing: "0.04em",
              textDecoration: "none",
              transition: "all 0.2s",
            }}>
              Contact
            </a>
          </div>
        </motion.div>

        {/* ── Right: 3D viewer ── */}
        <motion.div
          style={{ flex: "1 1 340px", minWidth: 0 }}
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div style={{ position: "relative", width: "100%", height: 500 }}>
            {/* Label */}
            <div style={{ position: "absolute", top: 14, left: 14, zIndex: 2, display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", flexShrink: 0 }} />
              <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.22em", color: "rgba(34,211,238,0.65)" }}>五重塔 · INTERACTIVE</span>
            </div>

            {/* Corner brackets */}
            {[
              { top: 0, left: 0, borderTop: "1px solid rgba(96,165,250,0.45)", borderLeft: "1px solid rgba(96,165,250,0.45)" },
              { top: 0, right: 0, borderTop: "1px solid rgba(96,165,250,0.45)", borderRight: "1px solid rgba(96,165,250,0.45)" },
              { bottom: 0, left: 0, borderBottom: "1px solid rgba(96,165,250,0.45)", borderLeft: "1px solid rgba(96,165,250,0.45)" },
              { bottom: 0, right: 0, borderBottom: "1px solid rgba(96,165,250,0.45)", borderRight: "1px solid rgba(96,165,250,0.45)" },
            ].map((s, i) => (
              <div key={i} style={{ position: "absolute", width: 20, height: 20, ...s }} />
            ))}

            {/* Stats */}
            <div style={{ position: "absolute", bottom: 18, left: 14, zIndex: 2, display: "flex", flexDirection: "column", gap: 5 }}>
              {[{ l: "塔", v: "五重塔" }, { l: "FLOORS", v: "5" }, { l: "ERA", v: "NARA" }].map(({ l, v }) => (
                <div key={l} style={{ display: "flex", gap: 12, fontFamily: "monospace", fontSize: 10 }}>
                  <span style={{ color: "#374151" }}>{l}</span>
                  <span style={{ color: "rgba(34,211,238,0.85)" }}>{v}</span>
                </div>
              ))}
            </div>

            <BIMScene />
          </div>
        </motion.div>

      </div>

      {/* Scroll */}
      <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <span style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: "0.3em", color: "#374151" }}>SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
          style={{ width: 1, height: 28, background: "linear-gradient(to bottom, #374151, transparent)" }} />
      </div>
    </section>
  );
}
