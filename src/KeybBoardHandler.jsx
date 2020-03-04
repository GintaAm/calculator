/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/prop-types */
import KeyboardEventHandler from "react-keyboard-event-handler";
import React from "react";

// is there the best way to work with handlers?
const ComponentA = props => {
  const { onKeyboardClick } = props;

  const handleKeyEvent = key =>
    console.log(`do something upon keydown event of ${key}`);
  return (
    <KeyboardEventHandler
      handleKeys={[
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "+",
        "-",
        "*",
        "/"
      ]}
      onKeyEvent={handleKeyEvent}
    />
  );
};

export default ComponentA;
