import patientData from "../../data/patients";

import { NewPatientEntry, PatientSafe } from "../types";

import { v1 as uuid } from "uuid";

export const getPatients = (): PatientSafe[] => {
  const output: PatientSafe[] = patientData;
  return output;
};

export const addPatient = (entry: NewPatientEntry) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const id: string = uuid();
  const newPatientEntry = { id, ...entry };
  patientData.push(newPatientEntry);
  return newPatientEntry;
};
