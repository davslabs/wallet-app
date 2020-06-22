import React from "react";
import { Form } from "react-bootstrap";

const InputSelector = ({ wallets, onWalletSelect, selectedWallet }) => { 
  if(selectedWallet) {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Select an address</Form.Label>
          <Form.Control as="select" custom onChange={onWalletSelect} value={selectedWallet}>          
            {wallets.map((wallet, key) => {
              return <option key={key}>{wallet.address}</option>
            })}
          </Form.Control>
        </Form.Group>
      </Form>
    );
  } else return <h1>LOADING</h1>
};

export default InputSelector;
