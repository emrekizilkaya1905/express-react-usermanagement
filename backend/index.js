import express from "express";

const app = express();

const port = 5000;
app.get("/", (req, res) => {
  res.send(users);
});

let users = [
  {
    id: 1,
    name: "Emre",
    email: "kizilkayaemre88@gmail.com",
    country: "Turkey",
    contact: "111222333",
  },
  {
    id: 2,
    name: "Ece",
    email: "kizilkayaece01@gmail.com",
    country: "Turkey",
    contact: "444555666",
  },
];

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
