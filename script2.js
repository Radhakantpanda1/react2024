import React from "react";
import ReactDOM from "react-dom/client";
const heading= React.createElement("h1",{id:'head'},"react learner ceated using core react");
let root=ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
const headingUsingJSX=<h1 id="heading" className="rooot">react learner ceated using JSX</h1>
root.render(headingUsingJSX);