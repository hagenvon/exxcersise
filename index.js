const { makeFindMin } = require("./utils");
const { csv } = require("./fileReader");

async function weatherTask() {
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

async function footballTask() {
  // get data
  const footballData = await csv("/ressources/football.csv");

  // helpers
  const absoluteGoalDifference = team =>
    Math.abs(team["Goals"] - team["Goals Allowed"]);
  const findBySmallestGoalDifference = makeFindMin(absoluteGoalDifference);
  const getTeam = ({ Team }) => Team;

  // get result
  const result = footballData
    .reduce(findBySmallestGoalDifference, [])
    .map(getTeam);

  // output
  console.log("Teams(s) with smallest absolute goal difference: ", result);
}

weatherTask();
footballTask();
