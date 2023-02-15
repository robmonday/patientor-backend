import express from "express";
const router = express.Router();

import { getPatients } from "../services/patientService";
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

export default router;
