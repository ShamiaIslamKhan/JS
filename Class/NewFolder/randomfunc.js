function getRandomIntNumber(min, max) {
  min = Math.ceil(min); // Ensure minimum is an integer
  max = Math.floor(max); // Ensure maximum is an integer
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}

getRandomIntNumber(2,10);