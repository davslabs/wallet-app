import React from "react";
import { Form } from "react-bootstrap";

const RateSelector = ({ onCurrencySelect, currencySelected }) => {
  const rateOptions = [
    { id: 0, value: "USD" },
    { id: 1, value: "EUR" },
  ];
  return (
    <Form>
      <Form.Group>
        <Form.Control
          as="select"
          custom
          onChange={onCurrencySelect}
          value={currencySelected}
        >
          {rateOptions.map((rate, key) => {
            return (
              <option key={key} value={rate.id}>
                {rate.value}
              </option>
            );
          })}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default RateSelector;
