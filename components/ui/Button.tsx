import Link from "next/link";
import { ReactNode, MouseEventHandler } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  external?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  external,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-cottage text-sm tracking-wide transition-all duration-300 ease-out";

  const styles =
    variant === "primary"
      ? "bg-brown text-[#F7F4EF] hover:bg-[#785A3D] shadow-soft hover:shadow-softHover"
      : "bg-transparent text-ink border border-[#C9BFA9] hover:border-brown hover:bg-surface";

  if (href) {
    return (
      <Link
        href={href}
        className={`${base} ${styles} cursor-hover`}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles} cursor-hover`}
    >
      {children}
      {icon}
    </button>
  );
}