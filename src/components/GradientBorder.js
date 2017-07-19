import React from 'react';

class GradientBorder extends React.Component {
  render() {
    let gradientStyle = {
      width: '80px',
      height: '500px',
      position: 'absolute',
      zIndex: '1',
      background: 'rgba(255,255,255,0)',
      background: '-webkit-linear-gradient(left, #282828, rgba(255,255,255,0))',
      background: '-o-linear-gradient(right, #282828, rgba(255,255,255,0))',
      background: '-moz-linear-gradient(right, #282828, rgba(255,255,255,0))',
      background: 'linear-gradient(to right, #282828, rgba(255,255,255,0))'
    };
    return (
      <div id='gradient' style={gradientStyle}>
      </div>
    );
  }
}

export default GradientBorder;
