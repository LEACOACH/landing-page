import React, { Component } from 'react';
import './App.css'

import HomeHeader from './homeHeader'
import HomeSection from './homeSection'
import HomePhone from './homePhone'
import Downland from './downland'
import Slide from './slide'
import Question from './question'
import Bar from './bar'
import creative from './icons/creative-white.svg'

class App extends Component {
  render() {
    return (
      <div className="" >
        <header>
        <nav className="navbar navbar-expand-lg background">
          <div className="container">
            <div className="navbar-collapse justify-content-center" id="">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <img src={creative} alt="" width="45rem" ></img>
                </li>
                <li className="nav-item">
                  <ion-icon name="logo-android"></ion-icon>
                </li>
                <li className="nav-item">
                  <ion-icon name="logo-apple"></ion-icon>
                </li>
                </ul>
            </div>
            </div>
          </nav>
          </header>
        <main>
            {/* <h1>Hola MUNDO</h1>
            <h2>Hola MUNDO</h2>
            <h3>Hola MUNDO</h3>
            <h4>Hola MUNDO</h4>
            <h5>Hola MUNDO</h5>
            <h6>Hola MUNDO</h6>
            <p>Hola MUNDO</p> */}
            <HomeHeader/>
            <Bar/>
            <HomePhone/>
            <Slide/>

            <Question/>

            <HomeSection/>
            <Downland/>

        </main>

        <footer>
        <div className="container-fluid footer">
            <div className="container footer-container">
                <div className="row">
                <div className="col-md-6">
                    <h5>DESCARGA LA APP</h5>
                    <div>
                    <img src={creative} alt="" height="40rem"/>
                    </div>
                    <div>
                    <a href="">
                        <ion-icon name="logo-android"></ion-icon>
                    </a>
                    <a href="" >
                        <ion-icon name="logo-apple"></ion-icon>
                    </a>
                    </div>
                </div>
                <div className="col-md-3">
                    <h5>ÍNDICE WEB</h5>
                    <a href="#inicio"><h6>INICIO</h6></a>
                    <a href="#aprender"><h6>APRENDER</h6></a>
                    <a href="#enseñar"><h6>ENSEÑAR</h6></a>
                    <a href="#equipo"><h6>EQUIPO DE PROYECTO</h6></a>
                    <a href="#testimonios"><h6>TESTIMONIOS</h6></a>
                    <a href="#preguntas"><h6>PREGUNTAS FRECUENTES</h6></a>

                </div>
                <div className="col-md-3">
                    <h5>SOCIAL</h5>
                    <a href="">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                    <a href="">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </div>
                {/* <div className="col-md-12">
                    <h6>© EriksonDaniel</h6>
                </div> */}
                </div>
            </div>
        </div>        
        </footer>
      </div>
    );
  }
}

export default App;
