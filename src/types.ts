export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

export interface Entry {
  description: string;
  createDate: string; //guess
  specialistId: string; //guess
  diagnosisId: string; //guess
}

export interface Patient {
  id: string;
  name: string;
  ssn: string;
  occupation: string;
  gender: Gender;
  dateOfBirth: string;
  entries: Entry[];
}

export type NewPatientEntry = Omit<Patient, 'id' | 'entries'>;

export type NonSensitivePatient = Omit<Patient, 'ssn' | 'entries'>;
