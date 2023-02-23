import patientData from '../../data/patients';

import { NewPatientEntry, NonSensitivePatient } from '../types';

import { v1 as uuid } from 'uuid';

export const getPatients = (): NonSensitivePatient[] => {
  const output: NonSensitivePatient[] = patientData;
  return output;
};

export const getPatientById = (id: string): NonSensitivePatient => {
  const patient: NonSensitivePatient[] = patientData.filter((p) => p.id === id);
  return patient[0]; // return only first item in array
};

export const addPatient = (entry: NewPatientEntry) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const id: string = uuid();
  const newPatientEntry = { id, ...entry };
  patientData.push(newPatientEntry);
  return newPatientEntry;
};
