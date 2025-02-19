
export type UserData = {
  dateOfBirth: Date;
  education: {
    level: 'high_school' | 'bachelors' | 'masters';
    stream?: string;
    yearOrSemester: number;
  };
  category: 'general' | 'sc' | 'st' | 'obc' | 'ews';
  gender: 'male' | 'female' | 'transgender';
  isPWD: boolean;
  maritalStatus: 'single' | 'married' | 'divorced' | 'widowed';
  domicileState: string;
  nationality: string;
  sectorPreference: 'defence' | 'civil_services' | 'banking' | 'railways' | 'teaching' | 'law' | 'medical' | 'engineering';
};

export type ExamCriteria = {
  id: string;
  name: string;
  ageRange: {
    min: number;
    max: number;
  };
  education: {
    minimumQualification: string;
    requiredStream?: string[];
  };
  categoryEligible: string[];
  genderEligible: string[];
  pwdEligible: boolean;
  maritalStatusRequired?: string[];
  domicileRequired?: string[];
  nationalityRequired: string[];
  attemptLimit?: number;
  relaxations?: {
    age?: {
      sc?: number;
      st?: number;
      obc?: number;
      pwd?: number;
    };
  };
};
