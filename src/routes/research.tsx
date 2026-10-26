import { createFileRoute } from "@tanstack/react-router";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { FeedbackCta } from "@/components/feedback-cta";
import { countries, socialLife, stats, studentVoices, totalResponses, tuition, tuitionFees, tuitionReasons } from "@/data/survey";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — AutoQP" },
      { name: "description", content: "What our independent student survey revealed about tuition, costs and social life." },
      { property: "og:title", content: "Research — AutoQP" },
      { property: "og:description", content: "Independent survey findings on tuition, costs and student social life." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Research,
});

const colors = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)", "var(--chart-4)", "var(--chart-5)"];
const tip = { contentStyle: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8 }, itemStyle: { color: "var(--foreground)" }, formatter: (v: number) => `${v}%` };

function PiePanel({ title, finding, data }: { title: string; finding: string; data: { name: string; value: number }[] }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{finding}</p>
      <div className="mt-4 h-72">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius={55} outerRadius={95} paddingAngle={2} stroke="none" label={({ value }) => `${value}%`}>
              {data.map((_, i) => <Cell key={i} fill={colors[i % colors.length]} />)}
            </Pie>
            <Tooltip {...tip} />
            <Legend wrapperStyle={{ fontSize: 12, color: "var(--muted-foreground)" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function Research() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">
          Independent research · {totalResponses} students · {countries} countries
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">When we asked students about school, tuition and life — here's what they said.</h1>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-6">
              <p className="font-mono text-4xl font-semibold text-primary">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <PiePanel title="Private tuition" finding={`${tuition[0]?.value}% of students did tuition throughout school.`} data={tuition} />
          <PiePanel title="Social life in school" finding="Nearly 1 in 3 students rated their social life 4/10 or lower." data={socialLife} />
          <PiePanel title="Tuition cost per subject (monthly)" finding="Most families pay $30–50 a month — for just one subject." data={tuitionFees} />
          <PiePanel title="Why students take tuition" finding="Access to resources and mock exams were the top reasons." data={tuitionReasons} />
        </div>

        <h2 className="mt-20 text-3xl font-bold">In their own words</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {studentVoices.map((q) => (
            <blockquote key={q} className="rounded-xl border-l-2 border-primary bg-card p-5 text-sm text-muted-foreground">"{q}"</blockquote>
          ))}
        </div>
      </section>
      <FeedbackCta />
    </main>
  );
}
