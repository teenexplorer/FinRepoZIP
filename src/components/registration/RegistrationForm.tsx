import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RegistrationData } from "@/types/registration";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RegistrationFormProps {
  formData: RegistrationData;
  onFieldChange: (field: keyof RegistrationData, value: string) => void;
}

export const RegistrationForm = ({ formData, onFieldChange }: RegistrationFormProps) => {
  return (
    <ScrollArea className="h-[600px] pr-4">
      <div className="space-y-6">
        {Object.entries(formData).map(([field, value]) => (
          <div key={field} className="space-y-2">
            <Label htmlFor={field}>
              {field
                .replace(/([A-Z])/g, ' $1')
                .split(/(?=[A-Z])/)
                .join(' ')
                .replace(/LGD/g, 'LGD')
                .replace(/ID/g, 'ID')
                .replace(/PWL/g, 'PWL')
                .replace(/IFSC/g, 'IFSC')
                .trim()}
            </Label>
            <Input
              id={field}
              value={value}
              onChange={(e) => onFieldChange(field as keyof RegistrationData, e.target.value)}
            />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};