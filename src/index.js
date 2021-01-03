import React, { useState } from "react";
import ReactDOM from "react-dom";
import MapChart from "./MapChart";

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
  
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
