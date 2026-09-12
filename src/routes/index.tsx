import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ComponentType } from "react";
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
  Sparkles,
  Palette,
  Scissors,
  ExternalLink,
  Heart,
  Users,
  Database,
  Target,
  CalendarDays,
  Table2,
} from "lucide-react";
import { SiAirtable, SiClaude, SiFacebook, SiGooglecalendar, SiGooglesheets, SiMake, SiMessenger, SiNotion, SiZapier } from "react-icons/si";
import { FaGoogle, FaMicrosoft, FaSlack } from "react-icons/fa6";
import { BsOpenai } from "react-icons/bs";
import asanaCrm from "@/assets/Asana_CRM_Engagement_Automation.png.asset.json";
import contentRepurposing from "@/assets/Content_Repurposing_Project.png.asset.json";
import universalLead from "@/assets/Universal_Lead_Management_and_Follow_ups.png.asset.json";
import xeroAsana from "@/assets/Export_Account_Transactions_from_Xero_Upload_CSV_to_Asana.png.asset.json";
import aiLeadQual from "@/assets/AI_Lead_Qualification_Auto-Response_Agent_ZAP_MAPPING.png.asset.json";
import ghlNewLead from "@/assets/Go_high_level_New_lead_Update_Automation.png.asset.json";
import ghlQuote from "@/assets/Go_high_level_Quote_Follow_up_Automation.png.asset.json";
import ghlAppointments from "@/assets/GO_high_level_Cleaning_Appointment_Confirmation_and_Reminders_automation.png.asset.json";
import profilePicture from "@/assets/PORTFOLIO_PROFILE_PICTURE.png.asset.json";
import basicZaps from "@/assets/Zapier_certificate-Rommel-Esguerra-Building-Basic-Zaps.pdf.asset.json";
import intermediateZaps from "@/assets/Zapier_certificate-Rommel-Esguerra-Building-Intermediate-Zaps.pdf.asset.json";
import aiAgents from "@/assets/Zapier_certificate-Rommel-Esguerra-Building-AI-Agents.pdf.asset.json";
import jumpstart from "@/assets/Zapier_certificate-Rommel-Esguerra-Jumpstart.pdf.asset.json";
import whatIsMcp from "@/assets/certificate-Rommel-Esguerra-What-is-Zapier-MCP-.pdf.asset.json";
import usingMcp from "@/assets/Zapier_certificate-Rommel-Esguerra-Using-Zapier-MCP.pdf.asset.json";
import governingMcp from "@/assets/Zapier_certificate-Rommel-Esguerra-Governing-Zapier-MCP.pdf.asset.json";
import generalCert from "@/assets/Rommel_Esguerra_Zapier.pdf.asset.json";

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
  ["Certificates", "#certifications"],
  ["Contact", "#contact"],
] as const;

