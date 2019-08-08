const { makeFindMin } = require("./utils");
const { csv } = require("./fileReader");

async function weatherApp() {
  // get data
  const weatherData = await csv("/ressources/weather.csv");

  // helpers
  const temperatureSpread = ({ MxT, MnT }) => MxT - MnT;
  const findBySmallestTemperatureSpread = makeFindMin(temperatureSpread);
  const getDay = ({ Day }) => Day;

  // get result
  const result = weatherData
    .reduce(findBySmallestTemperatureSpread, [])
    .map(getDay);

  // output
  console.log("Day(s) with smallest temperature spread: ", result);
}

weatherApp();
