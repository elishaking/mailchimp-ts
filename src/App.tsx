import React, { useState } from "react";
import "./App.scss";
import TextField from "./components/TextField";

function App() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="app">
      <form onSubmit={onSubmit} className="form">
        <TextField
          type="text"
          name="email"
          placeholder="email"
          // value=""
          onChange={e => {
            setEmail(e.target.value);
          }}
        />

        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default App;
