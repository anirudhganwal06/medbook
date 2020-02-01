const Firestore = require("@google-cloud/firestore");

const db = new Firestore({
  projectId: "medbook-nitkkr",
  keyFilename: "./serviceAccountKey.json"
});

module.exports = db;