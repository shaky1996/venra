export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-16">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
      />

      <section className="relative text-center">
        <div className="mb-6 flex items-center justify-center gap-3">
          <span
            aria-hidden="true"
            className="size-2.5 rounded-full bg-purple-bright shadow-[0_0_24px_var(--venra-purple-bright)]"
          />
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet">
            Venra
          </p>
        </div>

        <h1 className="text-balance text-4xl font-semibold tracking-tight text-text-primary sm:text-6xl">
          Know what needs attention.
        </h1>
      </section>
    </main>
  );
}
