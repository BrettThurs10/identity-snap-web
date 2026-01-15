import React from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "outline" | "ghost";

type CommonProps = {
  variant?: Variant;
  size?: "sm" | "md";
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };
type ButtonAsAnchor = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };
type ButtonAsLink = CommonProps & {
  as: typeof Link;
  to: string;
};

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  as,
  children,
  ...rest
}: ButtonProps) {
  const className = `btn ${variant} ${size}`;

  if (as === Link) {
    const { to, ...linkProps } = rest as ButtonAsLink;
    return (
      <Link className={className} to={to} {...linkProps}>
        {children}
      </Link>
    );
  }

  if (as === "a") {
    const { href, ...anchorProps } = rest as ButtonAsAnchor;
    return (
      <a className={className} href={href} {...anchorProps}>
        {children}
      </a>
    );
  }

  // Default to button
  return (
    <button className={className} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
}
