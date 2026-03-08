const steps = [
  {
    n: "01",
    emoji: "🔑",
    title: "Connect your UConn account",
    desc: "Sign in with your NetID. HuskyDue securely finds all your enrolled courses in seconds.",
  },
  {
    n: "02",
    emoji: "🔄",
    title: "We sync everything",
    desc: "Assignments, quizzes, exams, and announcements are pulled automatically — and your Google Calendar updates too.",
  },
  {
    n: "03",
    emoji: "🎉",
    title: "Stay ahead, effortlessly",
    desc: "Get notified about new tasks and changes. Open your dashboard anytime to see what's due across every class.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-widest text-[#9ca3af] uppercase mb-4">
          How it works
        </p>
        <h2 className="font-[family-name:var(--font-lora)] text-4xl lg:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-3">
          That&apos;s it.
        </h2>
        <p className="text-[#6b7280] text-base mb-16">
          Set up takes under 2 minutes. Then forget about it.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((s) => (
            <div key={s.n}>
              <p className="text-sm text-[#9ca3af] mb-4">{s.n}</p>
              <div className="text-4xl mb-4">{s.emoji}</div>
              <h3 className="font-semibold text-[#1a1a1a] text-lg mb-2">{s.title}</h3>
              <p className="text-[#4b5563] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
