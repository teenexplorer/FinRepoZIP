import { useState, useEffect } from "react";
import { RegistrationData } from "@/types/registration";
import { Question } from "@/types/questionnaire";

const DEFAULT_QUESTIONS: Question[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  text: `Question ${i + 1}`,
  requiresImage: i >= 8, // Last 4 questions allow images
  answer: "",
  images: []
}));

export const useRegistrationData = (gpId: string, villageId: string, houseId: string) => {
  const [formData, setFormData] = useState<RegistrationData>({
    recordCount: "",
    oldReferenceID: "",
    districtLGDCode: "",
    blockLGDCode: "",
    gpLGDCode: "",
    villageLGDCode: "",
    dataYear: "",
    govtSchemeName: "",
    beneficiaryName: "",
    mobileNumber: "",
    casteName: "",
    pwlRanking: "",
    gender: "",
    emailAddress: "",
    beneficiaryAadhaarCard: "",
    bankName: "",
    branchName: "",
    ifscCode: "",
    beneficiaryAcctNumber: "",
    enquiredSurveyorName: "",
    eligibilityStatusAfterEnquiry: "",
    proposedByBlock: "",
    blockProposalDate: "",
    sanctionedByDistrict: "",
    districtSanctionDate: ""
  });

  const [questions, setQuestions] = useState<Question[]>(DEFAULT_QUESTIONS);

  useEffect(() => {
    const savedData = localStorage.getItem(`registration-${gpId}-${villageId}-${houseId}`);
    if (savedData) {
      const { formData: savedFormData, questions: savedQuestions } = JSON.parse(savedData);
      setFormData(savedFormData);
      setQuestions(savedQuestions);
    }
  }, [gpId, villageId, houseId]);

  const handleFormChange = (field: keyof RegistrationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleQuestionChange = (questionId: number, value: string) => {
    setQuestions(questions.map(q => 
      q.id === questionId ? { ...q, answer: value } : q
    ));
  };

  const handleImagesChange = async (questionId: number, files: FileList) => {
    const imageUrls = await Promise.all(
      Array.from(files).map(file => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        });
      })
    );

    setQuestions(questions.map(q =>
      q.id === questionId ? { ...q, images: [...(q.images || []), ...imageUrls] } : q
    ));
  };

  return {
    formData,
    questions,
    handleFormChange,
    handleQuestionChange,
    handleImagesChange
  };
};