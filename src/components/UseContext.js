import React,{ useContext } from "react";
import { ToggleTheme } from "../App";
import Counter from "./Counter";

function UseContext(){
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  }

  return(
    <div style={themeStyle}>
      <Counter/>
    </div>
  )
}

export default UseContext;
