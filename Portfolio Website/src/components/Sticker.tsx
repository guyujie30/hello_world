import type { ReactNode } from "react";

type StickerProps = {
  children: ReactNode;
  tone?: "red" | "yellow" | "violet" | "white" | "black";
  tilt?: "left" | "right" | "none";
  className?: string;
};

const toneClass = {
  red: "sticker-red",
  yellow: "sticker-yellow",
  violet: "sticker-violet",
  white: "sticker-white",
  black: "sticker-black",
};

const tiltClass = {
  left: "tilt-left",
  right: "tilt-right",
  none: "",
};

export default function Sticker({
  children,
  tone = "yellow",
  tilt = "none",
  className = "",
}: StickerProps) {
  return <span className={`sticker ${toneClass[tone]} ${tiltClass[tilt]} ${className}`}>{children}</span>;
}
