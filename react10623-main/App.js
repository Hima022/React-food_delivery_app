import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

var hOneReact = React.createElement("h1", {}, "HEADING CREATED using React");
var htmlRoot = document.getElementById("root");
//var rootReact = ReactDOM.createRoot(htmlRoot);
var jsxHeading = <h1 id="jsxHeading">Heading from JSX!!!!!</h1>;
//var jsxHeading = React.createElement("h1",{"id":"jsxHeading"},"Heading from JSX!!")
//rootReact.render(jsxHeading);
// HTML : <h1  class="head">Heading from JSX!!</h1>
// JSX  : <h1 className="head">Heading from JSX!!</h1>

var jsxHeading = <h1 id="jsxHeading">Heading from JSX!!</h1>;
var jsxHeading = (
  <div>
    <h1 id="jsxHeading">Heading from JSX!!</h1>
    <p>this is a jsx paragraph</p>
  </div>
);

//jsx

function TestComponent() {
  //return React.createElement("h2",{},"TEST HEADING");
  return <h2>This is a Test Component</h2>;
}

const HeadingComponent = () => (
  <div>
    <h1>ITs a React HeadingComponent</h1>
    <h2>this is heading 2</h2>
  </div>
);

createRoot(htmlRoot).render(<HeadingComponent />);
