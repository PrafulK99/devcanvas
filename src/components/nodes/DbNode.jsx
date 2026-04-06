import BaseNode from './BaseNode';

export default function DbNode(props) {
  const { data } = props;

  return (
    <div className="flex items-center gap-2">
      <span className="text-lg">🗄️</span>
      <BaseNode {...props} color="green" data={{ ...data, label: data.label || 'Database' }} />
    </div>
  );
}
