export interface Question {
  id: number;
  text: string;
  requiresImage: boolean;
  answer: string;
  images?: string[];
  timestamp?: string;
}

export interface QuestionCount {
  questionNo: number;
  totalCount: number;
  todayCount: number;
}

export interface QuestionnaireStats {
  totalBlocks: number;
  totalGP: number;
  totalBeneficiaries: number;
  totalFieldInspectors: number;
}

export const QUESTIONNAIRE_CONFIG = [
  { id: 1, text: "Identification for combination", requiresImage: false, type: "boolean" },
  { id: 2, text: "Trench Cutting for foundation", requiresImage: false, type: "boolean" },
  { id: 3, text: "Materials procured", requiresImage: false, type: "boolean" },
  { id: 4, text: "Whether skilled labour are assigned", requiresImage: false, type: "boolean" },
  { id: 5, text: "Construction work started", requiresImage: false, type: "boolean" },
  { id: 6, text: "Question 6", requiresImage: false, type: "boolean" },
  { id: 7, text: "Roof casting done", requiresImage: false, type: "boolean" },
  { id: 8, text: "Question 8", requiresImage: false, type: "boolean" },
  { id: 9, text: "Construction Progress Photo", requiresImage: true, type: "image" },
  { id: 10, text: "Construction Progress Photo", requiresImage: true, type: "image" },
  { id: 11, text: "Colour to be done", requiresImage: false, type: "boolean" },
  { id: 12, text: "Completed Construction Photo", requiresImage: true, type: "image" }
];