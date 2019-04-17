console.log("Davecarter.dev");
import React from "react";
import ReactDOM from "react-dom";
import { register } from "./register";
import "./index.scss";

const App = () => {
  register();
  return (
    <main>
      <header className="headingsContainer">
        <h1 className="mainHeading">davecarter.dev personal portfolio</h1>
        <h3 className="mainSubHeading">
          Some of my contributions as a frontend developer based in Barcelona.
        </h3>
        <p />
      </header>
    </main>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
