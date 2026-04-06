export default function Navbar({ navigate }) {
  return (
    <nav className="fixed top-4 inset-x-4 rounded-2xl border border-slate-700/20 bg-slate-900/70 backdrop-blur-xl shadow-2xl shadow-black/50 z-50 max-w-7xl mx-auto left-1/2 -translate-x-1/2 flex justify-between items-center px-6 py-3">
      {/* Logo and Navigation Links */}
      <div className="flex items-center gap-8">
        <button
          onClick={() => navigate('/')}
          className="text-xl font-bold tracking-tight text-slate-100 hover:text-white transition-colors"
        >
          DevCanvas
        </button>
        <div className="hidden md:flex gap-6 items-center">
          <a
            href="#"
            className="text-indigo-400 border-b-2 border-indigo-500 pb-1 text-sm font-medium uppercase tracking-wider"
          >
            Explore
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-slate-200 transition-all duration-300 text-sm font-medium uppercase tracking-wider"
          >
            Docs
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-slate-200 transition-all duration-300 text-sm font-medium uppercase tracking-wider"
          >
            Changelog
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate('/canvas')}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/20 hover:scale-105 transition-transform duration-150"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
