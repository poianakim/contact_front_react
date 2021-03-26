import React, {useState } from "react";
import { Form } from "semantic-ui-react";

const Update = ({ contact,setUpdate,setContacts }) => {
  const [newFirst, setNewFirst] = useState(contact.firstname);
  const [newSecond, setNewSecond] = useState(contact.secondname);
  const [newNumber, setNewNumber] = useState(contact.number);

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
    event.preventDefault();
    const updated_contact = {
      first: newFirst,
      second: newSecond,
      number: newNumber,
    };
    const reponse = await fetch(`https://contact-flask-react-app.herokuapp.com/api/contacts/${contact.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updated_contact),
    });
    if (reponse.ok) {
      console.log("Contact Updated");
      await fetch(`https://contact-flask-react-app.herokuapp.com/api/contacts`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((response) => {
        response.json().then(data => setContacts(data))
      }).catch(err => console.log(err))

      setUpdate(false)
    }
  };
  return (
    <Form onSubmit={handleSubmitUpdate}>
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
        <button type="submit" id="update_submit">
          SUBMIT UPDATE
        </button>
      </Form.Field>
    </Form>
  );
};

export default Update;
