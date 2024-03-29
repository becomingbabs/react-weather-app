import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function MyApp() {
  return (
    <div className="App">
      <h1>
        Weasley's Weather in a Bottle 
      </h1>
        <App/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MyApp />, rootElement);

reportWebVitals();
