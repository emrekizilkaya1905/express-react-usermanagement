import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

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

app.post("/users", (req, res) => {
  const { name, email, country, contact } = req.body;
  const user = {
    id: users.length + 1,
    name: name,
    email: email,
    country: country,
    contact: contact,
  };
  users.push(user);
  res.send("New user created!");
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id === parseInt(id));
  users = users.filter((u) => u.id !== parseInt(id));
  if (!user) {
    res.status(400).send("User not found!");
  }
  res.send(users);
});

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id === parseInt(id));
  const { name, email, country, contact } = req.body;
  if (!user) {
    res.status(400).send("User not found!");
  }
  user.name = name;
  (user.email = email),
    (user.country = country),
    (user.contact = contact),
    res.send(users);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
