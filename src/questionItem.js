import React, { Component } from 'react'

export class questionItem extends Component {
  render() {
    return (
      <div className="col-md-6">
        <h3>{this.props.question}</h3>
        <h4>{this.props.response}</h4>
      </div>
    )
  }
}

export default questionItem
