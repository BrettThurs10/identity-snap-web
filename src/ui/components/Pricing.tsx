import React from "react";
import { Button } from "./Button";

type Tier = {
  name: string;
  price: string;
  blurb: string;
  features: string[];
  cta: { label: string; href: string };
  highlight?: boolean;
};

export function Pricing({ tiers }: { tiers: Tier[] }) {
  return (
    <div className="pricing">
      {tiers.map((t) => (
        <div
          className={"priceCard " + (t.highlight ? "highlight" : "")}
          key={t.name}
        >
          <div className="priceTop">
            <div>
              <div className="priceName">{t.name}</div>
              <div className="priceBlurb">{t.blurb}</div>
            </div>
            <div className="price">{t.price}</div>
          </div>

          <ul className="list">
            {t.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <div style={{ marginTop: 14 }}>
            <Button
              as="a"
              href={t.cta.href}
              variant={t.highlight ? "accent" : "outline"}
            >
              {t.cta.label}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
