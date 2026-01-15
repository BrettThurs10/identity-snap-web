import { useMemo, useState } from "react";

const SAMPLE_BADGES = [
  {
    label: "Badge",
    lines: [
      "GameOn Expo 2026",
      "Avery Chen",
      "Partner Manager",
      "Wonky Wizard Inc.",
    ],
  },
  {
    label: "Business card",
    lines: [
      "NORTHSTAR CLOUD",
      "Maya Rodriguez",
      "Sales Director",
      "maya@northstar.io",
    ],
  },
  {
    label: "Badge",
    lines: ["Midwest Dev Summit", "Brett Thurston", "Founder", "IdentitySnap"],
  },
];

export function CapturePreview() {
  const [idx, setIdx] = useState(0);
  const current = SAMPLE_BADGES[idx];

  const extracted = useMemo(() => {
    const [event, name, title, companyOrEmail] = current.lines;

    const email = companyOrEmail.includes("@")
      ? companyOrEmail
      : `${name.toLowerCase().replace(/\s+/g, ".")}@${companyOrEmail
          .toLowerCase()
          .replace(/\s+/g, "")}.com`;

    return {
      event,
      name,
      title,
      company: companyOrEmail.includes("@") ? "—" : companyOrEmail,
      email,
      phone: "(555) 019-" + String(100 + idx * 17).padStart(3, "0"),
    };
  }, [current, idx]);

  return (
    <div className="preview">
      <div className="previewTop">
        <div className="seg">
          {SAMPLE_BADGES.map((b, i) => (
            <button
              key={b.label + i}
              className={"segBtn " + (i === idx ? "active" : "")}
              onClick={() => setIdx(i)}
              type="button"
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className="previewGrid"
        style={{
          display: "flex",
          gap: 24,
          alignItems: "stretch",
          justifyContent: "center",
        }}
      >
        <div
          className="mockImage"
          aria-label="Captured image mock"
          style={{
            flex: 1,
            aspectRatio: "1 / 1",
            maxWidth: 400,
            position: "relative",
            background: "#222",
            overflow: "hidden",
            minWidth: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/images/sanjay.png"
            alt="Sanjay's photo"
            className="mockPhoto"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 0,
              display: "block",
            }}
          />
          <div
            className="scanBar"
            aria-hidden
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "40%",
              height: 8,
              background: "var(--primary, #8000A0)",
              boxShadow: "0 0 16px 4px rgba(128,0,160,0.3)",
              borderRadius: 4,
              pointerEvents: "none",
              zIndex: 2,
            }}
          />
        </div>
        <div
          className="mockExtract"
          aria-label="Extracted fields"
          style={{
            flex: 1,
            aspectRatio: "1 / 1",
            maxWidth: 400,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "var(--panel, #18181c)",
            borderRadius: 12,
            padding: 24,
            boxSizing: "border-box",
          }}
        >
          <div className="extractTitle">Extracted</div>
          <div className="kv">
            <div className="k">Event</div>
            <div className="v">{extracted.event}</div>
            <div className="k">Name</div>
            <div className="v">{extracted.name}</div>
            <div className="k">Title</div>
            <div className="v">{extracted.title}</div>
            <div className="k">Company</div>
            <div className="v">{extracted.company}</div>
            <div className="k">Email</div>
            <div className="v">{extracted.email}</div>
            <div className="k">Phone</div>
            <div className="v">{extracted.phone}</div>
          </div>
          <div className="micro muted" style={{ marginTop: 12 }}>
            Flags low-confidence fields for quick fixes.
          </div>
        </div>
      </div>
    </div>
  );
}
