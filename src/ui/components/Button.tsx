import React from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "outline" | "ghost";

type ButtonProps = {
  variant?: Variant;
  size?: "sm" | "md";
  as?: any;
  to?: string;
  href?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  as,
  to,
  href,
  children,
  ...rest
}: ButtonProps) {
  const className = `btn ${variant} ${size}`;

  if (as === Link) {
    return (
      <Link className={className} to={to ?? "/"} {...(rest as any)}>
        {children}
      </Link>
    );
  }

  if (as === "a") {
    return (
      <a className={className} href={href} {...(rest as any)}>
        {children}
      </a>
    );
  }

  const Comp: any = as ?? "button";
  return (
    <Comp className={className} {...rest}>
      {children}
    </Comp>
  );
}
