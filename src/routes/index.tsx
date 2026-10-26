import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, LineChart, Trophy } from "lucide-react";
import demo from "../assets/discord-demo.jpg";
import biologyDemo from "../assets/discord-biology-demo.jpg";
import satDemo from "../assets/satadvert.jpg";
import { Testimonials } from "@/components/testimonials";
import { FeedbackCta } from "@/components/feedback-cta";
import { totalResponses, tuition } from "@/data/survey";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AutoQP — Past papers, but make it a game" },
      { name: "description", content: "Download past papers, track your stats and compete on Discord leaderboards with AutoQP." },
      { property: "og:title", content: "AutoQP — Past papers, but make it a game" },
      { property: "og:description", content: "Download past papers, track your stats and compete on Discord leaderboards." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Download, title: "Instant past papers", text: "Find and download any past paper in seconds." },
  { icon: LineChart, title: "Track your stats", text: "See scores, streaks and weak topics over time." },
  { icon: Trophy, title: "Discord leaderboards", text: "Solve questions in your server and climb the ranks." },
];

function Index() {
  return (
    <main>
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
  <div>
    <p className="font-mono text-xs uppercase tracking-widest text-primary">Level up your revision</p>
    <h1 className="mt-4 text-5xl font-bold leading-tight md:text-6xl">
      Past papers, but make it a <span className="text-primary">game.</span>
    </h1>
    <p className="mt-6 max-w-md text-lg text-muted-foreground">
      AutoQP lets you download past papers, track your progress, and compete with friends on Discord.
    </p>
    <div className="mt-8 flex gap-3">
      <Link to="/research" className="rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground shadow-glow transition hover:opacity-90">
        See the research
      </Link>
      <a href="#testimonials" className="rounded-md border border-border px-5 py-3 font-medium transition hover:bg-secondary">
        What students say
      </a>
    </div>
  </div>

  {/* Right column: Layered image stack */}
 <div className="relative h-[500px] w-full md:h-[600px]">
  {/* Base Layer: Main Discord Demo (Large background anchor) */}
  <div className="absolute top-0 left-0 z-10 w-[75%] overflow-hidden rounded-xl border border-primary/20 bg-card shadow-2xl transition-all duration-500 hover:z-40 hover:scale-[1.02] md:-rotate-2">
    <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-chart-4" />
      <span className="h-2.5 w-2.5 rounded-full bg-chart-3" />
      <span className="h-2.5 w-2.5 rounded-full bg-primary" />
      <span className="ml-2 font-mono text-xs text-muted-foreground">#sat-practice · AutoQP bot</span>
    </div>
    <img src={demo} alt="AutoQP Discord bot answering a practice question" width={746} height={759} className="block w-full opacity-95" />
  </div>

  {/* Middle Layer: Biology Practice (Spread out to the right, balanced size) */}
  <figure className="absolute top-[25%] right-0 z-20 w-[55%] overflow-hidden rounded-xl border border-primary/20 bg-card shadow-2xl transition-all duration-500 hover:z-40 hover:scale-[1.02] md:rotate-3">
    <figcaption className="border-b border-border px-4 py-2.5 font-mono text-xs text-muted-foreground">#biology-practice · AutoQP bot</figcaption>
    <img src={biologyDemo} alt="AutoQP showing a Biology past-paper question" width={813} height={432} className="block w-full" />
  </figure>

  {/* Top Layer: SAT Score Boost Badge (Perfect accent pop, sits proudly on top) */}
  <figure className="absolute -bottom-2 left-[25%] z-30 w-[48%] overflow-hidden rounded-xl border border-primary/30 bg-card shadow-glow transition-all duration-500 hover:scale-[1.05] md:-rotate-1">
    <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-4 py-2">
      <span className="h-2 w-2 rounded-full bg-primary/60" />
      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Stats Overview</span>
    </div>
    <img src={satDemo} alt="sat score boost stats breakdown" width={813} height={432} className="block w-full" />
  </figure>
</div>


</section>


      <section className="mx-auto grid max-w-6xl gap-4 px-6 pb-16 md:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border border-border bg-card p-6">
            <f.icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </section>

      <Testimonials />

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-xl border border-primary/30 bg-card p-10 text-center">
          <p className="font-mono text-6xl font-semibold text-primary">{tuition[0]?.value}%</p>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            of {totalResponses} students we surveyed did private tuition — and most pay $30–50 a month per subject.
          </p>
          <Link to="/research" className="mt-6 inline-block font-mono text-sm text-primary hover:underline">
            Explore the full findings →
          </Link>
        </div>
      </section>
      <FeedbackCta />
    </main>
  );
}
