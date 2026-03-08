"use client";

import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");

  return (
    <section id="cta" className="py-32 bg-[#f0ede8]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-[family-name:var(--font-lora)] text-5xl lg:text-6xl font-semibold text-[#1a1a1a] mb-4">
          Never miss a deadline again
        </h2>
        <p className="text-[#6b7280] text-lg mb-10">
          Join the waitlist and be the first to know when HuskyDue launches. Free for all UConn students.
        </p>

        <div className="flex gap-3 max-w-lg mx-auto mb-3">
          <input
            type="email"
            placeholder="your@uconn.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white border border-[#e5e7eb] rounded-full px-5 py-3 text-sm text-[#1a1a1a] placeholder-[#9ca3af] outline-none focus:border-[#9ca3af] transition-colors"
          />
          <button className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#333] transition-colors flex items-center gap-2 flex-shrink-0">
            Join waitlist →
          </button>
        </div>

        <p className="text-[#9ca3af] text-xs">No spam, ever. Just one email when we launch.</p>
      </div>
    </section>
  );
}
