export default function FeaturesSection() {
  const features = [
    {
      icon: '🔌',
      title: 'Developer-first nodes',
      description: 'Highly customizable logic blocks that reflect your actual code structures and data models.',
      color: 'indigo',
    },
    {
      icon: '👁️',
      title: 'Visual debugging',
      description: 'Map out complex conditional flows to spot race conditions or logical errors before writing a single line.',
      color: 'cyan',
    },
    {
      icon: '🔗',
      title: 'Shareable links',
      description: 'Collaborate instantly with team members by sharing live canvas URLs. No installation required.',
      color: 'purple',
    },
    {
      icon: '📥',
      title: 'Export as PNG/JSON',
      description: 'Take your diagrams into documentation or export the underlying logic as structured JSON data.',
      color: 'slate',
    },
    {
      icon: '🚀',
      title: 'No login required',
      description: 'Start mapping logic immediately. We value your flow state over your credentials.',
      color: 'indigo',
    },
    {
      icon: '🌙',
      title: 'Dark mode native',
      description: 'Designed for the late-night sessions. Zero eye-strain with obsidian-based color palettes.',
      color: 'purple',
    },
  ];

  const colorClasses = {
    indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'hover:border-indigo-400/40' },
    cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'hover:border-cyan-400/40' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'hover:border-purple-400/40' },
    slate: { bg: 'bg-slate-500/10', text: 'text-slate-300', border: 'hover:border-slate-400/40' },
  };

  return (
    <section className="py-24 bg-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-indigo-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
              Core Infrastructure
            </h2>
            <h3 className="text-4xl font-bold tracking-tight text-white">
              Built for Technical Minds.
            </h3>
          </div>
          <p className="text-slate-300 max-w-sm">
            Focus on the logic. DevCanvas handles the visual architecture without getting in your way.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color];
            return (
              <div
                key={index}
                className={`group p-8 bg-slate-700/50 border border-slate-600/10 rounded-[2rem] ${colors.border} transition-all duration-500 hover:shadow-2xl hover:shadow-black/20 cursor-pointer`}
              >
                <div className={`w-12 h-12 rounded-2xl ${colors.bg} flex items-center justify-center mb-6 text-2xl`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">{feature.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
