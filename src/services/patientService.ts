import patientData from '../../data/patients';

import { NewPatientEntry, Patient, Entry } from '../types';

import { v1 as uuid } from 'uuid';

export const getPatients = (): Patient[] => {
  const output: Patient[] = patientData;
  return output;
};

export const getPatientById = (id: string): Patient => {
  const patient: Patient[] = patientData.filter((p) => p.id === id);
  return patient[0]; // return only first item in array
};

export const addPatient = (entry: NewPatientEntry) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const id: string = uuid();
  const entries: Entry[] = [];
  const newPatientEntry = { id, entries, ...entry };
  patientData.push(newPatientEntry);
  return newPatientEntry;
};
