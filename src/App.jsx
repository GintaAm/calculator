/* eslint-disable consistent-return */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CustomCol from "./CustomColl";
import calculation from "./helpers";
import ComponentA from "./KeybBoardHandler";

export default () => {
  const [count, setCount] = useState(0);

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
      const newCount = calculation(countArray);

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
          size={2}
          classNameFull="bg-secondary"
          value="clear"
          onValueClick={handleValueClick}
        />
        <CustomCol
          size={1}
          classNameFull="bg-danger text-white"
          value="*"
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
      <ComponentA />
    </Container>
  );
};
