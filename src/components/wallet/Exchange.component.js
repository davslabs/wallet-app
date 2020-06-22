import React from "react";
import { Card, Form } from "react-bootstrap";
import { FaEdit, FaCheck, FaTimes } from "react-icons/fa";
import RateSelector from "./../selector/RateSelector.component";

const Exchange = ({
  rate,
  editRateHandler,
  onEditRate,
  onEditRateValue,
  rateValue,
  onSaveRateValue
}) => {
  return (
    <Card style={{ width: "18rem", height: "10rem" }}>
      <Card.Body>
        <Card.Title>Exchange Rate</Card.Title>
        {(() => {
          return editRateHandler ? (
            <div>
              <Card.Link href="#" onClick={onEditRate}>
                <FaTimes />
              </Card.Link>
              <Card.Link href="#" onClick={onSaveRateValue}>
                <FaCheck />
              </Card.Link>
              <Form>
                <Form.Group controlId="formRate">
                  <Form.Control
                    type="number"
                    onChange={onEditRateValue}
                    value={rateValue}
                    min="0"
                  />
                </Form.Group>
              </Form>
            </div>
          ) : (
            <div>
              <Card.Link href="#" onClick={onEditRate}>
                <FaEdit />
              </Card.Link>
              <Card.Text>{rate}</Card.Text>
            </div>
          );
        })()}
      </Card.Body>
    </Card>
  );
};

export default Exchange;
