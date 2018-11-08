import React, { Component } from 'react'

import Item from './homeSectionItem'

import helver from './images/helver.png'
import ivan from './images/ivan.png'
import kevin from './images/kevin.png'
import erik from './images/erik.png'
export class homeSection extends Component {
  render() {
    return (
      <div id="equipo" className="container" style={{ padding: "1rem" }}>
        <div className="row">
          <div className="col-md-12 team">
            <h1>EQUIPO DE PROYECTO</h1>
            <hr className="hr" />
            <h2>Nuestra gente es lo que hace que todo suceda.</h2>
          </div>
          <Item image={kevin} name="Kevin Riveros" username="kevinriveros" career="SOFTWARE ENGINEERING" />
          <Item image={ivan} name="Ivan Enriquez" username="ivanenriquez" career="SOFTWARE ENGINEERING" />
          <Item image={helver} name="Jerber Valentin" username="jerbervalentin" career="SOFTWARE ENGINEERING" />
          <Item image={erik} name="Erikson Daniel" username="eriksondaniel" career="FRONT-END DEVELOPER" />
        </div>
      </div>
    )
  }
}

export default homeSection
