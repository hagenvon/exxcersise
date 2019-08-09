const { makeFindMin, makeProcessAll, pipe, printResult } = require("./utils");
const { csv } = require("./fileReader");

async function weatherTask() {
  // get data
  const weatherData = await csv("/ressources/weather.csv");

  // helpers
  const temperatureSpread = ({ MxT, MnT }) => MxT - MnT;
  const findBySmallestTemperatureSpread = makeFindMin(temperatureSpread);
  const getDay = makeProcessAll(({ Day }) => Day);

  // get result & output
  return pipe(
      findBySmallestTemperatureSpread,
      getDay,
      printResult("Day(s) with smallest temperature spread: ")
  )(weatherData);
}

async function footballTask() {
  // get data
  const footballData = await csv("/ressources/football.csv");

  // helpers
  const absoluteGoalDifference = team =>
      Math.abs(team["Goals"] - team["Goals Allowed"]);
  const findBySmallestGoalDifference = makeFindMin(absoluteGoalDifference);
  const getTeam = makeProcessAll(({ Team }) => Team);

  // get result & output
  return pipe(
      findBySmallestGoalDifference,
      getTeam,
      printResult("Teams(s) with smallest absolute goal difference: ")
  )(footballData);
}

weatherTask();
footballTask();
