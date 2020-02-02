const express = require("express");
const bcrypt = require("bcryptjs");

const db = require("../db");

const router = express.Router();

router.post("/record", async (req, res) => {
  const record = req.body;
  let userRef = db.collection("users").doc(record.aadhar);
  let user = await userRef.get();
  if (user.exists) {
    let records = user.data().records;
    records.push({
      date: new Date(),
      hostipalId: record.hostipalId,
      image: record.image,
      desc: record.desc
    });
    await userRef.update({
      records: records
    });
    return res.json({
      message: "Record added to existing user!" 
    });
  } else {
    bcrypt.genSalt(3, (err, salt) => {
      bcrypt.hash(record.name, salt, async (err, hash) => {
        if (err) throw err;
        const newUser = {
          name: record.name,
          password: hash,
          aadhar: record.aadhar,
          records: [
            {
              date: new Date(),
              hostipalId: record.hostipalId,
              image: record.image,
              desc: record.desc
            }
          ]
        };
        console.log(newUser)
        await db
          .collection("users")
          .doc(record.aadhar)
          .set(newUser);
        return res.json({
          message: "New User added and record is saved!"
        });
      });
    });
  }
});

// hostipal id
// aadhar
// name
// password
// prescription image
// desc

module.exports = router;