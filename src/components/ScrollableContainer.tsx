import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface ScrollableContainerProps {
  children: React.ReactNode;
  className?: string;
  height?: string;
}

export const ScrollableContainer = ({
  children,
  className,
  height = "calc(100vh - 100px)"
}: ScrollableContainerProps) => {
  return (
    <ScrollArea className={cn("w-full", className)} style={{ height }}>
      {children}
    </ScrollArea>
  );
};