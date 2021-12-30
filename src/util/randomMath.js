const bcrypt = require("bcrypt");

const {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} = require("unique-names-generator");

const getRandomSaltText = () => {
  const randomName = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
  });

  const saltRounds = 13;

  const salt = bcrypt.genSaltSync(saltRounds);
  let hash;
  for (let i = 0; i < 3; i++) {
    hash = bcrypt.hashSync(randomName, salt);
  }
  return hash;
};

const genRandomNumber = () => {
  const num1 = Math.floor((Math.random() * 1000000) / 100);

  let orNum = 0;
  for (let i = 0; i < num1; i++) {
    const num2 = Math.floor((Math.random() * 1000000) / 100);
    const num3 = Math.floor((Math.random() * 1000000) / 100);
    orNum = num2 * num3;
  }

  return orNum;
};

const genRandomArray = () => {
  const num1 = Math.floor((Math.random() * 1000000) / 1000);
  const num2 = Math.floor((Math.random() * 1000000) / 1000);
  let num3 = (num1 * num2) / 4;

  let arr = [];
  for (let i = 0; i < num3; i++) {
    let randomName = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
      style: "upperCase",
    });
    arr.push(randomName);
  }
  return arr.length;
};

module.exports = {
  getRandomSaltText,
  genRandomNumber,
  genRandomArray,
};
