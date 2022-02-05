const express = require("express");
const API = require("./routes/API.js");
var cors = require("cors");
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/API", API);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
