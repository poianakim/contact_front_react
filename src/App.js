import React, { useEffect, useState } from "react";
import { Grid, List } from "semantic-ui-react";
import "./App.css";
import Add from "./Components/AddForm";
import Contact from "./Components/Contact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  // inside of useEFfect promise cause error. used fetch instead.
  useEffect(() => {
    fetch("/contacts", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) =>
      response.json().then((data) => {
        setContacts(data);
      })
    );
  }, []);
  return (
    <div className="App">
      <Grid>
        <Grid.Column width={4} className="add_form">
          <h1 className="header">Add New Contact Here</h1>
          <Add style={{ margintop: 100 }} />
        </Grid.Column>
        <Grid.Column width={8} className="contact_list">
          <h1 className="header">Total Contacts: {contacts.length}</h1>
          {contacts.map((contact) => {
            return (
              <List key={contact.id}>
                <Contact contact={contact} />
              </List>
            )
          })}
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default App;
