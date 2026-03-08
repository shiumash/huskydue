const reviews = [
  {
    quote:
      '"I used to check Blackboard five times a day and still miss stuff. HuskyDue saved my GPA — I got a text when my prof quietly moved a quiz deadline."',
    name: "Jordan K.",
    role: "CS, Class of '26",
    bg: "bg-[#eff6ff]",
  },
  {
    quote:
      '"The Google Calendar sync is perfect. Every assignment just shows up with the right course name. I haven\'t manually added a deadline since September."',
    name: "Sofia A.",
    role: "Biomedical Engineering, '25",
    bg: "bg-[#fff7ed]",
  },
  {
    quote:
      '"Every professor sets up Blackboard differently and it\'s chaos. HuskyDue gives me one clean list of what\'s due. It\'s like having a personal assistant."',
    name: "Marcus T.",
    role: "Business Analytics, '27",
    bg: "bg-[#f0fdf4]",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#f0ede8]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className={`${r.bg} rounded-3xl p-8 flex flex-col justify-between`}>
              <p className="text-[#1a1a1a] text-sm leading-relaxed mb-8">{r.quote}</p>
              <div>
                <p className="font-semibold text-[#1a1a1a] text-sm">{r.name}</p>
                <p className="text-[#6b7280] text-xs mt-0.5">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
