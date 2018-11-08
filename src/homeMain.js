import React, { Component } from 'react'

import Item from './homeMainItem'

export class homeMain extends Component {
  render() {
    return (
        <div className="container">
        <div className="row" style={{padding:"1rem"}}>
        <Item/>
        <Item/>
        <Item/>
        </div>
        </div>
    )
  }
}

export default homeMain
