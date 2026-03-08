const problems = [
  {
    emoji: "🖱️",
    title: "Click. Click. Click.",
    desc: "Open HuskyCT. Click a course. Check assignments. Go back. Repeat for every class, every day.",
    bg: "bg-[#fef2f2]",
  },
  {
    emoji: "🔕",
    title: "Silent deadline changes.",
    desc: "Professors update due dates without any notification. You find out when it's already too late.",
    bg: "bg-[#fefce8]",
  },
  {
    emoji: "📢",
    title: "Buried announcements.",
    desc: "Critical exam info hidden in a post you never saw because you didn't check that day.",
    bg: "bg-[#f5f3ff]",
  },
];

export default function Problem() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-widest text-[#9ca3af] uppercase mb-4">The Problem</p>
        <h2 className="font-[family-name:var(--font-lora)] text-4xl lg:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-4">
          HuskyCT wasn&apos;t built for{" "}
          <em className="text-[#9ca3af] italic">your</em> workflow.
        </h2>
        <p className="text-[#4b5563] text-base max-w-lg mb-14">
          You&apos;re juggling 5+ courses and HuskyCT makes you check each one manually. That&apos;s not a system — that&apos;s a trap.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((p) => (
            <div key={p.title} className={`${p.bg} rounded-3xl p-8`}>
              <div className="text-4xl mb-6">{p.emoji}</div>
              <h3 className="font-semibold text-[#1a1a1a] text-lg mb-3">{p.title}</h3>
              <p className="text-[#4b5563] text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
