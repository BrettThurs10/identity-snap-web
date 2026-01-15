import React from "react";

type Props = React.PropsWithChildren<{ subtle?: boolean }>;
export function Pill({ children, subtle }: Props) {
  return <span className={"pill " + (subtle ? "subtle" : "")}>{children}</span>;
}
