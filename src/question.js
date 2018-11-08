import React, { Component } from 'react'

import Item from './questionItem'
export class question extends Component {
  render() {
    return (
      <div id="preguntas" className="container question">
        <div className="question-title">
          <h1>PREGUNTAS FRECUENTES</h1>
          <hr/>
        </div>
          <div className="row">
          <Item
          question="¿Tengo que pagar las clases por adelantado?"
          response="No, el pago lo puedes acordar con quien será tutor"
          />
          <Item
          question="Puedo escoger el profesor que me va enseñar"
          response="Por supuesto, puedes guiarte de las calificaciones y comentarios."
          />
          <Item
          question="Puedo escoger el profesor que me va enseñar"
          response="Por supuesto, puedes guiarte de las calificaciones y comentarios."
          />  
          <Item
          question="¿Tengo que pagar las clases por adelantado?"
          response="No, el pago lo puedes acordar con quien será tutor"
          />
          </div>
      </div>
    )
  }
}

export default question
