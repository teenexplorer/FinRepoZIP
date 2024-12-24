import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterSectionProps {
  blocks: string[];
  activities: string[];
  onBlockChange: (value: string) => void;
  onActivityChange: (value: string) => void;
  onFetch: () => void;
}

export const FilterSection = ({
  blocks,
  activities,
  onBlockChange,
  onActivityChange,
  onFetch,
}: FilterSectionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-green-700">Select Block</h3>
        <Select onValueChange={onBlockChange}>
          <SelectTrigger>
            <SelectValue placeholder="LOV of blocks" />
          </SelectTrigger>
          <SelectContent>
            {blocks.map((block) => (
              <SelectItem key={block} value={block}>
                {block}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium text-green-700">Select Activity</h3>
        <Select onValueChange={onActivityChange}>
          <SelectTrigger>
            <SelectValue placeholder="Activity list" />
          </SelectTrigger>
          <SelectContent>
            {activities.map((activity) => (
              <SelectItem key={activity} value={activity}>
                {activity}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-end">
        <Button onClick={onFetch} className="w-full">
          Fetch
        </Button>
      </div>
    </div>
  );
};