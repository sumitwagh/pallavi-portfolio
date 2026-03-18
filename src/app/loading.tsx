export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading page content"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="w-5 h-5 rounded-full border border-[var(--border)] border-t-[var(--accent)] animate-spin" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
