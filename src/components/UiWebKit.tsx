import type { ReactNode } from "react";

const NAV_ITEMS = [
  { label: "Problem", id: "problem" },
  { label: "Video", id: "concept-video" },
  { label: "Solution", id: "solution" },
  { label: "Research", id: "research" },
  { label: "Process", id: "process" },
  { label: "Final Design", id: "final-design" },
  { label: "Team", id: "team" },
];

const TIMELINE_STEPS = [
  "Research",
  "Sketches",
  "Paper Prototype",
  "Digital Prototype",
  "User Testing",
  "Final Design",
];

const RESEARCH_CARDS = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Suspendisse varius enim in eros elementum tristique.",
  "Duis cursus mi quis viverra ornare, eros dolor interdum nulla.",
];

const GALLERY_ITEMS = [1, 2, 3, 4, 5, 6];

const TEAM_MEMBERS = [1, 2, 3];

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">{children}</p>
  );
}

function SectionTitle({
  id,
  title,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div id={id} className="scroll-mt-28">
      <SectionEyebrow>{title}</SectionEyebrow>
      <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-foreground md:text-6xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function ButtonLink({
  children,
  variant = "solid",
}: {
  children: ReactNode;
  variant?: "solid" | "outline";
}) {
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:brightness-105"
      : "border border-border bg-white text-foreground hover:border-primary hover:text-primary";

  return (
    <a
      href="#"
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${styles}`}
    >
      {children}
    </a>
  );
}

function PlaceholderPanel({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex min-h-[220px] items-center justify-center rounded-[2rem] border border-border bg-card px-6 py-8 text-center text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground ${className}`}
    >
      {label}
    </div>
  );
}

function DividerSection({ children }: { children: ReactNode }) {
  return (
    <section className="relative border-b border-border px-6 py-20 lg:px-10 lg:py-28">
      {children}
    </section>
  );
}

export function UiWebKit() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="lg:flex">
        <Sidebar />
        <main className="min-w-0 flex-1">
          <HeroSection />
          <ProblemSection />
          <ConceptVideoSection />
          <SolutionSection />
          <ResearchSection />
          <ProcessSection />
          <FinalDesignSection />
          <TeamSection />
        </main>
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-dark-accent backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-accent text-xs font-semibold uppercase tracking-[0.2em] text-white">
            WS
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Logo Placeholder</p>
            <p className="text-sm font-medium text-foreground">Workflow Sandbox</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="transition hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="hidden w-60 shrink-0 border-r border-border bg-[var(--sidebar-bg)] lg:block">
      <nav className="sticky top-[73px] flex flex-col gap-1 px-5 py-6">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#top"
          className="mt-4 rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground transition hover:brightness-105"
        >
          Back to Top
        </a>
      </nav>
    </aside>
  );
}

function HeroSection() {
  return (
    <DividerSection>
      <div className="absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(circle_at_top_left,var(--color-primary-soft),transparent_42%),radial-gradient(circle_at_top_right,var(--color-secondary-soft),transparent_38%)]" />
      <div className="mx-auto grid max-w-7xl gap-14 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] border border-border bg-white text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground shadow-sm">
            Logo
          </div>
          <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-[-0.07em] text-foreground sm:text-6xl lg:text-8xl">
            Product name placeholder for a polished HCI case study.
          </h1>
          <p className="mt-6 max-w-xl text-2xl leading-tight text-dark-accent">
            Catchphrase placeholder with a calm, editorial rhythm.
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
            eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
            nulla, ut commodo diam libero vitae erat.
          </p>
          <div className="mt-10">
            <ButtonLink>Watch Concept Video</ButtonLink>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-10 rounded-[2.5rem] bg-dark-accent/8 blur-3xl" />
          <PlaceholderPanel
            label="Large Product Mockup Placeholder"
            className="relative min-h-[34rem] rounded-[2.5rem] bg-white/80 shadow-[0_30px_80px_rgba(16,32,48,0.08)]"
          />
        </div>
      </div>
    </DividerSection>
  );
}

function ProblemSection() {
  return (
    <DividerSection>
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          id="problem"
          title="Problem Statement"
          subtitle="A two-column section with readable text width and a restrained visual placeholder."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <PlaceholderPanel label="Problem Image Placeholder" className="min-h-[28rem]" />
          <div className="max-w-2xl space-y-6 text-base leading-8 text-muted-foreground">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
              nulla, ut commodo diam libero vitae erat.
            </p>
            <p>
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
              risus tristique posuere. Proin laoreet mattis sagittis. Nam condimentum bibendum
              varius.
            </p>
            <p>
              Aliquam erat volutpat. Curabitur blandit tempus porttitor. Integer posuere erat a ante
              venenatis dapibus posuere velit aliquet.
            </p>
          </div>
        </div>
      </div>
    </DividerSection>
  );
}

