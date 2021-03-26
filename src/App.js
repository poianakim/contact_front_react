import React, { useEffect, useState } from "react";
import { Grid, Header, List } from "semantic-ui-react";
import "./App.css";
import Add from "./Components/AddForm";
import Contact from "./Components/Contact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  // inside of useEFfect promise cause error. used fetch instead.
  useEffect(() => {
    fetch("https://contact-flask-react-app.herokuapp.com/api/contacts", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) =>
      response.json().then((data) => {
        setContacts(data);
      })
    ).catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <div className="App">
      <h1 className="title"> 👥 React Contact App 📒</h1> 
      <Grid centered columns={4}>
        <Grid.Column>
          <Header className="header" dividing> Add New Contact Here </ Header>
          <Add style={{ margintop: 100 }} setContacts={setContacts} />
          </Grid.Column>
          <Grid.Column>
      <Header className="header" dividing>
        Total Contacts: {contacts.length}</Header>
          {contacts.map((contact) => {
            return (           
              <List key={contact.id}>
                <Contact contact={contact} setContacts={setContacts}/>
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
