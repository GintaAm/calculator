// eslint-disable-next-line consistent-return

const doOperation = (countArray, operationIndex, operation) => {
  const firstNumber = Number(countArray[operationIndex - 1]);
  const SecondNumber = Number(countArray[operationIndex + 1]);

  // there should be a smarter way

  const newNumber =
    operation === "/" ? firstNumber / SecondNumber : firstNumber + SecondNumber;
  countArray.splice(operationIndex - 1, 3);
  countArray.push(newNumber);
  return countArray;
};

const calculation = countArray => {
  console.log(countArray);
  if (countArray.length === 1) {
    console.log(countArray[0]);

    return countArray[0];
  }

  const divisionIndex = countArray.indexOf("/");
  const newCountArray =
    divisionIndex > 0
      ? doOperation(countArray, divisionIndex, "/")
      : countArray;

  return calculation(newCountArray);
  // Can be moved to separate function
};

export default calculation;
