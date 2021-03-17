import React, { useEffect, useState } from "react";
import { Grid, Header, List } from "semantic-ui-react";
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
      <h1> Flask API with React Contact App</h1> 
      <Grid centered columns={4}>
        <Grid.Column>
          <Header className="header" dividing> Add New Contact Here </ Header>
          <Add style={{ margintop: 100 }} />
          </Grid.Column>
          <Grid.Column>
      <Header className="header" dividing>
        Total Contacts: {contacts.length}</Header>
          {contacts.map((contact) => {
            return (
           
              <List key={contact.id}>
                <Contact contact={contact} />
                <hr></hr>
              </List>
            )
          })}

          </Grid.Column>
      </Grid>

    </div>
  );
};

export default App;
