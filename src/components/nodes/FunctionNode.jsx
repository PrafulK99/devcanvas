import BaseNode from './BaseNode';

export default function FunctionNode(props) {
  const { data } = props;

  return (
    <div className="flex items-center gap-2">
      <span className="text-lg">⚙️</span>
      <BaseNode {...props} color="yellow" data={{ ...data, label: data.label || 'Function' }} />
    </div>
  );
}
