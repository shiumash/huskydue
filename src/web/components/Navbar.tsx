export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/80">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-[family-name:var(--font-lora)] text-xl font-semibold text-[#1a1a1a]">
          HuskyDue
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-[#4b5563] hover:text-[#1a1a1a] transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-[#4b5563] hover:text-[#1a1a1a] transition-colors">
            How it works
          </a>
          <a href="#reviews" className="text-sm text-[#4b5563] hover:text-[#1a1a1a] transition-colors">
            Reviews
          </a>
          <a
            href="#cta"
            className="bg-[#1a1a1a] text-white text-sm px-5 py-2 rounded-full hover:bg-[#333] transition-colors"
          >
            Get started
          </a>
        </nav>
      </div>
    </header>
  );
}
