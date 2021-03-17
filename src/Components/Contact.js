import React, { useState } from "react";
import {Container, } from "semantic-ui-react";
import Update from "./Update";

const Contact = ({ contact }) => {
  const [update, setUpdate] = useState(false);
  

  const toggleUpdate = () => {
    update ? setUpdate(false) : setUpdate(true);
  };
  const handleDelete = async (event)=>{
    event.preventDefault();
    let confmsg = window.confirm('Do you want to delete this contact ?')
    if(confmsg) {
      const response = await fetch(`/contacts/${contact.id}`, {
        method:'DELETE'
      })
      if (response.ok) {
        console.log('Contact Deleted Successfully')
        window.location.reload();
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

            <h3 className="header">
            NAME
            </h3>
            <h3>
             {contact.firstname} {contact.secondname}
            </h3>
  <h3 className="header">
  NUMBER  
  </h3>
  <h3>
  {contact.number}
  </h3>
          <button style={{marginRight:10, marginBottom:10}} type="submit" name="update"onClick={toggleUpdate}>
            UPDATE
          </button>
          <button  type="submit" name="delete" onClick={handleDelete}>DELETE
          </button>
        </Container>
      )}
    </div>
  )
}

export default Contact;
