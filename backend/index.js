import express from "express";

const app = express();

const port = 5000;
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
app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) {
    res.status(400).send("User not found!");
  }
  res.send(user);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
