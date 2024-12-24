import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

export const GPAssignment = () => {
  const [inspectors, setInspectors] = useState(Array(4).fill(""));

  const handleInspectorChange = (index: number, value: string) => {
    const newInspectors = [...inspectors];
    newInspectors[index] = value;
    setInspectors(newInspectors);
    console.log(`Updated inspector ${index + 1} to: ${value}`);
  };

  return (
    <ScrollArea className="h-[300px] w-full pr-4">
      <div className="space-y-4 p-4">
        <h3 className="text-lg font-semibold mb-6">GP Assignments</h3>
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="flex items-center gap-4 mb-4">
            <div className="w-24 flex-shrink-0">
              <Label>GP {i + 1}</Label>
            </div>
            <div className="flex-1">
              <Input
                placeholder="Name of Inspector"
                value={inspectors[i]}
                onChange={(e) => handleInspectorChange(i, e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};