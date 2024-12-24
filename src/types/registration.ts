export interface RegistrationData {
  beneficiaryId: string; // Add beneficiaryId as unique identifier
  recordCount: string;
  oldReferenceID: string;
  districtLGDCode: string;
  blockLGDCode: string;
  gpLGDCode: string;
  villageLGDCode: string;
  dataYear: string;
  govtSchemeName: string;
  beneficiaryName: string;
  mobileNumber: string;
  casteName: string;
  pwlRanking: string;
  gender: string;
  emailAddress: string;
  beneficiaryAadhaarCard: string;
  bankName: string;
  branchName: string;
  ifscCode: string;
  beneficiaryAcctNumber: string;
  enquiredSurveyorName: string;
  eligibilityStatusAfterEnquiry: string;
  proposedByBlock: string;
  blockProposalDate: string;
  sanctionedByDistrict: string;
  districtSanctionDate: string;
}

export interface MISRecord extends RegistrationData {
  id: number;
  gpId: string;
  villageId: string;
  houseId: string;
  timestamp: string;
  questions: Array<{
    id: number;
    answer: string;
    images?: string[];
  }>;
}