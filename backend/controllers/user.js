import { v4 as uuid } from "uuid";

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
export const getUsers = (req, res) => {
  res.send(users);
};

export const singleUser = (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) {
    res.status(400).send("User not found!");
  }
  res.send(user);
};

export const createUser = (req, res) => {
  const { name, email, country, contact } = req.body;
  const user = {
    id: uuid(),
    name: name,
    email: email,
    country: country,
    contact: contact,
  };
  users.push(user);
  res.send("New user created!");
};

export const deleteUser = (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id === parseInt(id));
  users = users.filter((u) => u.id !== parseInt(id));
  if (!user) {
    res.status(400).send("User not found!");
  }
  res.send(users);
};

export const updateUser = (req, res) => {
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
};
