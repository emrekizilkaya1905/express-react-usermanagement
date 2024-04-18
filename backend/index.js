import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
