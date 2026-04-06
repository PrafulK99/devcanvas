import { Handle, Position } from 'reactflow';

export default function BaseNode({ data, color = 'blue', isConnecting, selected }) {
  const colorClasses = {
    blue: 'border-blue-500 bg-blue-50 dark:bg-blue-900',
    green: 'border-green-500 bg-green-50 dark:bg-green-900',
    purple: 'border-purple-500 bg-purple-50 dark:bg-purple-900',
    red: 'border-red-500 bg-red-50 dark:bg-red-900',
    yellow: 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900',
  };

  const colorClass = colorClasses[color] || colorClasses.blue;

  return (
    <>
      <Handle type="target" position={Position.Top} />

      <div
        className={`
          px-5 py-4 rounded-lg border-2 shadow-md
          w-48 transition-all duration-200 ease-out
          ${colorClass}
          ${selected ? 'border-4 shadow-xl ring-2 ring-offset-2 ring-blue-400' : ''}
          hover:shadow-lg hover:scale-105 cursor-pointer
          ${isConnecting ? 'opacity-60' : 'opacity-100'}
        `}
      >
        <h3 className="font-bold text-sm leading-tight text-gray-900 dark:text-white mb-1 truncate">
          {data.label}
        </h3>
        {data.description && (
          <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-300 line-clamp-2">
            {data.description}
          </p>
        )}
      </div>

      <Handle type="source" position={Position.Bottom} />
    </>
  );
}

