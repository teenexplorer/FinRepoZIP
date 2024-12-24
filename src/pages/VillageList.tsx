import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const VillageList = () => {
  const navigate = useNavigate();
  const { gpId } = useParams();

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Villages in GP {gpId}</h1>
      <ScrollArea className="h-[calc(100vh-200px)] w-full">
        <div className="space-y-4 p-4">
          {Array.from({ length: 5 }, (_, i) => (
            <Button
              key={i}
              className="w-full text-left justify-start text-lg p-6"
              variant="outline"
              onClick={() => navigate(`/house-list/${gpId}/${i + 1}`)}
            >
              Village {i + 1}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default VillageList;