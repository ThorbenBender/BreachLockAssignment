const express = require("express");
const db = require("../data/dbConfig");
const AddCsvRoute = express.Router();

AddCsvRoute.post("/csv", async (req,res) => {
  try {
    result = await addArrayCsvData(req.body);
    if (result) {
      res.json(result);
    } else {
      res.json('There was a problem there was a problem with adding your data to the database!');
    }
  } catch (err) {
    res.json(err.message);
  }
});


function addArrayCsvData(array) {
  let error = false;
  let result = array.map(async (row) => {
    try {
      let data = await db("Security").insert(row);
      if (data.hasOwnProperty('client.driver.ERROR')) {
        error = true;
      }
      return data;
    } catch (err) {
      return err.message;
    }
  })
  if (error) {
    return false;
  } else {
    return result;
  }
}

module.exports = AddCsvRoute;
