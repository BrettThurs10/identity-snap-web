import React from "react";

type Props = React.PropsWithChildren<{
  className?: string;
  id?: string;
  bg?:
    | "default"
    | "alt"
    | "gradient"
    | "muted"
    | "dark"
    | "radial"
    | "dual-radial"
    | "mesh"
    | "subtle"
    | "glow"
    | "panel"
    | "deep"
    | "accent";
}>;
export function Section({ children, className, id, bg = "default" }: Props) {
  return (
    <section
      id={id}
      className={[
        "section",
        className,
        bg && bg !== "default" ? `section-bg-${bg}` : null,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="container">{children}</div>
    </section>
  );
}
