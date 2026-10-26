import { MessageSquarePlus } from "lucide-react";
import { FORM_URL } from "@/data/survey";

export function FeedbackCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="flex flex-col items-center gap-6 rounded-xl border border-primary/30 bg-card p-10 text-center shadow-glow">
        <MessageSquarePlus className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold">Want to give your input?</h2>
        <p className="max-w-lg text-muted-foreground">
          Tell us about your school, tuition and study life. Every response shapes what AutoQP builds next.
        </p>
        <a href={FORM_URL} target="_blank" rel="noreferrer" className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90">
          Take the survey →
        </a>
        <div className="w-full rounded-lg border border-border bg-background/60 px-5 py-4">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">AutoQP is in beta.</span> Want to enter the Beta testing period? Text <span className="text-foreground font-semibold">coryhec</span> on Discord.
          </p>
        </div>
      </div>
    </section>
  );
}
