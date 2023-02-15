import patients from "../../data/patients";
import { PatientSafe } from "../types";

export const getPatients = (): PatientSafe[] => {
  const output: PatientSafe[] = patients;
  return output;
};
