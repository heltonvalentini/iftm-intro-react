import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Mel",
      animal: "Dog",
      breed: "Chow Chow",
    }),
    React.createElement(Pet, {
      name: "Pimenta",
      animal: "Bird",
      breed: "Papagaio",
    }),
    React.createElement(Pet, { name: "Slash", animal: "Cat", breed: "Mix" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
