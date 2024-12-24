import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { RegistrationForm } from "@/components/registration/RegistrationForm";
import { QuestionnaireForm } from "@/components/registration/QuestionnaireForm";
import { useRegistrationData } from "@/hooks/useRegistrationData";
import { saveRegistrationData } from "@/utils/storage";

const Registration = () => {
  const { gpId, villageId, houseId } = useParams();
  const { toast } = useToast();
  const { formData, questions, handleFormChange, handleQuestionChange } = useRegistrationData(
    gpId!,
    villageId!,
    houseId!
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveRegistrationData(gpId!, villageId!, houseId!, formData, questions);
    toast({
      title: "Success",
      description: "Registration data has been saved",
    });
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Registration Form</h1>
      <ScrollArea className="h-[calc(100vh-200px)]">
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <RegistrationForm formData={formData} onFieldChange={handleFormChange} />
          <QuestionnaireForm questions={questions} onQuestionChange={handleQuestionChange} />
          <Button type="submit" className="w-full">Submit Registration</Button>
        </form>
      </ScrollArea>
    </div>
  );
};

export default Registration;