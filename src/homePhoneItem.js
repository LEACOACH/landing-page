import React, { Component } from 'react'

export class homePhoneItem extends Component {
  render() {
    return (
      <div className="col-md-12 " style={{verticalAlign:"mid"}}>
        <div className="row" style={{padding:"2rem"}}>
        <div className="col-md-4">
          <img src={this.props.image} alt="" width="110rem"></img>
        </div>
        <div className="col-md-8">
            <h2 className="phone-h2" >{this.props.name}</h2>
            <p className="phone-p">{this.props.description}</p>
        </div>
        </div>
      </div>
    )
  }
}

export default homePhoneItem
