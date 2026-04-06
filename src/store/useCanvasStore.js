import { create } from 'zustand';

const nodeDefaults = {
  api: { label: 'API Endpoint', description: 'HTTP API' },
  db: { label: 'Database', description: 'Data Store' },
  function: { label: 'Function', description: 'Business Logic' },
  bug: { label: 'Bug', description: 'Issue Report' },
  external: { label: 'External Service', description: 'Third-party API' },
};

const useCanvasStore = create((set) => ({
  nodes: [
    {
      id: '1',
      type: 'api',
      data: { label: 'Start Node' },
      position: { x: 250, y: 150 },
    },
  ],
  edges: [],

  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),

  addNode: (type = 'api') =>
    set((state) => {
      const newNodeId = String(Math.max(...state.nodes.map((n) => parseInt(n.id) || 0)) + 1);
      const defaults = nodeDefaults[type] || nodeDefaults.api;
      const newNode = {
        id: newNodeId,
        type,
        data: {
          label: defaults.label,
          description: defaults.description,
        },
        position: {
          x: Math.random() * 400 + 100,
          y: Math.random() * 300 + 100,
        },
      };
      return { nodes: [...state.nodes, newNode] };
    }),
}));

export default useCanvasStore;
