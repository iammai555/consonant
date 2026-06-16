export function SiteFooter() {
  return (
    <footer className="border-t-2 border-[color:var(--rule)] bg-band text-band-foreground">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-[var(--g3)] px-[var(--g3)] py-[var(--g3)]">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-band-foreground/70">
          © MMXXVI Athenaeum
        </span>
        <a
          href="#"
          className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-band-foreground/70 underline-offset-4 transition-colors hover:text-band-foreground hover:underline"
        >
          Privacy
        </a>
      </div>
    </footer>
  )
}
