export interface Beneficiary {
  name: string;
  referenceNo: string;
  contactNumber: string;
  blockName: string;
  surveyorName: string;
  activityName: string;
  answer?: string;
}

export interface Block {
  subdivisionName: string;
  blockName: string;
}