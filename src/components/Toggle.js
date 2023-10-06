import React, {useState} from "react";

function Toggle() {
  const [isToggled, setToggle] = useState("OFF")
  const color = isToggled ? "red" : "white"
  function handleToggle(){
    setToggle(!isToggled)
  }
  return <button style={{ background: color }} onClick={handleToggle}>{isToggled ? "ON" : "OFF"}</button>;
}

export default Toggle;
