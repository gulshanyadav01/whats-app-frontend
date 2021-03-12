import Login from "./Login"
import React from "react"; 
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard"
import { ContactsProvider } from "../contexts/ContactsContext"

function App() {
  const [id, setId ] = useLocalStorage();
  
  const dashboard = (
    <ContactsProvider>
      <Dashboard id = {id}/>
    </ContactsProvider>
  )

  return (
     id? dashboard : <Login onIdSubmit = {setId} />
  
   
  );
}

export default App;