function ConceptVideoSection() {
  return (
    <DividerSection>
      <div className="mx-auto max-w-6xl text-center">
        <SectionTitle
          id="concept-video"
          title="Concept Video"
          subtitle="Embedded concept video with inline playback directly in the case study."
        />
        <div className="mt-14">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-border bg-card shadow-[0_20px_60px_rgba(16,32,48,0.06)]">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/Q_Pp8TqVGf8"
              title="Concept Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
            eros elementum tristique.
          </p>
        </div>
      </div>
    </DividerSection>
  );
}

function SolutionSection() {
  return (
    <DividerSection>
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          id="solution"
          title="Solution Statement"
          subtitle="An editorial-style storytelling section rather than a feature or marketing layout."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <PlaceholderPanel label="Solution Image Placeholder" className="min-h-[34rem]" />
          <div className="max-w-2xl">
            <h3 className="text-3xl font-semibold tracking-[-0.04em] text-foreground md:text-4xl">
              Solution statement placeholder with clear hierarchy and generous spacing.
            </h3>
            <div className="mt-6 space-y-6 text-base leading-8 text-muted-foreground">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero vitae erat.
              </p>
              <p>
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                risus tristique posuere. Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DividerSection>
  );
}

function ResearchSection() {
  return (
    <DividerSection>
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          id="research"
          title="User Research"
          subtitle="Research visualization, quote placeholders, and key insights in a light case-study layout."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <PlaceholderPanel
            label="Research Diagram Placeholder"
            className="min-h-[28rem]"
          />
          <div className="space-y-4">
            {RESEARCH_CARDS.map((card) => (
              <article key={card} className="rounded-[1.75rem] border border-border bg-card px-6 py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Insight
                </p>
                <p className="mt-3 text-base leading-7 text-foreground">{card}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-border bg-white px-6 py-8 text-lg leading-8 text-foreground shadow-[0_12px_36px_rgba(16,32,48,0.04)]">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”
          </div>
          <div className="rounded-[1.75rem] border border-border bg-white px-6 py-8 text-lg leading-8 text-foreground shadow-[0_12px_36px_rgba(16,32,48,0.04)]">
            “Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.”
          </div>
        </div>
      </div>
    </DividerSection>
  );
}

function ProcessSection() {
  return (
    <DividerSection>
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          id="process"
          title="Design Process"
          subtitle="A simple visual timeline followed by lightweight placeholders for artifacts."
        />
        <div className="mt-14 overflow-x-auto pb-4">
          <div className="flex min-w-[64rem] items-center gap-4">
            {TIMELINE_STEPS.map((step, index) => (
              <div key={step} className="flex items-center gap-4">
                <div className="min-w-40 rounded-full border border-border bg-white px-5 py-4 text-center text-sm font-medium text-foreground">
                  {step}
                </div>
                {index < TIMELINE_STEPS.length - 1 ? <div className="text-xl text-primary">→</div> : null}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <PlaceholderPanel label="Sketch Placeholder" className="min-h-[15rem]" />
          <PlaceholderPanel label="Paper Prototype Placeholder" className="min-h-[15rem]" />
          <PlaceholderPanel label="Digital Prototype Placeholder" className="min-h-[15rem]" />
          <PlaceholderPanel label="Testing Artifact Placeholder" className="min-h-[15rem]" />
        </div>
      </div>
    </DividerSection>
  );
}

function FinalDesignSection() {
  return (
    <DividerSection>
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          id="final-design"
          title="Final Design / Mockups"
          subtitle="A clean gallery for mockups, screenshots, and polished visual presentation."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <PlaceholderPanel label="Large Mockup Placeholder" className="min-h-[30rem]" />
          <div className="grid gap-6">
            <PlaceholderPanel label="Prototype Placeholder" className="min-h-[14rem]" />
            <PlaceholderPanel label="Demo Placeholder" className="min-h-[14rem]" />
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {GALLERY_ITEMS.map((item) => (
            <article key={item} className="rounded-[1.75rem] border border-border bg-card p-5">
              <PlaceholderPanel label="Screenshot Placeholder" className="min-h-[14rem]" />
              <h3 className="mt-5 text-lg font-medium text-foreground">Title Placeholder</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </article>
          ))}
        </div>
      </div>
    </DividerSection>
  );
}

function TeamSection() {
  return (
    <section className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          id="team"
          title="Meet The Team"
          subtitle="Simple profile cards with placeholder photos, names, and roles."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <article key={member} className="rounded-[2rem] border border-border bg-card px-6 py-8 text-center">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-border bg-white text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Photo
              </div>
              <h3 className="mt-6 text-xl font-medium text-foreground">Name Placeholder</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                Role Placeholder
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-white px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Logo Placeholder</p>
          <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-foreground">
            Workflow Sandbox
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="transition hover:text-foreground">
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-border pt-6 text-sm text-muted-foreground">
        Contact Placeholder · Copyright Placeholder
      </div>
    </footer>
  );
}
