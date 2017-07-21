import React from 'react';
import ReactDOM from 'react-dom';
import AreaChart from './components/AreaChart';
import GradientBorder from './components/GradientBorder';
import Header from './components/Header';
import data from './data';

const chartAreaStyle = {
  marginTop: 20
};
const topBoxStyle = {
  position: 'absolute',
  top: 0,
  height: 100,
  width: '100%',
  backgroundColor: 'black',
  zIndex: -1
};

const App = () => (
  <div>
    <div style={topBoxStyle}></div>
    <Header />
    <div style={chartAreaStyle}>
      <GradientBorder />
      <AreaChart data={data} size={[window.innerWidth,500]} />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
