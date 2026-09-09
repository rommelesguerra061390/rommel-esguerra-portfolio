import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Bot,
  Workflow,
  Rocket,
  LineChart,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Quote,
  GraduationCap,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rommel Esguerra | GoHighLevel & AI Specialist" },
      {
        name: "description",
        content: "Rommel Esguerra builds GoHighLevel systems, AI assistants, funnels and automations that convert leads into booked clients.",
      },
      { property: "og:title", content: "Rommel Esguerra | GoHighLevel & AI Specialist" },
      {
        property: "og:description",
        content: "GoHighLevel systems and AI automations for agencies and service businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Experience", "#experience"],
  ["Work", "#work"],
  ["Testimonials", "#testimonials"],
  ["Contact", "#contact"],
] as const;

const SERVICES = [
  {
    icon: Rocket,
    title: "GoHighLevel Build-Outs",
    body: "Full sub-account setup: pipelines, calendars, funnels, forms, memberships and white-label snapshots ready to duplicate across clients.",
  },
  {
    icon: Workflow,
    title: "Automation & Workflows",
    body: "Lead nurture, appointment reminders, review requests and reactivation campaigns across SMS, email and voice — built to run without babysitting.",
  },
  {
    icon: Bot,
    title: "AI Assistants & Chatbots",
    body: "AI booking bots, FAQ responders and inbound qualifiers connected to your CRM so every conversation moves toward a booked call.",
  },
  {
    icon: LineChart,
    title: "Systems & Reporting",
    body: "Integrations via API, webhooks, Make and Zapier, plus dashboards that show where leads come from and where they stall.",
  },
];

const EXPERIENCE = [
  {
    role: "GoHighLevel Specialist / Automation Consultant",
    org: "Freelance & Agency Clients",
    period: "Sample dates",
    points: [
      "Built and maintained GoHighLevel sub-accounts, snapshots and funnels for marketing agencies and service businesses.",
      "Designed multi-channel nurture workflows that shortened lead response time and increased booked appointments.",
      "Trained client teams on pipeline hygiene, conversations inbox and reporting.",
    ],
  },
  {
    role: "AI & Automation Specialist",
    org: "Remote Clients",
    period: "Sample dates",
    points: [
      "Deployed AI chat and voice assistants for lead qualification and 24/7 appointment booking.",
      "Connected CRMs, calendars, payment tools and spreadsheets with API, webhook and Make/Zapier automations.",
      "Documented every build so operations continued without dependency on one person.",
    ],
  },
  {
    role: "Client Success & Operations Support",
    org: "Previous Role",
    period: "Sample dates",
    points: [
      "Managed onboarding, ticket resolution and account health for recurring clients.",
      "Turned repeated manual tasks into standard operating procedures and automations.",
    ],
  },
];

const WORK = [
  {
    title: "Agency Snapshot System",
    tag: "GoHighLevel",
    body: "A reusable sub-account snapshot with pipelines, calendars, review automations and onboarding forms — new clients live in under a day.",
  },
  {
    title: "AI Booking Assistant",
    tag: "AI Automation",
    body: "Chat assistant that answers FAQs, qualifies leads and books directly into the calendar, with human handoff on complex requests.",
  },
  {
    title: "Database Reactivation Campaign",
    tag: "Workflows",
    body: "SMS and email reactivation sequence for a cold list, with reply routing, opt-out handling and pipeline tracking.",
  },
  {
    title: "High-Converting Funnel Suite",
    tag: "Funnels",
    body: "Landing page, VSL page, application form and thank-you flow with tracking and instant lead notifications.",
  },
  {
    title: "Review & Reputation Engine",
    tag: "Automation",
    body: "Post-service review requests with smart timing, escalation for unhappy clients and reporting on rating growth.",
  },
  {
    title: "Ops Dashboard & Integrations",
    tag: "Integrations",
    body: "Make and webhook pipelines syncing CRM, sheets and billing tools into one dashboard for daily decisions.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Our follow-up used to be manual and inconsistent. After the new workflows went live, every lead gets a reply within minutes and our calendar stays full.",
    name: "Sample Client",
    role: "Agency Owner",
  },
  {
    quote:
      "The AI assistant handles the repetitive questions and books calls overnight. It feels like adding a team member without adding payroll.",
    name: "Sample Client",
    role: "Home Services Business",
  },
  {
    quote:
      "Clear communication, clean documentation, and the system was handed over in a way our team could actually run.",
    name: "Sample Client",
    role: "Coaching Business",
  },
];

