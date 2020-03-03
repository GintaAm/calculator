/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import Col from "react-bootstrap/Col";

export default props => {
  const { size, classNameFull, value, onValueClick } = props;

  const handleClick = () => onValueClick(value);

  return (
    <Col xs={size} className={classNameFull} onClick={handleClick}>
      <div>{value}</div>
    </Col>
  );
};
