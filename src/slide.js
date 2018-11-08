import React, { Component } from 'react'

import SlideItem from './slideItem'
export class slide extends Component {
  render() {
    return (
        <div id="testimonios">
        <div id="carousel" className="carousel slide" data-ride="carousel">
        <h1>TESTIMONIOS</h1>
        <hr className="hr"/>
        <h2>Opinan los usuarios</h2>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <SlideItem 
                text="Excelente aplicación, con la cual puedo monetizar "
                name="Juan Gris"
                />
            </div>
            <div className="carousel-item">
                <SlideItem 
                text="Excelente aplicación, encontre al profesor que buscaba con la garantia"
                name="Vilchez Huaman"
                />        
            </div>
            <div className="carousel-item">
                <SlideItem 
                text="Excelente aplicación, la recomiendo"
                name="Luis Guzman"
                />                
            </div>
        </div>
        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            <ion-icon id="slide-icon" name="arrow-dropleft"></ion-icon>
        </a>
        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            <ion-icon id="slide-icon" name="arrow-dropright"></ion-icon>
        </a>
        </div>
        </div>
    )
  }
}

export default slide
