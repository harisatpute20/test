import express from "express";
import bodyParser from "body-parser";
import { router } from "./route.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("hello world!");
});

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
