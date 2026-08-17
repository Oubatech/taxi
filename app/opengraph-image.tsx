import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#161616",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 140, display: "flex" }}>🚕</div>
        <div style={{ fontSize: 64, fontWeight: 800, marginTop: 20, display: "flex" }}>
          {siteConfig.businessName}
        </div>
        <div style={{ fontSize: 34, marginTop: 16, color: "#f6c204", display: "flex" }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
