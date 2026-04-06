export default function HeroSection({ navigate }) {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-slate-900">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#64748b 0.5px, transparent 0.5px)',
        backgroundSize: '32px 32px',
      }}></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-600/20">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Version 2.0 Alpha
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-[0.9]">
            Visualize Your Code.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              Debug Smarter.
            </span>{' '}
            <br />
            Build Faster.
          </h1>

          {/* Subheading */}
          <p className="text-lg text-slate-300 max-w-lg leading-relaxed font-light">
            A developer-first visual canvas to map logic, debug flows, and design systems — no AI, just clarity. Built for the architectural logic.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate('/canvas')}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold shadow-2xl shadow-indigo-500/30 hover:scale-105 transition-transform duration-300"
            >
              Start Building
            </button>
            <button className="px-8 py-4 rounded-xl border border-slate-600/40 text-white font-medium hover:bg-slate-800 transition-colors">
              View on GitHub
            </button>
          </div>

          {/* Trusted By */}
          <div className="flex items-center gap-6 pt-8 grayscale opacity-50">
            <span className="text-xs uppercase tracking-widest text-slate-400">Trusted by builders at</span>
            <div className="flex gap-4">
              <span className="font-bold text-lg">STACK</span>
              <span className="font-bold text-lg">NODE</span>
              <span className="font-bold text-lg">FLOW</span>
            </div>
          </div>
        </div>

        {/* Right: Visual Illustration */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center perspective">
          {/* Background Glow */}
          <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full opacity-40"></div>

          {/* Floating Nodes */}
          <div className="relative w-full h-full">
            {/* Node 1: API (top-left) */}
            <div className="absolute top-1/4 left-10 p-4 bg-slate-800/80 backdrop-blur-md border border-slate-700/30 rounded-2xl shadow-2xl w-48 animate-bounce hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-indigo-400 text-xl">🔗</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">REST API</span>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 w-full bg-slate-700/20 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-indigo-400"></div>
                </div>
                <div className="h-1.5 w-1/2 bg-slate-700/20 rounded-full"></div>
              </div>
            </div>

            {/* Node 2: Database (bottom-right) */}
            <div className="absolute bottom-1/4 right-10 p-4 bg-slate-800/80 backdrop-blur-md border border-slate-700/30 rounded-2xl shadow-2xl w-52 animate-bounce hover:scale-105 transition-transform" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-cyan-400 text-xl">🗄️</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">PostgreSQL</span>
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-700/20">
                  <span className="text-slate-400">⚙️</span>
                </div>
                <div className="flex-1 space-y-1">
                  <div className="h-2 w-full bg-slate-700/20 rounded-sm"></div>
                  <div className="h-2 w-3/4 bg-slate-700/20 rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Node 3: Function (center) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-slate-800 border-2 border-indigo-500/50 rounded-3xl shadow-2xl w-64 z-20">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400 text-xl">⚡</span>
                  <span className="text-sm font-black uppercase text-slate-100">Process_Data</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
              </div>
              <code className="text-[10px] font-mono text-slate-400 block leading-relaxed">
                async function main() {'{'}
                <br />
                &nbsp;&nbsp;const raw = await API.get();
                <br />
                &nbsp;&nbsp;return transform(raw);
                <br />
                {'}'}
              </code>
            </div>

            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
              <defs>
                <linearGradient id="grad1" x1="0%" x2="100%">
                  <stop offset="0%" style={{ stopColor: '#818cf8', stopOpacity: 0 }} />
                  <stop offset="50%" style={{ stopColor: '#818cf8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#818cf8', stopOpacity: 0.5 }} />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" x2="100%">
                  <stop offset="0%" style={{ stopColor: '#818cf8', stopOpacity: 0.5 }} />
                  <stop offset="100%" style={{ stopColor: '#a78bfa', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              <path d="M 180 180 C 250 180, 250 300, 320 300" fill="none" stroke="url(#grad1)" strokeWidth="2" />
              <path d="M 500 300 C 550 300, 550 420, 600 420" fill="none" stroke="url(#grad2)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
