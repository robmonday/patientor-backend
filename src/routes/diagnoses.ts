import express from "express";
const router = express.Router();

import { getDiagnoses } from "../services/diagnosisService";

router.get("/", (_req, res) => {
  res.send(getDiagnoses());
});

export default router;
