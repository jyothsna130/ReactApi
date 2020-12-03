const express = require("express");
import persons from "../model/persons";

const router = express.Router();

//Get all persons

router.get("/", (req, res) => {
  try {
    const data = persons.find().then((data) => {
      res.json(data);
    });
  } catch (err) {
    console.error(err.message);
    res.json("data not found");
  }
});

// Post persons
router.post("/", (req, res) => {
  const { firstname, lastname, age, gender } = req.body;
  const newPerson = new persons({
    firstname,
    lastname,
    age,
    gender,
  });

  newPerson.save();
  res.json({ msg: "successfully added" });
});

//Get Person ID

router.get("/:id", (req, res) => {
  persons.find({ _id: req.params.id }).then((persons) => {
    res.json(persons[0]);
  });
});

// Delete ID

router.delete("/:id", (req, res) => {
  persons.findByIdAndRemove(req.params.id).then(() => {
    res.json({ msg: "Person has been Removed" });
  });
});

// Update ID

router.put("/:id", (req, res) => {
  const { firstname, lastname, age, gender } = req.body;
  const newPerson = {};
  if (firstname) newPerson.firstname = firstname;
  if (lastname) newPerson.lastname = lastname;
  if (age) newPerson.age = age;
  if (gender) newPerson.gender = gender;

  persons
    .findByIdAndUpdate(req.params.id, { $set: newPerson }, { new: true })
    .then((persons) => {
      return res.json(persons);
    });
});

export default router;
