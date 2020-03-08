import React from "react";
import "./App.scss";
import TextField from "./components/TextField";

function App() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="app">
      <form onSubmit={onSubmit} className="form">
        <TextField
          type="text"
          name="name"
          placeholder="name"
          // value=""
          onChange={e => console.log(e.target.value)}
        />

        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default App;
