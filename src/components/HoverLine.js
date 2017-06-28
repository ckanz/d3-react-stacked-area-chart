import React from 'react';

const strokeWidth = 3;
const lineStyle = {
  stroke: '#000000',
  strokeWidth: strokeWidth
};

class HoverLine extends React.Component {

  render() {
    let height = this.props.height+25;
    let svgStyle = {
      position: 'absolute',
      left: this.props.mousePosition.x,
      pointerEvents: 'none'
    };

    return (
      <svg id='hoverline' height={height} width={strokeWidth} style={svgStyle}>
        <line x1={0} y1={this.props.marginTop-5} x2={0} y2={height} style={lineStyle} />
      </svg>
    );
  }
}

export default HoverLine;
