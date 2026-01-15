import React from "react";
type Step = { title: string; body: string; image?: string };
export function Steps({ steps }: { steps: Step[] }) {
  return (
    <div className="steps">
      {steps.map((s) => (
        <div className="step" key={s.title}>
          <div className="stepContent">
            <img
              src={
                s.image ||
                "https://via.placeholder.com/120x240?text=App+Preview"
              }
              alt={s.title + " app preview"}
              className="stepImage"
              style={{
                width: "100%",
                aspectRatio: "2/4",
                objectFit: "cover",
                borderRadius: 12,
                marginBottom: 12,
                display: "block",
              }}
            />
            <div className="stepTitle">{s.title}</div>
            <div className="stepBody">{s.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
