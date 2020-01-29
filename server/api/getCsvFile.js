const express = require("express");
const db = require("../data/dbConfig");
const { convertArrayToCSV } = require('convert-array-to-csv');


const getCsvRoute = express.Router();


getCsvRoute.get("/all", async (req, res) => {
    try {
        data = await db("Security");
        if (data) {
            res.status(200).json(data);
        }
    } catch (error) {
        res.json(error);
    }
})


getCsvRoute.get("/csvFile", async (req, res) => {
    header = ['id', 'cvss', 'title', 'Vulnerability', 'Solution', 'reference'];
    try {
        data = await db("Security");
        if (data) {
            const cvsFile = convertArrayToCSV(data, {header, separator: ','});
            res.json(cvsFile);
        }
    } catch (error) {
        res.json(error);
    }
})

module.exports = getCsvRoute;