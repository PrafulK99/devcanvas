export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: '➕',
      title: 'Add nodes',
      description: 'Drop in APIs, Functions, or Databases onto the infinite canvas.',
      color: 'indigo',
    },
    {
      number: '2',
      icon: '➖',
      title: 'Connect logic',
      description: 'Define relationships and data flows with high-precision wires.',
      color: 'purple',
    },
    {
      number: '3',
      icon: '📤',
      title: 'Share or export',
      description: 'Send a live link or export for documentation in seconds.',
      color: 'cyan',
    },
  ];

  const colorClasses = {
    indigo: 'bg-indigo-500/20 border-indigo-500/30 text-indigo-400',
    purple: 'bg-purple-500/20 border-purple-500/30 text-purple-400',
    cyan: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400',
  };

  return (
    <section className="py-32 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-black mb-6 tracking-tight text-white">
            The Architectural Flow
          </h2>
          <p className="text-slate-300">
            Three simple steps to transform abstract code into visual clarity.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Progress Line (Desktop Only) */}
          <div className="absolute top-1/3 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-700/30 to-transparent hidden md:block"></div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              {/* Icon Circle */}
              <div
                className={`w-20 h-20 rounded-3xl ${colorClasses[step.color]} border flex items-center justify-center mb-8 shadow-2xl cursor-pointer hover:scale-110 transition-transform`}
              >
                <span className="text-4xl">{step.icon}</span>
              </div>

              {/* Title */}
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-white">
                {step.number}. {step.title}
              </h4>

              {/* Description */}
              <p className="text-slate-300 text-sm max-w-[200px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
