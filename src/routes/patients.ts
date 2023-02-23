import express from 'express';
const router = express.Router();

import {
  getPatients,
  addPatient,
  getPatientById,
} from '../services/patientService';
import { toNewPatient } from '../utils';

import { NonSensitivePatient } from '../types';

router.get('/', (_req, res) => {
  const safePatients: NonSensitivePatient[] = getPatients().map(
    ({ id, name, dateOfBirth, gender, occupation }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
    })
  );
  res.send(safePatients);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json(getPatientById(id));
});

router.post('/', (req, res) => {
  const newPatientEntry = toNewPatient(req.body);
  const addedPatient = addPatient(newPatientEntry);

  res.json(addedPatient);
});

export default router;
