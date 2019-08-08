const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");

/**
 * returns a promise with the parsed csv data as array of objects
 *
 * @param filename
 * @returns {Promise<arrayOfObjects>}
 */
function parseCsvFile(filename) {
  return new Promise((resolve, reject) => {
    const result = [];
    fs.createReadStream(getPath(filename))
      .pipe(csv())
      .on("data", row => {
        result.push(parseNumbers(row));
      })
      .on("end", () => {
        // console.log('CSV file successfully processed');
        resolve(result);
      })
      .on("error", error => reject(error));
  });
}

//------------------
// helpers

function getPath(filename) {
  return path.join(__dirname, filename);
}

function parseNumbers(obj) {
  const newObj = { ...obj };
  for (const prop in newObj) {
    if (newObj.hasOwnProperty(prop) && Number(newObj[prop])) {
      newObj[prop] = Number(newObj[prop]);
    }
  }
  return newObj;
}

module.exports = {
  csv: parseCsvFile
  // add other parsers here
};
