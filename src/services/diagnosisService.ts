import diagnoses from '../../data/diagnoses';
import { Diagnosis } from '../types';

export const getDiagnoses = (): Diagnosis[] => {
  const output: Diagnosis[] = diagnoses;
  return output;
};
