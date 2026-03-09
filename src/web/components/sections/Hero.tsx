"use client";

import { useRef, useState } from "react";

const assignments = [
  {
    course: "CSE 3100",
    title: "Lab 5: Memory Allocation",
    due: "Tomorrow, 11:59 PM",
    urgent: true,
  },
  {
    course: "MATH 2210Q",
    title: "WebAssign HW #8",
    due: "Wed, Feb 19",
    urgent: false,
  },
  {
    course: "ENGR 1166",
    title: "Team Project Milestone 2",
    due: "Thu, Feb 20",
    urgent: false,
  },
];

function DashboardMockup() {
  const innerRef = useRef<HTMLDivElement>(null);
  const BASE_ROT_X = 3;
  const BASE_ROT_Y = -8;

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = innerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotX = BASE_ROT_X + ((y - rect.height / 2) / rect.height) * -12;
    const rotY = BASE_ROT_Y + ((x - rect.width / 2) / rect.width) * 12;
    el.style.transition = "transform 0.08s ease";
    el.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`;
  };

  const onMouseLeave = () => {
    const el = innerRef.current;
    if (!el) return;
    el.style.transition = "transform 0.55s ease";
    el.style.transform = `rotateX(${BASE_ROT_X}deg) rotateY(${BASE_ROT_Y}deg) scale3d(1,1,1)`;
  };

  return (
    <div
      className="perspective-card animate-slide-in-right hidden lg:block w-full max-w-[500px]"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div
        ref={innerRef}
        className="perspective-card-inner"
        style={{ transform: `rotateX(${BASE_ROT_X}deg) rotateY(${BASE_ROT_Y}deg)` }}
      >
        <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-visible p-1">

          {/* Browser chrome */}
          <div className="bg-slate-50 rounded-t-2xl px-4 py-3 flex items-center gap-2 border-b border-slate-100">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 mx-8">
              <div className="bg-white rounded-lg h-7 flex items-center px-3 text-xs text-gray-400 border border-slate-200">
                huskydue.app/dashboard
              </div>
            </div>
          </div>

          {/* Dashboard body */}
          <div className="p-5 space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#1e2744] flex items-center justify-center text-white text-xs font-bold">
                  H
                </div>
                <span className="font-semibold text-[#1e2744] text-sm">Dashboard</span>
              </div>
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                    <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                    <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
                  </svg>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#5b8af5]/10 flex items-center justify-center text-[#5b8af5] text-xs font-bold">
                  J
                </div>
              </div>
            </div>

            {/* Assignment list */}
            <div className="space-y-2.5">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Due This Week
              </p>

              {assignments.map((a) => (
                <div
                  key={a.title}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${
                    a.urgent
                      ? "bg-[#f97066]/5 border-[#f97066]/20"
                      : "bg-slate-50 border-slate-100 hover:bg-slate-100/60"
                  }`}
                >
                  <div
                    className={`w-2 h-8 rounded-full flex-shrink-0 ${
                      a.urgent ? "bg-[#f97066]" : "bg-[#5b8af5]/40"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                      {a.course}
                    </p>
                    <p className="text-sm font-semibold text-[#1e2744] truncate">{a.title}</p>
                  </div>
                  <span
                    className={`text-xs font-medium whitespace-nowrap ${
                      a.urgent ? "text-[#f97066]" : "text-gray-500"
                    }`}
                  >
                    {a.due}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-gray-400">Synced 2 min ago</span>
            </div>
          </div>

          {/* Floating badge: Google Cal synced */}
          <div className="absolute -top-4 -right-4 animate-float">
            <div className="glass-card rounded-2xl p-3 shadow-lg flex items-center gap-2 border border-slate-100">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5b8af5]">
                <path d="M8 2v4" /><path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
              <span className="text-xs font-semibold text-[#1e2744] whitespace-nowrap">
                Google Cal synced
              </span>
            </div>
          </div>

          {/* Floating badge: 3 new deadlines found */}
          <div className="absolute -bottom-3 -left-4 animate-float-delayed">
            <div className="glass-card rounded-2xl p-3 shadow-lg flex items-center gap-2 border border-slate-100">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                <path d="m9 11 3 3L22 4" />
              </svg>
              <span className="text-xs font-semibold text-[#1e2744] whitespace-nowrap">
                3 new deadlines found
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [numUsers, setNumUsers] = useState(0);
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
      {/* Left copy */}
      <div className="flex-1 min-w-0">
        <div className="inline-flex items-center gap-2 bg-[#fef3c7] text-[#92400e] text-sm px-4 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
          Built for UConn students
        </div>

        <h1 className="font-[family-name:var(--font-lora)] text-5xl lg:text-6xl font-semibold leading-tight text-[#1a1a1a] mb-6">
          Never miss a{" "}
          <em className="text-[#9ca3af] not-italic font-[family-name:var(--font-lora)] italic">
            deadline
          </em>{" "}
          again.
        </h1>

        <p className="text-[#4b5563] text-lg leading-relaxed mb-8 max-w-md">
          HuskyDue pulls every assignment and due date from all your UConn courses
          into one calm, clear dashboard.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#333] transition-colors"
          >
            Get started free →
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-[#d1d5db] text-[#1a1a1a] hover:bg-white transition-colors"
          >
            See how it works
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-[#93c5fd] border-2 border-[#f0ede8]" />
            <div className="w-8 h-8 rounded-full bg-[#6ee7b7] border-2 border-[#f0ede8]" />
            <div className="w-8 h-8 rounded-full bg-[#fca5a5] border-2 border-[#f0ede8]" />
          </div>
          {numUsers > 20 && (<span className="text-sm text-[#6b7280]">{numUsers}+ Huskies already on track</span>)}
        </div>
      </div>

      {/* Right: tilt mockup */}
      <div className="flex-1 flex justify-center lg:justify-end w-full py-8 pr-8">
        <DashboardMockup />
      </div>
    </section>
  );
}
