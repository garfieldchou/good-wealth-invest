import React, { Component } from 'react';

export default class Question extends Component {
  state = {
    ans: this.props.ans,
    trial: ''
  }
  getValue(event) {
    this.setState({trial: event.target.value});
  }
  render() {
    const ansCorrect = parseFloat(this.state.trial) === this.props.ans;
    return (
      <div>
        <p>{this.props.question}</p>
        <input
          onChange={this.getValue.bind(this)}
          value={this.state.trial} /> %
          <p style={{visibility: this.props.showRes ? 'visible' : 'hidden', color: ansCorrect? '#009933' : '#ff0066' }}>{ansCorrect ? '答對了！' : '答錯了，請重新作答！'}</p>
      </div>
    )
  }
}

