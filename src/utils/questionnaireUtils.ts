import { Question } from "@/types/questionnaire";

export const isQuestionAnswered = (question: Question): boolean => {
  return question.answer.trim() !== "";
};

export const getQuestionCounts = (questions: Question[]): { 
  totalCounts: { [key: number]: number },
  todayCounts: { [key: number]: number }
} => {
  const today = new Date().toDateString();
  const totalCounts: { [key: number]: number } = {};
  const todayCounts: { [key: number]: number } = {};
  
  questions.forEach(question => {
    if (isQuestionAnswered(question)) {
      // Increment total count
      totalCounts[question.id] = (totalCounts[question.id] || 0) + 1;
      
      // Check if question was answered today
      if (question.timestamp && new Date(question.timestamp).toDateString() === today) {
        todayCounts[question.id] = (todayCounts[question.id] || 0) + 1;
      }
    }
  });
  
  return { totalCounts, todayCounts };
};