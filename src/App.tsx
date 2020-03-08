import React from "react";
import "./App.scss";
import TextField from "./components/TextField";

function App() {
  return (
    <div className="App">
      <TextField
        type="text"
        name="name"
        placeholder="name"
        value=""
        onChange={e => console.log(e.target.value)}
      />
    </div>
  );
}

export default App;
