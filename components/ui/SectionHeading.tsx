type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-4xl md:text-5xl font-medium text-ink mb-4">
        {title}
      </h2>
      <svg
        className={`sprig ${align === "center" ? "mx-auto" : ""}`}
        viewBox="0 0 34 14"
        fill="none"
      >
        <path
          d="M1 7c6-6 10-6 16 0s10 6 16 0"
          stroke="#8B6B4A"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="17" cy="7" r="1.6" fill="#8A9175" />
      </svg>
    </div>
  );
}
