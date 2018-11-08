import React, { Component } from 'react'

import images from './icons/creative-idea.svg'

export class homeMainItem extends Component {
  render() {
    return (
      <div className="col-md-4" style={{backgroundColor:"rgb(246,246,246)", padding:"2rem",marginLeft:"auto",marginRight:"auto",display:"block", textAlign:"center"}}>
      <img src={images} alt="" width="100rem"></img>
      <h2 style={{marginTop:"2rem"}}>Title</h2>
      <p>adsad sadasd asd asd asd asd asdas dasd asdas das dasdas dasd dasdsa asd dasdasdasdas dasdas sadasd  </p>

      </div>
    )
  }
}

export default homeMainItem