const SKILLS: Record<string, string[]> = {
  "CRM & Funnels": [
    "GoHighLevel",
    "Snapshots",
    "Funnels & Websites",
    "Pipelines",
    "Calendars",
    "Memberships",
  ],
  "Automation & AI": [
    "Workflow Builder",
    "AI Chatbots",
    "Voice AI",
    "Prompt Engineering",
    "Make.com",
    "Zapier",
    "Webhooks & APIs",
  ],
  "Marketing & Ops": [
    "Email & SMS Campaigns",
    "Lead Nurture",
    "Reputation Management",
    "Reporting & Analytics",
    "Client Onboarding",
    "SOP Documentation",
  ],
};

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} data-section className="reveal-section scroll-mt-24 border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = document.querySelectorAll<HTMLElement>(".reveal-section, .reveal-card");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealElements.forEach((element) => {
      if (reduceMotion) element.classList.add("is-visible");
      else revealObserver.observe(element);
    });

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
      const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
      const current = sections.reduce<HTMLElement | undefined>((match, section) => {
        return section.getBoundingClientRect().top <= 180 ? section : match;
      }, sections[0]);
      if (current?.id) setActiveSection(current.id);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-secondary" aria-hidden="true">
        <div className="h-full origin-left bg-primary" style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            Rommel<span className="text-primary"> Esguerra</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map(([label, href]) => (
              <a
                key={href}
                href={href}
                data-active={activeSection === href.slice(1)}
                aria-current={activeSection === href.slice(1) ? "location" : undefined}
                className="nav-link text-sm text-muted-foreground hover:text-primary data-[active=true]:text-primary"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
               className="cta-motion rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Book a call
            </a>
          </nav>
          <button
            aria-label="Toggle menu"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-border px-5 pb-4 md:hidden">
            {NAV.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                data-active={activeSection === href.slice(1)}
                className="block py-3 text-sm text-muted-foreground transition-colors hover:text-primary data-[active=true]:text-primary"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero-glow">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1.25fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                <span className="size-2 rounded-full bg-[var(--success)] shadow-[0_0_10px_color-mix(in_oklab,var(--success)_70%,transparent)]" /> Available for new projects
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-6xl">
                GoHighLevel systems and AI automations that turn leads into booked clients.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                I&apos;m Rommel Esguerra — a GoHighLevel Specialist and AI &amp; Automation
                Specialist. I build the funnels, CRM workflows and AI assistants that let agencies
                and service businesses follow up instantly, book more calls, and stop losing leads
                to manual work.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="cta-motion rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)]"
                >
                  Work with me
                </a>
                <a
                  href="#work"
                  className="cta-motion rounded-lg border border-primary/60 px-6 py-3 text-sm font-semibold hover:text-primary-foreground"
                >
                  See sample projects
                </a>
              </div>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
                {[
                  ["Systems built", "50+"],
                  ["Automations shipped", "200+"],
                  ["Focus", "GHL + AI"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
                    <dd className="mt-1 font-display text-2xl font-semibold text-primary">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="card-surface interactive-card rounded-lg p-7">
              <div className="flex items-center gap-4">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-primary font-display text-xl font-bold text-primary-foreground">
                  RE
                </div>
                <div>
                  <p className="font-display text-lg font-semibold">Rommel Esguerra</p>
                  <p className="text-sm text-muted-foreground">
                    GoHighLevel &amp; AI Automation Specialist
                  </p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Mail className="size-4 text-primary" /> your@email.com
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-4 text-primary" /> +63 000 000 0000
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="size-4 text-primary" /> Philippines · Working remotely
                </li>
                <li className="flex items-center gap-3">
                  <Linkedin className="size-4 text-primary" /> linkedin.com/in/your-profile
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="size-4 text-primary" /> your-website.com
                </li>
              </ul>
              <p className="mt-6 rounded-xl bg-secondary px-4 py-3 text-xs text-muted-foreground">
                Placeholder contact details — send me your real email, phone, and links and
                I&apos;ll swap them in.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <Section id="about" eyebrow="Profile" title="A builder of systems, not just campaigns">
          <div className="grid gap-8 lg:grid-cols-3">
            <p className="text-base leading-relaxed text-muted-foreground lg:col-span-2">
              I help agencies, coaches and local service businesses run on automation. My work
              centres on GoHighLevel — sub-accounts, snapshots, funnels, pipelines and multi-channel
              follow-up — paired with AI assistants that qualify leads and book appointments around
              the clock. I care about the whole path: a lead arrives, gets a fast and human-sounding
              response, lands on the calendar, and every step is tracked so you know what&apos;s
              working. Clients get clean documentation and training, so the system keeps producing
              long after handover.
            </p>
            <ul className="space-y-3">
              {[
                "Fast, reliable lead follow-up",
                "AI that books, not just chats",
                "Clear documentation and handover",
                "Reporting you actually use",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span className="text-muted-foreground">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Services */}
        <Section id="services" eyebrow="Services" title="What I can build for you">
          <div className="grid gap-5 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                 style={{ transitionDelay: `${(SERVICES.indexOf(s) % 3) * 100}ms` }}
                 className="reveal-card card-surface interactive-card group rounded-lg p-6"
              >
                 <s.icon className="icon-shift size-6 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" eyebrow="Experience" title="Work experience">
          <div className="space-y-6">
            {EXPERIENCE.map((e) => (
               <div key={e.role} className="card-surface interactive-card rounded-lg p-6 sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{e.role}</h3>
                  <span className="text-xs uppercase tracking-wider text-primary">{e.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
                <ul className="mt-4 space-y-2">
                  {e.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Work */}
        <Section id="work" eyebrow="Portfolio" title="Previous works & sample projects">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WORK.map((w) => (
              <article
                key={w.title}
                 style={{ transitionDelay: `${(WORK.indexOf(w) % 3) * 100}ms` }}
                 className="reveal-card card-surface interactive-card flex flex-col rounded-lg p-6 hover:scale-[1.03]"
              >
                <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs text-accent">
                  {w.tag}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Testimonials */}
        <Section id="testimonials" eyebrow="Testimonials" title="Sample client feedback">
          <p className="-mt-6 mb-8 text-sm text-muted-foreground">
            These are placeholder examples shown for layout purposes, not real client quotes.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
               <figure key={t.quote} className="card-surface interactive-card rounded-lg p-6">
                <Quote className="size-6 text-primary" />
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4 text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* Education & skills */}
        <Section id="skills" eyebrow="Background" title="Education, skills & tools">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
             <div className="card-surface interactive-card rounded-lg p-6">
              <GraduationCap className="size-6 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Education</h3>
              <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Degree / Program</p>
                  <p>University name · Sample years</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    Certifications in GoHighLevel & Automation
                  </p>
                  <p>Course provider · Sample years</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {Object.entries(SKILLS).map(([group, items]) => (
                <div key={group}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                    {group}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {items.map((i) => (
                      <li
                        key={i}
                        className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs text-muted-foreground"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" eyebrow="Contact" title="Let's automate your growth">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-base leading-relaxed text-muted-foreground">
                Tell me about your business and what&apos;s slowing you down. I&apos;ll reply with a
                clear recommendation for the systems worth building first.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <a href="mailto:your@email.com" className="flex items-center gap-3 hover:text-primary">
                  <Mail className="size-4 text-primary" /> your@email.com
                </a>
                <a href="tel:+630000000000" className="flex items-center gap-3 hover:text-primary">
                  <Phone className="size-4 text-primary" /> +63 000 000 0000
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-primary"
                >
                  <Linkedin className="size-4 text-primary" /> LinkedIn profile
                </a>
              </div>
            </div>
            <form
               className="card-surface space-y-4 rounded-lg p-6"
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.currentTarget;
                const data = new FormData(f);
                window.location.href = `mailto:your@email.com?subject=${encodeURIComponent(
                  `Project inquiry from ${data.get("name")}`,
                )}&body=${encodeURIComponent(String(data.get("message")))}`;
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="What would you like to build or automate?"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <button
                type="submit"
                 className="cta-motion w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                Send message
              </button>
            </form>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-muted-foreground sm:flex-row">
          <span className="font-display font-semibold text-foreground">Rommel Esguerra</span>
          <span>© {new Date().getFullYear()} · GoHighLevel & AI Automation Specialist</span>
        </div>
      </footer>
    </div>
  );
}
