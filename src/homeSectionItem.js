import React, { Component } from 'react'
export class homeSectionItem extends Component {
  render() {
    return (
        <div className="col-md-3"style={{padding:"1rem"}}>
            <div className="card" style={{padding:"1rem",marginLeft:"auto",marginRight:"auto",display:"block", textAlign:"center"}}>
            <img className="secction-img" src={this.props.image} alt="" height="150rem"></img>
            <h2>{this.props.name}</h2>
            <h5>{this.props.career}</h5>
            <a href="https://app-leacoach.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
              <p style={{fontSize:"1.2rem"}}>@{this.props.username}</p>
            </a>
            </div>
        </div>
    )
  }
}

export default homeSectionItem
