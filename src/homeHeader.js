import React, { Component } from 'react'

import app from './icons/app.png'
import teach from './icons/teacher.png'
import resource from './icons/resource.png'
import crea from './icons/creative.svg'

export class homeHeader extends Component {
  render() {
    return (
        <div id="inicio" className="container-fluid homeImage">
        <div className="container">
            <div className="row">
            <div className="col-md" style={{paddingBlockEnd:"4rem"}}>
                <div> 
                    <h1 style={{fontSize:"4rem", paddingTop:"4rem", color:"blue"}}>LEACOACH</h1>
                    <hr className="hr"/>
                    <h2 style={{fontSize:"3rem", paddingTop:"2rem", lineHeight:"0.9"}}>BUSCA UN TUTOR</h2>
                    <h2 style={{fontSize:"3rem", paddingTop:"1rem",lineHeight:"0.9"}}>ENCUENTRA MATERIAL DE ESTUDIOS</h2>
                    <h3 style={{paddingTop:"2rem"}}>BUSCA OPORTUNIDADES CERCA DE TI</h3>
                    <h3 style={{paddingTop:"2rem"}}>BUSCA OPORTUNIDADES CERCA DE TI</h3>
                    <div style={{paddingTop:"2rem"}}>
                    <img src={crea} alt="" width="90 rem"></img>
                    {/* <ion-icon name="ios-phone-portrait"></ion-icon>
                    <ion-icon name="paper"></ion-icon>                    
                    <ion-icon name="ios-filing"></ion-icon> */}
                    <img src={app} alt="" width="75rem" style={{padding:"0.9rem"}}></img>
                    <img src={teach} alt="" width="75rem" style={{padding:"0.9rem"}}></img>
                    <img src={resource} alt="" width="75rem" style={{padding:"0.9rem"}}></img>
                    </div>
                </div>
            </div>
            <div className="col-md">
            </div>
            </div>
        </div>
        </div>
    )
  }
}

export default homeHeader
