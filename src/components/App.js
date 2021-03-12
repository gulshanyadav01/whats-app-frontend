import Login from "./Login"
import React from "react"; 
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard"

function App() {
  const [id, setId ] = useLocalStorage();

  return (
     id?<Dashboard id = {id} />: <Login onIdSubmit = {setId} />
  
   
  );
}

export default App;
