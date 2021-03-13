import Login from "./Login"
import React from "react"; 
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard"
import { ContactsProvider } from "../contexts/ContactsContext"
import { ConversationsProvider } from "../contexts/ConversationProvider"

function App() {
  const [id, setId ] = useLocalStorage();
  
  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
      <Dashboard id = {id}/>
      </ConversationsProvider>
    </ContactsProvider>
  )

  return (
     id? dashboard : <Login onIdSubmit = {setId} />
  
   
  );
}

export default App;
