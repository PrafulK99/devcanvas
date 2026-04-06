import BaseNode from './BaseNode';

export default function ApiNode(props) {
  const { data } = props;

  return (
    <div className="flex items-center gap-2">
      <span className="text-lg">🔗</span>
      <BaseNode {...props} color="blue" data={{ ...data, label: data.label || 'API' }} />
    </div>
  );
}
