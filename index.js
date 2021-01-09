function sumItems(array, flattened = []) {
  // Sum all the numbers in the array
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flattened.push(array[i]);
    } else {
      sumItems(array[i], flattened);
    }
  }
  return flattened.reduce((cv,item) => cv + item);
}

module.exports = sumItems;
