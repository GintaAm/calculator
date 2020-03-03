/* eslint-disable consistent-return */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CustomCol from "./CustomColl";
// import calculation from "./helpers";

export default () => {
  const [count, setCount] = useState(0);

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

  const handleValueClick = value => {
    if (value === "clear") {
      setCount(0);
      return;
    }

    if (count === 0) {
      setCount(value);
      return;
    }

    // should be moved to helper function
    if (value === "=") {
      const countArray = count.split(" ");
      const newCount = 0;
      console.log(calculation(countArray));

      setCount(newCount);
      return;
    }

    const numberValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    // can be moved to helper function, is space needed
    const newValue =
      numberValues.indexOf(value) === -1 ||
      numberValues.indexOf(
        count.charAt(count.length - 1) || count.toString()
      ) === -1
        ? ` ${value}`
        : value;

    const newCount = count === 0 ? value : `${count}${newValue}`;
    setCount(newCount);
  };

  return (
    <Container>
      <Row>
        <CustomCol size={4} classNameFull="bg-info text-white" value={count} />
      </Row>
      <Row>
        <CustomCol
          size={3}
          classNameFull="bg-secondary"
          value="clear"
          onValueClick={handleValueClick}
        />
        <CustomCol
          size={1}
          classNameFull="bg-danger text-white"
          value="/"
          onValueClick={handleValueClick}
        />
      </Row>
      <Row>
        <CustomCol
          size={1}
          classNameFull="bg-secondary"
          value="7"
          onValueClick={handleValueClick}
        />
        <CustomCol
          size={1}
          classNameFull="bg-secondary"
          value="8"
          onValueClick={handleValueClick}
        />
        <CustomCol
          size={1}
          classNameFull="bg-secondary"
          value="9"
          onValueClick={handleValueClick}
        />
        <CustomCol
          size={1}
          classNameFull="bg-danger text-white"
          value="-"
          onValueClick={handleValueClick}
        />
      </Row>
      <Row>
        <CustomCol
          size={1}
          classNameFull="bg-secondary"
          value="4"
          onValueClick={handleValueClick}
        />
        <CustomCol
          size={1}
          classNameFull="bg-secondary"
          value="5"
          onValueClick={handleValueClick}
        />
        <CustomCol
          size={1}
          classNameFull="bg-secondary"
          value="6"
          onValueClick={handleValueClick}
        />
        <CustomCol
          size={1}
          classNameFull="bg-danger text-white"
          value="+"
          onValueClick={handleValueClick}
        />
      </Row>
      <Row>
        <CustomCol
          size={1}
          classNameFull="bg-secondary"
          value="1"
          onValueClick={handleValueClick}
        />
        <CustomCol
          size={1}
          classNameFull="bg-secondary"
          value="2"
          onValueClick={handleValueClick}
        />
        <CustomCol
          size={1}
          classNameFull="bg-secondary"
          value="3"
          onValueClick={handleValueClick}
        />
        <CustomCol
          size={1}
          classNameFull="bg-danger text-white"
          value="="
          onValueClick={handleValueClick}
        />
      </Row>
    </Container>
  );
};
