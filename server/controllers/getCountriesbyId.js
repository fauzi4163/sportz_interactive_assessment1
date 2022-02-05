const fs = require("fs");
async function getCountriesbyId(req, res) {
  try {
    fs.readFile("../data/data.json", function (err, data) {
      // Check for errors
      if (err) throw err;

      // Converting to JSON
      const dataJSON = JSON.parse(data);

      const results = dataJSON.countries.reduce((result, c) => {
        if (c.rank == Number(req.params.countryId)) {
          result = c;
        }
        return result;
      }, {});

      res.status(200).send(results);
    });
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = getCountriesbyId;
