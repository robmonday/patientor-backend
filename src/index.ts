import express from "express";
const app = express();
import bodyParser from "body-parser";
import cors from "cors";

import diagnoseRouter from "./routes/diagnoses";

app.use(bodyParser.json());
app.use(cors());

const PORT = 3001;

// routes go here
app.get("/ping", (_req, res) => {
  console.log("someeone pinged here");
  res.send("pong");
});

app.use("/api/diagnoses", diagnoseRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
