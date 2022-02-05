const express = require("express");
const route = express.Router();
const multer = require("multer");
const getAllCountries = require("../controllers/getAllCountries.js");
const addCountries = require("../controllers/addCountries.js");
const getCountriesbyId = require("../controllers/getCountriesbyId.js");
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "../images");
  },
  filename: function (req, file, callback) {
    const fileName = file.originalname;
    callback(null, fileName);
  },
});
const upload = multer({ storage });

route.get("/", getAllCountries);
route.get("/country/:countryId", getCountriesbyId);
route.post("/country", upload.single("file"), addCountries);

module.exports = route;
