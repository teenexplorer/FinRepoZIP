import { RegistrationData } from "@/types/registration";
import { Question } from "@/types/questionnaire";

export const saveRegistrationData = (
  gpId: string,
  villageId: string,
  houseId: string,
  formData: RegistrationData,
  questions: Question[]
) => {
  // Generate a unique beneficiary ID if not exists
  const beneficiaryId = formData.beneficiaryId || `BEN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
  // Add beneficiary ID to form data
  const formDataWithId = {
    ...formData,
    beneficiaryId
  };

  // Check for existing record
  const misData = JSON.parse(localStorage.getItem('mis-data') || '[]');
  const existingRecordIndex = misData.findIndex(
    (record: RegistrationData) => record.beneficiaryId === beneficiaryId
  );

  // Save form data
  localStorage.setItem(
    `registration-${gpId}-${villageId}-${houseId}`,
    JSON.stringify({ formData: formDataWithId, questions })
  );

  // Update or add to MIS data
  const misRecord = {
    ...formDataWithId,
    gpId,
    villageId,
    houseId,
    questions: questions.map(q => ({
      id: q.id,
      answer: q.answer,
      images: q.images
    })),
    timestamp: new Date().toISOString()
  };

  if (existingRecordIndex >= 0) {
    misData[existingRecordIndex] = misRecord;
  } else {
    misData.push(misRecord);
  }

  localStorage.setItem('mis-data', JSON.stringify(misData));
};