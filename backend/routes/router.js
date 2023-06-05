const express = require("express");
const router = new express.Router();
const conn = require("../db/mongodb");

router.post("/update", async (req, res) => {
  var myquery = { _id: req.body.Id };
  var newvalues = {
    $set: { username: req.body.username, feedback: req.body.feedback },
  };
  await conn
    .updateOne(myquery, newvalues)
    .then((result) => {
      res.status(201).json({ status: 201, data: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/register", async (req, res) => {
  const username = req.body.username;
  const feedback = req.body.feedback;
  await conn
    .insertMany([{ username, feedback }])
    .then((result) => {
      res.status(201).json({ status: 201, data: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/getdata", (req, res) => {
  conn
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// delete user
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  conn
    .deleteOne({ _id: id })
    .then((result) => {
        res.status(201).json({ status: 201, data: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
