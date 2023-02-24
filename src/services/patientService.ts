import patientData from '../../data/patients';

import { NewPatientInfo, Patient, NewEntryInfo, Entry } from '../types';

import { v1 as uuid } from 'uuid';

export const getPatients = (): Patient[] => {
  const output: Patient[] = patientData;
  return output;
};

export const getPatientById = (id: string): Patient | undefined => {
  const patient: Patient | undefined = patientData.find((p) => p.id === id);
  return patient;
};

export const getEntriesByPatientId = (id: string): Entry[] | undefined => {
  const patient: Patient | undefined = patientData.find((p) => p.id === id);
  return patient?.entries;
};

export const addPatient = (newPatientInfo: NewPatientInfo): Patient => {
  const id: string = uuid(); //create id for patient
  const entries: Entry[] = []; //create empty note array for patient

  const newPatient: Patient = { id, entries, ...newPatientInfo }; //create new patient
  patientData.push(newPatient); //save to patient data
  return newPatient; //return updated patient data
};

export const addEntryByPatientId = (
  patientId: string,
  newEntryInfo: NewEntryInfo
): Patient | undefined => {
  const id: string = uuid(); //create id for entry

  const patient: Patient | undefined = patientData.find(
    //find patient
    (p) => p.id === patientId
  );

  if (!patient) {
    //if patient not found, return undefined
    return;
  }

  const newEntry: Entry = { ...newEntryInfo, id }; //otherwise, create entry

  patient.entries = [...patient.entries, newEntry]; //append entry to patient

  return patient; //return updated patient data
};
