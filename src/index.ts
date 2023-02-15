import express from "express";
const app = express();
import bodyParser from "body-parser";
import cors from "cors";

import diagnoseRouter from "./routes/diagnoses";
import patientRouter from "./routes/patients";

app.use(bodyParser.json());
app.use(cors());

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.use("/api/diagnoses", diagnoseRouter);
app.use("/api/patients", patientRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
