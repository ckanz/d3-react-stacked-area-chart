import React from 'react';

const style = {
  marginLeft: 50,
  fontFamily: 'Sans-serif',
};

function getPercentageString(value) {
  return String((value*100).toFixed(2) + '%');
}

function getDateString(dateObject) {
  let dateString = '';
  if(dateObject) {
    dateObject = new Date(dateObject);
    dateString = dateObject.getFullYear() + '-' +(dateObject.getMonth() + 1) + '-' + dateObject.getDate();
  }
  return dateString;
}

function getDataString(metric, value) {
  let dataString = '';
  if(metric && value) {
    dataString = metric + ': ' + value;
  }
  return dataString;
}

class Tooltip extends React.Component {
  render() {
    let metricStyle = {
      color: this.props.tooltipData.colour
    };
    return (
      <div id='tooltip' style={style}>
        <p>{getDateString(this.props.tooltipData.date)}</p>
        <p style={metricStyle}>{getDataString(this.props.tooltipData.metric, this.props.tooltipData.value)}</p>
      </div>
    );
  }
}

export default Tooltip;
