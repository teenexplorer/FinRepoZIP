import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Question, QUESTIONNAIRE_CONFIG } from "@/types/questionnaire";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface QuestionnaireFormProps {
  questions: Question[];
  onQuestionChange: (questionId: number, value: string) => void;
  onImagesChange: (questionId: number, files: FileList) => void;
  readOnly?: boolean;
}

export const QuestionnaireForm = ({ 
  questions, 
  onQuestionChange,
  onImagesChange,
  readOnly = false
}: QuestionnaireFormProps) => {
  return (
    <ScrollArea className="h-[400px] pr-4">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold mb-4">Questionnaire</h2>
        {questions.map((question) => {
          const config = QUESTIONNAIRE_CONFIG.find(q => q.id === question.id);
          
          return (
            <div key={question.id} className="space-y-2 p-4 border rounded-lg">
              <Label htmlFor={`q${question.id}`}>{config?.text}</Label>
              
              {config?.type === 'boolean' ? (
                readOnly ? (
                  <div className="p-2 bg-gray-50 rounded">{question.answer}</div>
                ) : (
                  <Select 
                    value={question.answer} 
                    onValueChange={(value) => onQuestionChange(question.id, value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Yes/No" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                )
              ) : null}

              {config?.requiresImage && (
                <div className="mt-4">
                  <Label htmlFor={`images${question.id}`}>Images</Label>
                  {!readOnly && (
                    <Input
                      id={`images${question.id}`}
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => {
                        if (e.target.files) {
                          onImagesChange(question.id, e.target.files);
                        }
                      }}
                    />
                  )}
                  {question.images && question.images.length > 0 && (
                    <div className="mt-2 flex gap-2 flex-wrap">
                      {question.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Question ${question.id} Image ${index + 1}`}
                          className="w-20 h-20 object-cover rounded"
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
};