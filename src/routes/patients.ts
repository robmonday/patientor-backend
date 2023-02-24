import express from 'express';
const router = express.Router();

import {
  getPatients,
  addPatient,
  getPatientById,
  addEntryByPatientId,
  getEntriesByPatientId,
} from '../services/patientService';
import { toNewPatient, toNewPatientEntry } from '../utils';

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
  const newPatientInfo = toNewPatient(req.body);
  const addedPatient = addPatient(newPatientInfo);

  res.json(addedPatient);
});

router.get('/:id/entries', (req, res) => {
  const patientId = req.params.id;
  res.json(getEntriesByPatientId(patientId));
});

router.post('/:id/entries', (req, res) => {
  const patientId = req.params.id;
  const newEntryInfo = toNewPatientEntry(req.body);

  if (newEntryInfo) {
    const addedEntry = addEntryByPatientId(patientId, newEntryInfo);
    res.json(addedEntry);
  } else {
    res.json(getEntriesByPatientId(patientId));
  }
});

export default router;
