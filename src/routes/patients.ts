import express from 'express';
const router = express.Router();

import {
  getPatients,
  addPatient,
  getPatientById,
} from '../services/patientService';
import { toNewPatient } from '../utils';

import { Patient } from '../types';

router.get('/', (_req, res) => {
  const patients: Patient[] = getPatients().map(
    ({ id, name, gender, dateOfBirth, ssn, occupation, entries }) => {
      return { id, name, gender, dateOfBirth, ssn, occupation, entries };
    }
  );
  res.send(patients);
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
