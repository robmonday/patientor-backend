import diagnoses from "../../data/diagnoses";
import { Diagnose } from "../types";

export const getDiagnoses = (): Diagnose[] => {
  const output: Diagnose[] = diagnoses;
  return output;
};
