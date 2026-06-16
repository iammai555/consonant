export function Vault() {
  return (
    <div className="fixed bottom-[var(--g3)] right-[var(--g3)] z-30">
      <div className="flex items-center gap-2 rounded-full border border-border bg-background/55 px-3 py-1.5 backdrop-blur-md supports-[backdrop-filter]:bg-background/40">
        <span
          aria-hidden="true"
          className="size-1.5 rounded-full bg-[color:var(--rule)]"
        />
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
          Vault · Secured
        </span>
      </div>
    </div>
  )
}
