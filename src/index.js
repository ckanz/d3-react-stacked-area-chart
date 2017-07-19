import React from "react";
import ReactDOM from "react-dom";
import AreaChart from "./components/AreaChart";
import GradientBorder from "./components/GradientBorder";
import Header from "./components/Header";
import data from "./data";

let myStlye = {
  marginTop: 200
};

const App = () => (
  <div>
    <Header />
    <div style={myStlye}>
      <GradientBorder />
      <AreaChart data={data} size={[screen.width,500]} />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
