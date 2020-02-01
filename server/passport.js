const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const db = require("./db");
const config = require("./config");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.jwt.secret;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      const userRef = db.collection("users").doc(jwt_payload.aadhar);
      const user = await userRef.get();
      if (user.exists) {
        return done(null, user);
      }
      return done(null, false);
    })
  );
};
