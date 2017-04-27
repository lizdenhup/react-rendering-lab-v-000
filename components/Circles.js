import React from 'react';
import Circle from './Circle';

export default class Circles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      circles: [
        { color: 'red' },
        { color: 'yellow' },
        { color: 'green' },
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newCircles = this.state.circles.map(circle => {
      if (circle.color === 'red') return { color: 'green' };
      if (circle.color === 'green') return { color: 'red' };
      return circle;
    });
    console.log("\n💥 Red and green were swapped!");
    this.setState({ circles: newCircles });
  }

  render() {
      const { color } = this.props;
      console.log(`A ${color} circle was rendered!`)
    return (
      <div className={`circle ${color}`}>
      </div>
    );
  }
}
