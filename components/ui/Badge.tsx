export default function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full border border-line bg-[#C47521]/40 text-ink text-sm font-medium hover:border-brown hover:bg-[#C47521]/60 transition-colors duration-300">
      {label}
    </span>
  );
}
