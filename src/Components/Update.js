import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";

const Update = ({ contact }) => {
  const [newFirst, setNewFirst] = useState(contact.first);
  const [newSecond, setNewSecond] = useState(contact.second);
  const [newNumber, setNewNumber] = useState(contact.number);
  useEffect(() => {}, []);
  const handleInputChange = (event) => {
    const {
      target: { value, name },
    } = event;
    if (name === "first") {
      setNewFirst(value);
    } else if (name === "second") {
      setNewSecond(value);
    } else if (name === "number") {
      setNewNumber(value);
    }
  };
  const handleSubmitUpdate = async (event) => {
    const updated_contact = {
      first: newFirst,
      second: newSecond,
      number: newNumber,
    };
    const reponse = await fetch(`/contacts/${contact.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updated_contact),
    });
    if (reponse.ok) {
      console.log("Contact Updated");
    }
  };
  return (
    <Form>
      <Form.Field>
        <input
          name="first"
          type="text"
          placeholder="First Name"
          value={newFirst}
          onChange={handleInputChange}
        />
      </Form.Field>
      <Form.Field>
        <input
          name="second"
          type="text"
          placeholder="Second Name"
          value={newSecond}
          onChange={handleInputChange}
        />
      </Form.Field>
      <Form.Field>
        <input
          name="number"
          type="tel"
          placeholder="Number"
          value={newNumber}
          onChange={handleInputChange}
        />
      </Form.Field>
      <Form.Field>
        <Button primary type="submit" onClick={handleSubmitUpdate}>
          Submit
        </Button>
      </Form.Field>
    </Form>
  );
};

export default Update;
