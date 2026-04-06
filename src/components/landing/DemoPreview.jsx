export default function DemoPreview() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-800/50 border border-slate-700/20 rounded-[3rem] overflow-hidden shadow-3xl relative group">
          {/* Toolbar UI */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-slate-700/40 flex items-center gap-6 z-30 shadow-xl">
            <div className="flex items-center gap-2 pr-6 border-r border-slate-700/20">
              <button className="text-slate-400 hover:text-indigo-400 transition-colors">
                🖱️
              </button>
              <button className="text-slate-400 hover:text-indigo-400 transition-colors">
                ✋
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-[10px] font-bold uppercase text-slate-400 hover:text-white transition-colors">
                Node
              </button>
              <button className="text-[10px] font-bold uppercase text-slate-400 hover:text-white transition-colors">
                Group
              </button>
              <button className="text-[10px] font-bold uppercase text-slate-400 hover:text-white transition-colors">
                Label
              </button>
            </div>
            <div className="pl-6 border-l border-slate-700/20">
              <button className="bg-indigo-600 text-white text-[10px] px-3 py-1 rounded-md font-bold uppercase hover:bg-indigo-700 transition-colors">
                Export
              </button>
            </div>
          </div>

          {/* Canvas Background */}
          <div
            className="h-[700px] w-full relative overflow-hidden flex items-center justify-center"
            style={{
              backgroundImage: 'radial-gradient(#334155 0.5px, transparent 0.5px)',
              backgroundSize: '32px 32px',
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-slate-950/40"></div>

            {/* Floating Demo Nodes */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Mock Nodes */}
                <div className="grid grid-cols-2 gap-32">
                  {/* Node 1 */}
                  <div className="bg-slate-900/90 p-5 rounded-2xl border border-indigo-500/20 w-56 shadow-2xl backdrop-blur-md hover:border-indigo-400/40 transition-all group/node">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-indigo-400"></div>
                      <span className="text-[10px] font-bold text-slate-200">Auth_Module</span>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 w-full bg-slate-700/30 rounded"></div>
                      <div className="h-2 w-2/3 bg-slate-700/30 rounded"></div>
                    </div>
                  </div>

                  {/* Node 2 */}
                  <div className="bg-slate-900/90 p-5 rounded-2xl border border-purple-500/20 w-56 shadow-2xl backdrop-blur-md translate-y-24 hover:border-purple-400/40 transition-all group/node">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                      <span className="text-[10px] font-bold text-slate-200">Data_Warehouse</span>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 w-full bg-slate-700/30 rounded"></div>
                      <div className="h-2 w-1/2 bg-slate-700/30 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
                  <defs>
                    <linearGradient id="demoGrad" x1="0%" x2="100%">
                      <stop offset="0%" style={{ stopColor: '#818cf8', stopOpacity: 0 }} />
                      <stop offset="50%" style={{ stopColor: '#818cf8', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#818cf8', stopOpacity: 0 }} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 300 200 Q 400 250, 500 350"
                    fill="none"
                    stroke="url(#demoGrad)"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>

            {/* Zoom Controls */}
            <div className="absolute bottom-8 right-8 flex flex-col gap-2 z-30">
              <button className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/40 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-colors shadow-lg">
                ➕
              </button>
              <button className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/40 flex items-center justify-center text-slate-400 hover:bg-slate-700 transition-colors shadow-lg">
                ➖
              </button>
            </div>
          </div>

          {/* Bottom Text Overlay */}
          <div className="absolute bottom-12 left-12 max-w-sm z-30">
            <div className="text-[10px] font-black uppercase text-indigo-400 tracking-[0.4em] mb-2">
              Live Preview
            </div>
            <h4 className="text-2xl font-bold mb-3 text-white">
              Professional canvas for high-output engineers.
            </h4>
            <p className="text-slate-300 text-sm">
              Experience the speed of a native app with the accessibility of a web tool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
