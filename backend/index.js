import express from "express";
import bodyParser from "body-parser";
import usersRouter from "./router/users.js";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 5000;
app.use("/users", usersRouter);

app.use("*", (req, res) => {
  res.status(404).send("Page not found!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
