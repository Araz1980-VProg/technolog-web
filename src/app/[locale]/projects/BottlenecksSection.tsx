import { CheckCircle2, Circle } from 'lucide-react';

interface Bottleneck {
  task: string;
  isSolved: boolean;
}

export const BottlenecksSection = ({ bottlenecks }: { bottlenecks: Bottleneck[] }) => {
  if (!bottlenecks || bottlenecks.length === 0) return null;

  return (
    <div className="my-6">
      <h3 className="text-xl font-semibold text-white mb-4">Technical Bottlenecks</h3>
      <ul className="space-y-3">
        {bottlenecks.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            {/* آیکون‌ها: استفاده از خاکستری خنثی */}
            <span className={item.isSolved ? "text-gray-400" : "text-gray-500"}
            style={item.isSolved ? { color: '#22d3ee' } : {}}>
              {item.isSolved ? <CheckCircle2 size={20} /> : <Circle size={20} />}
              
            </span>
            {/* متن‌ها: سفید برای انجام‌نشده، خاکستری برای انجام‌شده */}
            <span className={`text-sm ${item.isSolved ? "line-through" : "text-gray-200"}`}
                style={item.isSolved ? { color: '#22d3ee' } : {}}>
                {item.task}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
