import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { EntryBand } from '@/components/entry-band'
import { LibrarySidebar } from '@/components/library-sidebar'
import { ContentArea } from '@/components/content-area'
import { SiteFooter } from '@/components/site-footer'
import { Vault } from '@/components/vault'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* 1 · Top accent bar */}
      <div className="h-1 w-full bg-[color:var(--rule)]" />

      {/* 2 · Sticky header */}
      <SiteHeader />

      {/* 3 · Hero */}
      <Hero />

      {/* 4 · Entry band */}
      <div className="animate-fade-up" style={{ animationDelay: '0.45s' }}>
        <EntryBand />
      </div>

      {/* 5 · Two-column layout */}
      <main className="mx-auto max-w-screen-xl px-[var(--g3)] py-[var(--g5)]">
        <div className="grid grid-cols-1 gap-[var(--g5)] lg:grid-cols-[15rem_1fr]">
          <div
            className="animate-fade-up lg:sticky lg:top-20 lg:self-start"
            style={{ animationDelay: '0.55s' }}
          >
            <LibrarySidebar />
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '0.65s' }}>
            <ContentArea />
          </div>
        </div>
      </main>

      {/* 6 · Footer */}
      <SiteFooter />

      {/* 7 · Vault */}
      <Vault />
    </div>
  )
}
