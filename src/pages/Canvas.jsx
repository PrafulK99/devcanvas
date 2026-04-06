import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Canvas from '../components/canvas/Canvas';
import useCanvasStore from '../store/useCanvasStore';

export default function CanvasPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { addNode } = useCanvasStore();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Navbar */}
      <nav className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button
            onClick={() => navigate('/')}
            className="text-xl font-bold text-white hover:text-gray-200 transition-colors"
          >
            DevCanvas
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors font-medium">
            Share
          </button>
          <button className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors font-medium">
            Export
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors font-medium"
          >
            Back
          </button>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-64 bg-gray-800 border-r border-gray-700 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div>
                <h2 className="text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">Nodes</h2>
                <div className="space-y-2">
                  <button
                    onClick={() => addNode('api')}
                    className="w-full px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
                  >
                    + Add Node
                  </button>
                  <button
                    onClick={() => addNode('api')}
                    className="w-full text-left px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm font-medium transition-colors"
                  >
                    🔌 API
                  </button>
                  <button
                    onClick={() => addNode('db')}
                    className="w-full text-left px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm font-medium transition-colors"
                  >
                    💾 Database
                  </button>
                  <button
                    onClick={() => addNode('function')}
                    className="w-full text-left px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm font-medium transition-colors"
                  >
                    ⚙️ Function
                  </button>
                  <button
                    onClick={() => addNode('bug')}
                    className="w-full text-left px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm font-medium transition-colors"
                  >
                    🐛 Bug
                  </button>
                  <button
                    onClick={() => addNode('external')}
                    className="w-full text-left px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm font-medium transition-colors"
                  >
                    🌐 External
                  </button>
                </div>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">Actions</h2>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm font-medium transition-colors">
                    ↩️ Undo
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm font-medium transition-colors">
                    ↪️ Redo
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm font-medium transition-colors">
                    🗑️ Clear All
                  </button>
                </div>
              </div>
            </div>
          </aside>
        )}

        {/* Canvas Area */}
        <div className="flex-1 overflow-hidden">
          <Canvas />
        </div>
      </div>
    </div>
  );
}
