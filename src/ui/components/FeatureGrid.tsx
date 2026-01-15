type Item = { title: string; body: string };
export function FeatureGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid3">
      {items.map((it) => (
        <div className="card" key={it.title}>
          <div className="cardTitle">{it.title}</div>
          <div className="cardBody">{it.body}</div>
        </div>
      ))}
    </div>
  );
}