const CERTIFICATIONS = [
  {
    title: "Building Basic Zaps",
    file: basicZaps.url,
    ai: false,
    body: "Core trigger-action automation, app connectivity and foundational workflow logic.",
    purpose: "Ensures rock-solid, error-free standard integrations.",
  },
  {
    title: "Building Intermediate Zaps",
    file: intermediateZaps.url,
    ai: false,
    body: "Multi-step workflows, conditional branching (Paths), filters, data formatting and error handling.",
    purpose: "Automates complex business processes with resilience.",
  },
  {
    title: "Building AI Agents",
    file: aiAgents.url,
    ai: true,
    body: "Designing autonomous AI agents, memory handling, LLM prompting and tool execution.",
    purpose: "Enables 24/7 AI-driven support and qualification workflows.",
  },
  {
    title: "Zapier Jumpstart",
    file: jumpstart.url,
    ai: false,
    body: "Accelerated workflow development and automation fundamentals.",
    purpose: "Rapid delivery and immediate ROI for new client systems.",
  },
  {
    title: "What is Zapier MCP?",
    file: whatIsMcp.url,
    ai: true,
    body: "Fundamentals of the Model Context Protocol and integrating LLMs with external tools via Zapier.",
    purpose: "Bridges modern AI reasoning with actionable business tooling.",
  },
  {
    title: "Using Zapier MCP",
    file: usingMcp.url,
    ai: true,
    body: "Practical implementation of Zapier MCP servers and actions connected to AI models.",
    purpose: "Lets custom AI agents securely trigger workflows and fetch data across hundreds of apps.",
  },
  {
    title: "Governing Zapier MCP",
    file: governingMcp.url,
    ai: true,
    body: "Security, compliance, permissions and safe governance for AI-connected automations.",
    purpose: "Guarantees secure, controlled AI interactions without unauthorized data exposure.",
  },
  {
    title: "Zapier Certified Automation Specialist",
    file: generalCert.url,
    ai: false,
    body: "Overall verification of Zapier automation expertise across triggers, logic and integrations.",
    purpose: "Proves verified domain mastery in building scalable systems.",
  },
];

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
    title: "Zapier Asana CRM Engagement Automation",
    tag: "Zapier",
    body: "A 30-step Zap that watches Asana task updates and splits leads into Ready to Start, No Response, Quoted, Approved and Paid & Closed paths, each with its own Gmail follow-ups, delays, Google Drive folders and AI-written onboarding and recommendation emails.",
    problem:
      "Deal-stage follow-up lived in someone's head: leads sat unanswered between stages and onboarding emails were written from scratch every time.",
    benefits: [
      "Every pipeline stage triggers its own follow-up sequence automatically",
      "Timed delays and filters stop duplicate or premature emails",
      "Lead folders and content tasks are created without manual setup",
    ],
    images: [
      { src: asanaCrm.url, alt: "Zapier workflow splitting Asana CRM stages into follow-up paths" },
    ],
  },
  {
    title: "Zapier Content Repurposing",
    tag: "AI Automation",
    body: "New files dropped in a Google Drive folder are filtered, transcribed by AI, turned into a blog post, then looped and split into separate paths that publish tailored posts to Facebook Pages.",
    problem:
      "Recorded content sat unused because transcribing, rewriting and posting it to each channel was slow manual work.",
    benefits: [
      "One upload becomes a transcript, a blog post and social posts",
      "Looping handles multiple content items in a single run",
      "Path conditions keep each channel's format distinct",
    ],
    images: [
      { src: contentRepurposing.url, alt: "Zapier content repurposing workflow from Drive upload to Facebook posts" },
    ],
  },
  {
    title: "Zapier Universal Lead Management and Follow Ups",
    tag: "Lead Ops",
    body: "New spreadsheet rows are validated for name and email, name-formatted, then fanned out to a Gmail follow-up, a Slack channel alert and a Trello card for the owning team.",
    problem:
      "Leads captured in a sheet were inconsistently formatted, often missing details, and reached the team late or not at all.",
    benefits: [
      "Incomplete rows are filtered out before anything is sent",
      "Names are cleaned up so outreach looks professional",
      "Email, Slack notification and task creation happen in one pass",
    ],
    images: [
      { src: universalLead.url, alt: "Zapier workflow routing new spreadsheet leads to email, Slack and Trello" },
    ],
  },
  {
    title: "Make : Export bank Account Transaction From Xero To Asana",
    tag: "Make",
    body: "A Make scenario watching completed Asana tasks calls the Xero API, routes results through an iterator into Google Sheets, aggregates the rows into a file and uploads the attachment back to the originating Asana task before clearing the range.",
    problem:
      "Pulling account transactions out of Xero and attaching them to the right task was a repetitive copy-paste-export chore.",
    benefits: [
      "Transaction exports run on schedule instead of on request",
      "Data is collected in Sheets then attached back to Asana automatically",
      "Range clearing keeps each run clean and repeatable",
    ],
    images: [
      { src: xeroAsana.url, alt: "Make scenario exporting Xero transactions into Google Sheets and Asana" },
    ],
  },
  {
    title: "AI Lead Qualification & Auto-Response Agent",
    tag: "AI Automation",
    body: "Google Forms submissions are scored and categorised by AI, logged as a spreadsheet row, then answered with a Gmail response matched to the lead's category.",
    problem:
      "Form enquiries arrived unsorted, so good leads waited in the same queue as low-intent ones.",
    benefits: [
      "Each enquiry is scored and categorised the moment it lands",
      "A record is kept in Sheets for tracking and review",
      "Leads receive an immediate, relevant reply",
    ],
    images: [
      { src: aiLeadQual.url, alt: "Zapier AI agent scoring form leads and sending an automatic email reply" },
    ],
  },
  {
    title: "Go High Level Residential Cleaning Automation",
    tag: "GoHighLevel",
    body: "Two connected GoHighLevel workflows: a new-lead response flow that tags the contact, creates an opportunity, sends SMS and email then branches on high intent versus not ready; and an appointment flow that confirms bookings, assigns a user, notifies the team and sends timed SMS and email reminders with a rescheduled condition.",
    problem:
      "Cleaning enquiries and bookings depended on staff remembering to reply, chase and remind — with no-shows and cold leads as the result.",
    benefits: [
      "Instant SMS and email response to every new enquiry",
      "High-intent leads are tagged and escalated to the team",
      "Confirmations, reminders and reschedule handling run automatically",
    ],
    images: [
      { src: ghlNewLead.url, alt: "GoHighLevel new lead response workflow with intent branching" },
      { src: ghlAppointments.url, alt: "GoHighLevel appointment confirmation and reminder workflow" },
    ],
  },
  {
    title: "AI-Powered Lead Qualification & Sales Follow-Up Automation",
    tag: "GoHighLevel",
    body: "A quote follow-up workflow triggered by contact tag: email, wait, then branch on quote-booked versus quote-sent, running a timed SMS, email and tag sequence before creating or updating the opportunity.",
    problem:
      "Sent quotes went quiet because nobody had time to chase them on a consistent schedule.",
    benefits: [
      "Every quote gets a structured multi-touch follow-up",
      "Booked quotes exit the sequence via tag conditions",
      "Pipeline opportunities stay updated as contacts progress",
    ],
    images: [
      { src: ghlQuote.url, alt: "GoHighLevel quote follow-up workflow with booked and sent branches" },
    ],
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

type Tool = { name: string; icon: ComponentType<{ className?: string }>; glow: boolean };

const TOOLS_ROW_ONE: Tool[] = [
  { name: "GoHighLevel", icon: Workflow, glow: true },
  { name: "Zapier", icon: SiZapier, glow: true },
  { name: "Make", icon: SiMake, glow: true },
  { name: "AI Automation & Agents", icon: Sparkles, glow: true },
  { name: "Claude", icon: SiClaude, glow: true },
  { name: "ChatGPT", icon: BsOpenai, glow: true },
  { name: "Lovable.dev", icon: Heart, glow: true },
  { name: "OpenAI API", icon: Bot, glow: true },
  { name: "Canva", icon: Palette, glow: false },
  { name: "CapCut", icon: Scissors, glow: false },
  { name: "Google Workspace", icon: FaGoogle, glow: false },
  { name: "Microsoft Teams", icon: Users, glow: false },
];

const TOOLS_ROW_TWO: Tool[] = [
  { name: "Slack", icon: FaSlack, glow: false },
  { name: "Notion", icon: SiNotion, glow: false },
  { name: "Airtable", icon: SiAirtable, glow: false },
  { name: "Facebook / Meta", icon: SiFacebook, glow: false },
  { name: "Messenger", icon: SiMessenger, glow: false },
  { name: "Email Marketing", icon: Mail, glow: false },
  { name: "Lead Generation", icon: Target, glow: false },
  { name: "Microsoft Office", icon: FaMicrosoft, glow: false },
  { name: "Google Sheets", icon: SiGooglesheets, glow: false },
  { name: "Google Calendar", icon: SiGooglecalendar, glow: false },
  { name: "CRM Systems", icon: Table2, glow: false },
  { name: "Database Management", icon: Database, glow: false },
];

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
            </div>

            <div className="card-surface interactive-card overflow-hidden rounded-lg">
              <div className="aspect-[4/3] overflow-hidden border-b border-border sm:aspect-[5/4] lg:aspect-[4/3]">
                <img
                  src={profilePicture.url}
                  alt="Rommel Esguerra, GoHighLevel and AI automation specialist"
                  className="h-full w-full object-cover object-[center_24%]"
                  fetchPriority="high"
                />
              </div>
              <div className="p-6 sm:p-7">
                <div>
                  <p className="font-display text-lg font-semibold">Rommel Esguerra</p>
                  <p className="text-sm text-muted-foreground">
                    GoHighLevel &amp; AI Automation Specialist
                  </p>
                </div>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0 text-primary" />
                  <a className="break-all hover:text-primary" href="mailto:rommelesguerra061390@gmail.com">rommelesguerra061390@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-primary" />
                  <a className="hover:text-primary" href="tel:09939155488">09939155488</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="size-4 shrink-0 text-primary" /> Philippines · Working remotely
                </li>
                <li className="flex items-center gap-3">
                  <Linkedin className="size-4 shrink-0 text-primary" />
                  <a className="hover:text-primary" href="https://linkedin.com/in/rommel-esguerra-13a298160" target="_blank" rel="noreferrer">LinkedIn</a>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="size-4 shrink-0 text-primary" />
                  <a className="hover:text-primary" href="https://v2.onlinejobs.ph/jobseekers/info/1327980" target="_blank" rel="noreferrer">OnlineJobs.ph</a>
                </li>
                <li className="flex items-center gap-3">
                  <ExternalLink className="size-4 shrink-0 text-primary" />
                  <a className="hover:text-primary" href="https://www.upwork.com/freelancers/~01eca9cfb92b8f48b3?mp_source=share" target="_blank" rel="noreferrer">Upwork</a>
                </li>
              </ul>
              </div>
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

        <ToolsCarousel />

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
          <WorkGrid />
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
                <a href="mailto:rommelesguerra061390@gmail.com" className="flex items-center gap-3 hover:text-primary">
                  <Mail className="size-4 text-primary" /> rommelesguerra061390@gmail.com
                </a>
                <a href="tel:09939155488" className="flex items-center gap-3 hover:text-primary">
                  <Phone className="size-4 text-primary" /> 09939155488
                </a>
                <a
                  href="https://linkedin.com/in/rommel-esguerra-13a298160"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-primary"
                >
                  <Linkedin className="size-4 text-primary" /> LinkedIn profile
                </a>
                <a href="https://v2.onlinejobs.ph/jobseekers/info/1327980" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary">
                  <Globe className="size-4 text-primary" /> OnlineJobs.ph profile
                </a>
                <a href="https://www.upwork.com/freelancers/~01eca9cfb92b8f48b3?mp_source=share" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary">
                  <ExternalLink className="size-4 text-primary" /> Upwork profile
                </a>
              </div>
            </div>
            <form
               className="card-surface space-y-4 rounded-lg p-6"
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.currentTarget;
                const data = new FormData(f);
                window.location.href = `mailto:rommelesguerra061390@gmail.com?subject=${encodeURIComponent(
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

function ToolRow({
  tools,
  pausedRef,
  reverse,
  label,
}: {
  tools: Tool[];
  pausedRef: React.RefObject<boolean>;
  reverse?: boolean;
  label: string;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (reverse) viewport.scrollLeft = viewport.scrollWidth / 2;
    const SPEED_PX_PER_MS = 0.02; // ~20 px/sec — gentle, relaxed, easy to read
    let frame = 0;
    let previous = performance.now();
    const animate = (now: number) => {
      const elapsed = Math.min(now - previous, 40);
      previous = now;
      if (!pausedRef.current) {
        const midpoint = viewport.scrollWidth / 2;
        if (reverse) {
          viewport.scrollLeft -= elapsed * SPEED_PX_PER_MS;
          if (viewport.scrollLeft <= 0) viewport.scrollLeft += midpoint;
        } else {
          viewport.scrollLeft += elapsed * SPEED_PX_PER_MS;
          if (viewport.scrollLeft >= midpoint) viewport.scrollLeft -= midpoint;
        }
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [pausedRef, reverse]);

  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  return (
    <div
      ref={viewportRef}
      className="tools-viewport"
      role="region"
      aria-label={label}
      tabIndex={0}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      <div className="flex w-max gap-4 px-5 py-2">
        {[...tools, ...tools].map((tool, index) => {
          const ToolIcon = tool.icon;
          return (
            <div
              key={`${tool.name}-${index}`}
              aria-hidden={index >= tools.length}
              className={`tool-card group flex w-52 shrink-0 items-center gap-3 rounded-lg border border-border bg-card p-4 ${tool.glow ? "tool-card-ai" : ""}`}
            >
              <span className="tool-icon flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                <ToolIcon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-foreground">{tool.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ToolsCarousel() {
  const pausedRef = useRef(false);

  return (
    <section data-section className="reveal-section border-t border-border bg-secondary/40 py-20 sm:py-24" aria-labelledby="tools-heading">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">TOOLS &amp; TECHNOLOGIES</p>
        <h2 id="tools-heading" className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">Powered by the tools I use to build smarter systems.</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">I combine CRM, automation, AI, marketing, and productivity tools to create efficient business workflows.</p>
      </div>
      <div className="tools-mask mx-auto mt-10 flex max-w-[90rem] flex-col gap-4">
        <ToolRow tools={TOOLS_ROW_ONE} pausedRef={pausedRef} label="Tools and technologies carousel, row one" />
        <ToolRow tools={TOOLS_ROW_TWO} pausedRef={pausedRef} reverse label="Tools and technologies carousel, row two" />
      </div>
    </section>
  );
}

function WorkGrid() {
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom]);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {WORK.map((w, i) => (
          <article
            key={w.title}
            style={{ transitionDelay: `${(i % 2) * 100}ms` }}
            className="reveal-card card-surface interactive-card flex flex-col overflow-hidden rounded-lg"
          >
            <div className={`grid gap-2 p-3 ${w.images.length > 1 ? "sm:grid-cols-2" : ""}`}>
              {w.images.map((img) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setZoom(img)}
                  aria-label={`Enlarge screenshot: ${img.alt}`}
                  className="group block overflow-hidden rounded-md border border-border bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </button>
              ))}
            </div>
            <div className="flex flex-1 flex-col p-6 pt-3">
              <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs text-accent">
                {w.tag}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Problem solved: </span>
                {w.problem}
              </p>
              <ul className="mt-4 space-y-2">
                {w.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {zoom && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={zoom.alt}
          onClick={() => setZoom(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_oklab,var(--background)_88%,transparent)] p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setZoom(null)}
            className="absolute right-4 top-4 rounded-full border border-border bg-card p-2 text-foreground hover:border-primary"
          >
            <X className="size-5" />
          </button>
          <img
            src={zoom.src}
            alt={zoom.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-full rounded-lg border border-border object-contain shadow-[var(--shadow-elegant)]"
          />
        </div>
      )}
    </>
  );
}
