import React from 'react';

class Header extends React.Component {
  render() {
    let headerStyle = {
      backgroundColor: '#000000',
      width: '100%',
      top: 0,
      paddingLeft: '25px',
      borderWidth: '2px',
      borderBottomWidth: '5px',
      borderBottomColor: '#222222',
      borderBottomStyle: 'solid'
    };
    return (
      <div id="headline" style={headerStyle}>
      <h1>Daily Number of Reported Complaints in NYC</h1>
      <p>
        <div>Each area represents the total number of valid felony, misdemeanor, and violation crimes of a particular complaint description type reported to the New York City Police Department NYPD in 2016 on each day. </div>
        <div>Data: <a href="https://data.cityofnewyork.us/Public-Safety/NYPD-Complaint-Data-Historic/qgea-i56i">NYPD Complaint Data</a>. Code: <a href="https://github.com/ckanz/d3-react-stacked-area-chart">ckanz/d3-react-stacked-area-chart</a>. Made with <a href="https://d3js.org/">d3.js</a>, inspired by <a href="https://bl.ocks.org/mbostock/34f08d5e11952a80609169b7917d4172">this</a> and <a href="https://bl.ocks.org/mbostock/3885211">this</a> example. Displayed are the top 25 complaint description types including a type named "OTHER" containing the sum of all remaining descriptions.</div>
      </p>
    </div>
    );
  }
}

export default Header;
