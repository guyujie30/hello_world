import type { ReactNode } from "react";

type BrutalCardProps = {
  children: ReactNode;
  className?: string;
  tone?: "white" | "yellow" | "violet" | "red" | "black";
  rotate?: "left" | "right" | "none";
};

const toneClass = {
  white: "card-white",
  yellow: "card-yellow",
  violet: "card-violet",
  red: "card-red",
  black: "card-black",
};

const rotateClass = {
  left: "rotate-left",
  right: "rotate-right",
  none: "",
};

export default function BrutalCard({
  children,
  className = "",
  tone = "white",
  rotate = "none",
}: BrutalCardProps) {
  return (
    <article className={`brutal-card ${toneClass[tone]} ${rotateClass[rotate]} ${className}`}>
      {children}
    </article>
  );
}
