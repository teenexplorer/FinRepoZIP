import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectRegistrationProps {
  isOpen: boolean;
  onClose: () => void;
  blockName: string;
}

export const ProjectRegistrationDialog = ({ isOpen, onClose, blockName }: ProjectRegistrationProps) => {
  const navigate = useNavigate();
  const [subdivisionBlockId, setSubdivisionBlockId] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting project registration:", {
      subdivisionBlockId,
      blockName,
    });

    toast({
      title: "Registration Successful",
      description: "Details have been saved",
    });
    onClose();
    navigate("/gp-list");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] h-[50vh]">
        <DialogHeader>
          <DialogTitle>Project Registration - {blockName}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-full pr-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subdivisionBlockId">Subdivision Block ID</Label>
              <Input
                id="subdivisionBlockId"
                value={subdivisionBlockId}
                onChange={(e) => setSubdivisionBlockId(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              OKAY
            </Button>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
