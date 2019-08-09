function makeFindMin(callback) {
  return function (list) {
    let lowestValue;
    return list.reduce((acc, current) => {
      const currentValue = callback(current);

      if (currentValue < lowestValue || lowestValue === undefined) {
        lowestValue = currentValue;
        return [current];
      } else if (currentValue > lowestValue) {
        return acc;
      } else {
        // currentValue === lowestValue
        return [...acc, current];
      }
    }, [])
  }
}

function makeProcessAll(callback){
  return function(list){
    return list.map(callback)
  }
}

function printResult(message){
  return function(list){
    console.log(message, list);
  }

}

// borrowed from:
// https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);



module.exports = {
  makeFindMin,
  makeProcessAll,
  pipe,
  printResult
};
