const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");

const config = require("./config");

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require("./passport")(passport);

const authRoutes = require("./routes/auth");
const hospitalRoutes = require("./routes/hospital");

app.use("/api", authRoutes);
app.use("/api/hospital", hospitalRoutes);

const port = config.PORT || process.env.PORT;
app.listen(port, () => {
  console.log(`😴  > Server started @${port}`);
});
