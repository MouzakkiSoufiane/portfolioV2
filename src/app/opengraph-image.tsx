import { ImageResponse } from "next/og";

export const alt =
  "Soufiane Mouzakki — Precision in every interaction. Frontend Developer, Casablanca.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 80,
        background: "#0c0d12",
        color: "#f4f0e8",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", fontSize: 32 }}>
        SM<span style={{ color: "#a78bfa" }}>.</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          lineHeight: 1.1,
        }}
      >
        <span>Precision in every</span>
        <span style={{ color: "#a78bfa" }}>interaction.</span>
      </div>
      <div style={{ display: "flex", color: "#a8a5b5", fontSize: 24 }}>
        Soufiane Mouzakki · Frontend Developer · Casablanca, Morocco
      </div>
    </div>,
    size,
  );
}
