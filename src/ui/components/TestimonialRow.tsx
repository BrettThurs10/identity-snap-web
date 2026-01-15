type T = { quote: string; who: string };
export function TestimonialRow({ testimonials }: { testimonials: T[] }) {
  return (
    <div className="grid3">
      {testimonials.map((t) => (
        <div className="card" key={t.quote}>
          <div className="quote">“{t.quote}”</div>
          <div className="micro muted" style={{ marginTop: 10 }}>
            {t.who}
          </div>
        </div>
      ))}
    </div>
  );
}
