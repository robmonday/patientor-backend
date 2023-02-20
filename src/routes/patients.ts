import express from "express";
const router = express.Router();

import { getPatients, addPatient } from "../services/patientService";
import { toNewPatient } from "../utils";

import { PatientSafe } from "../types";

router.get("/", (_req, res) => {
  const safePatients: PatientSafe[] = getPatients().map(
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

router.post("/", (req, res) => {
  const newPatientEntry = toNewPatient(req.body);
  const addedPatient = addPatient(newPatientEntry);

  res.json(addedPatient);
});

export default router;
