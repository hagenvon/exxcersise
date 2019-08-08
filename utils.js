function makeFindMin(callback) {
  let lowestValue;
  return function(acc, current) {
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
  };
}

module.exports = {
  makeFindMin
};
