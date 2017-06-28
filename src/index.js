import React from "react";
import ReactDOM from "react-dom";
import AreaChart from "./components/AreaChart";
import data from "./data";

const App = () => (
  <div>
    <AreaChart data={data} size={[800,500]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
