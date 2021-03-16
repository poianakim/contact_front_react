import React, { useState } from "react";
import { Header, Button, Container } from "semantic-ui-react";
import Update from "./Update";

const Contact = ({ contact }) => {
  const [update, setUpdate] = useState(false);
  const toggleUpdate = () => {
    update ? setUpdate(false) : setUpdate(true);
  };
  const handleDelete = async ()=>{
    let confmsg = window.confirm('Do you want to delete this contact ?')
    if(confmsg) {
      const response = await fetch(`/contacts/${contact.id}`, {
        method:'DELETE'
      })
      if (response.ok) {
        window.alert('Contact has been deleted')
      }
    } else {
      return;
    }
  }
  return (
    <div>
      {update ? (
        <Update contact={contact} />
      ) : (
        <Container>
          <Header>
            👥 Name : {contact.firstname}, {contact.secondname}
          </Header>
          <Header>📞 Number : {contact.number}</Header>
          <Button positive onClick={toggleUpdate}>
            Update
          </Button>
          <Button negative onClick={handleDelete}>Delete</Button>
        </Container>
      )}
    </div>
  )
}

export default Contact;
