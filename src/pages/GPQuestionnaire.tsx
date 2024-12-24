import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { Question } from "@/types/questionnaire";
import { getQuestionCounts } from "@/utils/questionnaireUtils";

const GPQuestionnaire = () => {
  const { gpId } = useParams();
  const { toast } = useToast();
  
  const [questions, setQuestions] = useState<Question[]>([
    { id: 1, text: "Question 1", requiresImage: false, answer: "" },
    { id: 2, text: "Question 2", requiresImage: false, answer: "" },
    { id: 3, text: "Question 3", requiresImage: false, answer: "" },
    { id: 4, text: "Question 4", requiresImage: false, answer: "" },
    { id: 5, text: "Question 5", requiresImage: false, answer: "" },
    { id: 6, text: "Question 6", requiresImage: false, answer: "" },
    { id: 7, text: "Question 7", requiresImage: false, answer: "" },
    { id: 8, text: "Question 8", requiresImage: false, answer: "" },
    { id: 9, text: "Question 9", requiresImage: true, answer: "" },
    { id: 10, text: "Question 10", requiresImage: true, answer: "" },
    { id: 11, text: "Question 11", requiresImage: true, answer: "" },
    { id: 12, text: "Question 12", requiresImage: true, answer: "" },
  ]);

  const handleAnswerChange = (questionId: number, value: string) => {
    setQuestions(questions.map(q => 
      q.id === questionId ? { ...q, answer: value } : q
    ));
  };

  const handleImageUpload = (questionId: number, file: File) => {
    setQuestions(questions.map(q =>
      q.id === questionId ? { ...q, image: file } : q
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add timestamp to answered questions
    const timestampedQuestions = questions.map(q => ({
      ...q,
      timestamp: q.answer.trim() ? new Date().toISOString() : undefined
    }));
    
    const { totalCounts, todayCounts } = getQuestionCounts(timestampedQuestions);
    console.log("Question counts:", { totalCounts, todayCounts });
    
    // Here you would typically save the questions to your backend
    setQuestions(timestampedQuestions);
    
    toast({
      title: "Questionnaire Submitted",
      description: "Your responses have been saved",
    });
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">GP {gpId} Questionnaire</h1>
      <ScrollArea className="h-[calc(100vh-200px)]">
        <form onSubmit={handleSubmit} className="space-y-6">
          {questions.map((question) => (
            <div key={question.id} className="space-y-2 p-4 border rounded-lg">
              <Label htmlFor={`q${question.id}`}>{question.text}</Label>
              <Input
                id={`q${question.id}`}
                value={question.answer}
                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
              />
              {question.requiresImage && (
                <div className="mt-2">
                  <Label htmlFor={`image${question.id}`}>Upload Image</Label>
                  <Input
                    id={`image${question.id}`}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleImageUpload(question.id, file);
                    }}
                  />
                </div>
              )}
            </div>
          ))}
          <Button type="submit" className="w-full">Submit Questionnaire</Button>
        </form>
      </ScrollArea>
    </div>
  );
};

export default GPQuestionnaire;