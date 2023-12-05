const hasValuesFromArray = (set, array) => Array.from(set)
  .every((element) => array.includes(element));

export default hasValuesFromArray;
