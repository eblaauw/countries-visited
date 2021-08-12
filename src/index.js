import React, { useState } from "react";
import ReactDOM from "react-dom";
import MapChart from "./MapChart";

function App() {
  const [content, setContent] = useState("");
  return (
    <div className="container mx-auto px-4 md:px-0 font-sans lg:w-3/4">
      <div className="mt-12 md:mt-20">
        <h1 class="text-5xl md:text-6xl font-bold relative font-title">Countries I've visited</h1>
        <div>
          <MapChart setTooltipContent={setContent} />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
