import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const HouseList = () => {
  const navigate = useNavigate();
  const { gpId, villageId } = useParams();

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Houses in Village {villageId}</h1>
      <ScrollArea className="h-[calc(100vh-200px)] w-full">
        <div className="space-y-4 p-4">
          {Array.from({ length: 10 }, (_, i) => (
            <Button
              key={i}
              className="w-full text-left justify-start text-lg p-6"
              variant="outline"
              onClick={() => navigate(`/registration/${gpId}/${villageId}/${i + 1}`)}
            >
              House {i + 1}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default HouseList;