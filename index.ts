import express from "express";
const app = express();

import bodyParser from "body-parser";

app.use(bodyParser.json());

app.get("/api/ping", (_req, res) => {
  res.send("pong!");
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
