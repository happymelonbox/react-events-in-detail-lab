
import React from 'react';

export default class DelayedButton extends React.Component {

  handleClick = (event) => {
    setTimeout(() =>
        this.props.onDelayedClick(event),
      this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleClick}> DELAY BUTTON </button>
    )
  }
}