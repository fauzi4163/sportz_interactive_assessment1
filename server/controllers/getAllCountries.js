const fs = require("fs");

async function getAllCountries(req, res) {
  try {
    fs.readFile("../data/data.json", function (err, data) {
      // Check for errors
      if (err) throw err;

      // Converting to JSON
      const dataJSON = JSON.parse(data);
      let result = dataJSON.countries.map((c) => ({
        name: c.name,
        id: c.rank,
      }));
      res.status(200).send(result);
    });
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = getAllCountries;
