import React, { useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";

const Add = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [number, setNumber] = useState("");

  const handleInputChange = (event) => {
    const {
      target: { value, name },
    } = event;
    if (name === "first") {
      setFirst(value);
    } else if (name === "second") {
      setSecond(value);
    } else {
      setNumber(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const new_contact = { first, second, number };
    const reponse = await fetch("/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new_contact),
    });
    if (reponse.ok) {
      console.log("Contact added");
    }
  };
  return (
    <Form>
      <Form.Field>
        <Form.Input
          required
          name="first"
          type="text"
          placeholder="First Name"
          value={first}
          onChange={handleInputChange}
        />
      </Form.Field>
      <Form.Field>
        <Form.Input
          name="second"
          type="text"
          placeholder="Second Name"
          value={second}
          onChange={handleInputChange}
        />
      </Form.Field>
      <Form.Field required>
        <Input
          name="number"
          type="tel"
          placeholder="Phone Number"
          value={number}
          onChange={handleInputChange}
        />
      </Form.Field>
      <Form.Field>
        <Button primary type="submit" onClick={handleSubmit}>
          {" "}
          Submit
        </Button>
      </Form.Field>
    </Form>
  );
};

export default Add;
