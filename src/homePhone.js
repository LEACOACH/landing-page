import React, { Component } from 'react'
import Item from './homePhoneItem'

import tea from './icons/teacher.png'
import obs from './icons/observe.png'
import ann from './icons/announces.png'
import res from './icons/resource.png'
import cal from './icons/calification.png'
import exp from './icons/export.png'

// import phone from './images/phone.png'

import phonehome from './images/phone_home.png'
import phonesign from './images/phone_sign.png'

export class homePhone extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div id="aprender" className="row">
        <div className="col-md-6" style={{  height:"46rem"}}>
          <div className="homeimg">
          <img src={phonesign} alt="" height="600rem"></img>
          </div>
        </div>
        <div className="col-md-6 phone-text">
          <h1 className="phone-h1">APRENDE CON NOSOTROS</h1>
          <Item 
            image={tea}
            name="BUSCA UN TUTOR"
            description="Encuentra y ponte en contacto con el tutor de la materia que desees aprender." 
            />
          <Item 
            image={res}
            name="MATERIAL DE ESTUDIO"
            description="Encuentra una gran variedad de recursos acádemicos como videos, fotos y textos."
            />
          <Item 
            image={cal}
            name="CALIFICA LA TUTORÍA"
            description="Al terminar la tutoría evalua la clase enseñada por el tutor" 
            />
        </div>
      </div>
      
      <div id="enseñar" className="row">
          <div className="col-md-6 phone-text">
          <h1 className="phone-h1">ENSEÑA CON NOSOTROS</h1>
          <Item 
            image={ann}
            name="ANUNCIA TUS CLASES"
            description="Encuentra una gran variedad de tutores según la materia que desees aprender." 
            />
          <Item 
            image={exp}
            name="PUBLICA MATERIAL"
            description="Publica videos, fotos, archivos de las clases que enseñas." 
            />
          <Item 
            image={obs}
            name="AUMENTA TUS INGRESOS"
            description="Obten clientes potenciales a quien enseñar tus conocimientos" 
            />
        </div>
        <div className="col-md-6" style={{  height:"46rem"}}>
          <div className="homeimg">
            <img src={phonehome} alt="" height="600rem"></img>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default homePhone

          /* <div className="col-md-12">
          <div className="row">
                    <div className="col-md-4">
                    <h2 style={{fontWeight:"bold"}}>Enseña</h2>
                    <p style={{fontSize:"1.5rem",fontWeight:"light", letterSpacing:"0.1rem"}}>Brinda tutorias cuando desees. Publica tus cursos y aumenta tus alumnos</p>
                    </div>
                    <div className="col-md-8">
                    <h2 style={{fontWeight:"bold"}}>Aprende</h2>
                    <p>Pide tutorias en asdasda sdasasdala app TutorAasdasdas dasdasjdkasjd aksdjaskdjaskpp</p>
                    </div>
                </div>
          </div> */