import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function App() {
  return (
  <Container> 
    <Row> 
      <Col xs={4} className="bg-info text-white"> 
        <div> 0</div>
      </Col> 
    </Row>
    <Row> 
      <Col xs={3} className="bg-secondary"> <div> clear </div></Col>
      <Col xs={1} className="bg-danger text-white"> <div> / </div></Col>
    </Row>
    <Row> 
      <Col xs={1} className="bg-secondary"> <div> 7 </div></Col>
      <Col xs={1} className="bg-secondary"> <div> 8 </div></Col>
      <Col xs={1} className="bg-secondary"> <div> 9 </div></Col>
      <Col xs={1} className="bg-danger text-white"> <div> - </div></Col>
    </Row>
    <Row> 
      <Col xs={1} className="bg-secondary"> <div> 4 </div></Col>
      <Col xs={1} className="bg-secondary"> <div> 5 </div></Col>
      <Col xs={1} className="bg-secondary"> <div> 6 </div></Col>
      <Col xs={1} className="bg-danger text-white"> <div> + </div></Col>
    </Row>
    <Row> 
      <Col xs={1} className="bg-secondary"> <div> 1 </div></Col>
      <Col xs={1} className="bg-secondary"> <div> 2 </div></Col>
      <Col xs={1} className="bg-secondary"> <div> 3 </div></Col>
      <Col xs={1} className="bg-danger text-white"> <div> = </div></Col>
    </Row>
  </Container>);
}

export default App;
