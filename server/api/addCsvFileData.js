const express = require("express");
const db = require("../data/dbConfig");
const AddCsvRoute = express.Router();

AddCsvRoute.post("/csv", async (req,res) => {
  try {
    result = await addArrayCsvData(req.body);
    console.log(result[0])
    if (result) {
      console.log(result[0])
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
      console.log(data.hasOwnProperty('client.driver'));
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
