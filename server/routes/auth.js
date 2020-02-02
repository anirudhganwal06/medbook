const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const db = require("../db");
const config = require("../config");

router.post("/signup", async (req, res) => {
  try {
    const errors = {};
    const isValid = true;
    // const { errors, isValid } = validateRegisterInput(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    let { name, aadhar, mobile, password } = req.body;
    let userRef = db.collection("users").doc(aadhar);
    let user = await userRef.get();
    if (user.exists) {
      errors.aadhar = "Aadhar number already registered!";
      return res.status(400).json(errors);
    } else {
      bcrypt.genSalt(3, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
          if (err) throw err;
          password = hash;
          const newUser = {
            name,
            mobile,
            password
          };
          await db
            .collection("users")
            .doc(aadhar)
            .set(newUser);
          return res.json({
            message: "User added to database!"
          });
        });
      });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const errors = {};
    const isValid = true;
    // const { errors, isValid } = validateLoginInput(req.body);
    
    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const { aadhar, password } = req.body;
    
    let userRef = db.collection("users").doc(aadhar);
    let user = await userRef.get();
    if (!user.exists) {
      errors.aadhar = "User not found";
      console.log("backend login")
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.data().password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = {
          aadhar: user.id,
          name: user.data().name,
          mobile: user.data().mobile,
          records: user.data().records
        }; // Create JWT Payload
        
        // Sign Token
        jwt.sign(
          payload,
          config.jwt.secret,
          { expiresIn: 360000 },
          (err, token) => {
            console.log("sending res");
            res.json({
              message: "User signed in successfully!",
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
