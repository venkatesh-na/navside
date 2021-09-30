import React from "react"
import './App.css';
import Header from "./header";
import { FaBars } from "react-icons/fa"
import { useGlobalContext } from "./context"

function App() {
  const { handleBar } = useGlobalContext()
  return (
    <React.Fragment>
      <FaBars onClick = {handleBar} className = "bar"/>
      <Header/>
    </React.Fragment>
  );
}

export default App;
