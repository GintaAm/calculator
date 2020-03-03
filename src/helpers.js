// eslint-disable-next-line consistent-return
const calculation = countArray => {
  console.log(countArray);
  if (countArray.length === 1) {
    console.log(countArray[0]);

    return countArray[0];
  }

  const divisionIndex = countArray.indexOf("/");
  console.log(divisionIndex);
  console.log(countArray[divisionIndex - 1]);
  console.log(countArray[divisionIndex]);
  console.log(countArray[divisionIndex + 1]);

  const newNumber =
    Number(countArray[divisionIndex - 1]) /
    Number(countArray[divisionIndex + 1]);
  console.log(newNumber);

  countArray.splice(divisionIndex - 1, 3);
  countArray.push(newNumber);
  console.log(countArray);

  calculation(countArray);

  // Can be moved to separate function
};

export default calculation;
