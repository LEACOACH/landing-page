import React, { Component } from 'react'
import he from './images/helver.png'

export class slideItem extends Component {
  render() {
    return (
        <div className="slide">
        <div className="slide-item">
          <div className="row">
            <div className="col-md-4">
              <img className="secction-img" src={he} alt="" width="110rem"/>
            </div>
            <div className="col-md-8">
              <h3>{this.props.text}</h3>
              <h4>{this.props.name}</h4>
            </div>  
          </div>

        </div>
        </div>
    )
  }
}

export default slideItem
