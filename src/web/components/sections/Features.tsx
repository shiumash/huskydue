const features = [
  {
    emoji: "🔄",
    title: "Auto-sync from HuskyCT",
    desc: "Connects to your courses and pulls assignments, quizzes, and exams automatically. Zero manual entry.",
    bg: "bg-[#eff6ff]",
  },
  {
    emoji: "📅",
    title: "Google Calendar sync",
    desc: "Every deadline lands in your calendar with smart reminders. Always up to date, automatically.",
    bg: "bg-[#f0fdf4]",
  },
  {
    emoji: "🔔",
    title: "Instant notifications",
    desc: "Get a text or email the moment a new assignment is posted or a due date shifts.",
    bg: "bg-[#fefce8]",
  },
  {
    emoji: "📋",
    title: "One dashboard",
    desc: "Every upcoming deadline across all your classes in one clean view, sorted by urgency.",
    bg: "bg-[#f9fafb]",
  },
  {
    emoji: "⚡",
    title: "Real-time updates",
    desc: "Professor changed the due date at midnight? You'll know before your alarm goes off.",
    bg: "bg-[#fff7ed]",
  },
  {
    emoji: "✨",
    title: "Smart prioritization",
    desc: "Assignments ranked by urgency so you always know exactly what to tackle first.",
    bg: "bg-[#fdf2f8]",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#f0ede8]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-widest text-[#9ca3af] uppercase mb-4">Features</p>
        <h2 className="font-[family-name:var(--font-lora)] text-4xl lg:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-14">
          Everything you need,{" "}
          <br />
          <em className="text-[#9ca3af] italic">nothing you don&apos;t.</em>
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className={`${f.bg} rounded-3xl p-8`}>
              <div className="text-4xl mb-6">{f.emoji}</div>
              <h3 className="font-semibold text-[#1a1a1a] text-base mb-2">{f.title}</h3>
              <p className="text-[#4b5563] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
