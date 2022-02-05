const fs = require("fs");
async function addCountries(req, res) {
  let country = {
    name: "POW POW",
    continent: "America",
    flag: "images/Canada.png",
    rank: 12,
  };
  try {
    if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false,
      });
    }
    let data = fs.readFileSync("../data/data.json", (err) => {
      if (err) throw err;
    });

    // Converting to JSON
    let dataJSON = JSON.parse(data);
    //check for duplicacy
    let isThere = dataJSON.countries.find((c) => {
      if (c.name == country.name) return c;
    });

    if (!isThere) {
      isThere = dataJSON.countries.find((c) => {
        if (c.rank == country.rank) return c;
      });
    }

    if (isThere) throw "this country already exist";
    dataJSON.countries.push(country);

    fs.writeFile("../data/data.json", JSON.stringify(dataJSON), (err) => {
      // Checking for errors
      if (err) throw err;

      res.status(200).send("data stored!!");
    });
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = addCountries;
