export default function Footer() {
  return (
    <footer className="bg-slate-950 w-full py-12 px-8 border-t border-slate-900 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
        {/* Left: Branding */}
        <div className="flex flex-col gap-2">
          <span className="text-lg font-black text-slate-400">DevCanvas</span>
          <p className="text-xs font-mono text-slate-500">
            © 2024 DevCanvas. Built for the Architectural Logic.
          </p>
        </div>

        {/* Center: Links */}
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="text-xs font-mono text-slate-600 hover:text-indigo-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-xs font-mono text-slate-600 hover:text-indigo-400 transition-colors"
          >
            Documentation
          </a>
          <a
            href="#"
            className="text-xs font-mono text-slate-600 hover:text-indigo-400 transition-colors"
          >
            Open Source
          </a>
          <a
            href="#"
            className="text-xs font-mono text-slate-600 hover:text-indigo-400 transition-colors"
          >
            Privacy
          </a>
        </div>

        {/* Right: Version and Social */}
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-indigo-400">
            OSS: v0.9.4
          </span>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-500 hover:text-white transition-colors cursor-pointer hover:bg-slate-800">
              💻
            </button>
            <button className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-500 hover:text-white transition-colors cursor-pointer hover:bg-slate-800">
              🐛
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
