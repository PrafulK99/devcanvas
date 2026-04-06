import BaseNode from './BaseNode';

export default function ExternalNode(props) {
  const { data } = props;

  return (
    <div className="flex items-center gap-2">
      <span className="text-lg">🌐</span>
      <BaseNode {...props} color="purple" data={{ ...data, label: data.label || 'External Service' }} />
    </div>
  );
}
