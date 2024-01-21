import React from "react";
import ReactDOM from "react-dom/client";

let root = document.getElementById('root');
let h1=document.createElement('h1');
h1.innerText="Hello World Using JS";
root.appendChild(h1);
const heading = React.createElement('h1',{},'Hello World Using React!');
let rootTemp =ReactDOM.createRoot(document.getElementById('roro'));
rootTemp.render(heading); 

let father=React.createElement('div',{id:"father"},React.createElement('div',{id:"son"},[React.createElement('div',{id:"gson"},'gson'),React.createElement('div',{id:"gdau"},'gdaughter')]));
let newRoot=ReactDOM.createRoot(document.getElementById('kl'));
newRoot.render(father);