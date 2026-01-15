import { useState } from "react";

type Item = { q: string; a: string };
export function FAQ({ items }: { items: Item[] }) {
  return (
    <div className="faq">
      {items.map((it) => (
        <FAQItem key={it.q} item={it} />
      ))}
    </div>
  );
}

function FAQItem({ item }: { item: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faqItem">
      <button
        className="faqQ"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{item.q}</span>
        <span className="chev" aria-hidden>
          {open ? "–" : "+"}
        </span>
      </button>
      {open ? <div className="faqA">{item.a}</div> : null}
    </div>
  );
}
