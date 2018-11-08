import React, { Component } from 'react'
import appstore from './images/app-store.svg'
import googleplay from './images/google-play.svg'

export class downland extends Component {
  render() {
    return (
      <div className="container-fluid downland">
        <div className="container downland-text">
          <h2>Descarga la App, conéctate y aprende</h2>
          <h3>Disponible para Android y iOS</h3>
          <div className="row downland-div">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="row">
                <div className="col downland-a">
                  <a href="https://app-leacoach.firebaseapp.com/" >
                    <img src={appstore} alt="" width="190rem"></img>
                  </a>
                </div>
                <div className="col downland-a">
                  <a href="https://app-leacoach.firebaseapp.com/" >
                    <img src={googleplay} alt="" width="190rem"></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default downland
