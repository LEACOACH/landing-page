import React, { Component } from 'react'

export class homeHeaderOther extends Component {
  render() {
    return (
        <div className="container-fluid homeImage">
        <div className="container">
            <div className="row">
            <div className="col-md" style={{padding:"2rem"}}>
                <div className="card shadow p-3 mb-5 bg-white">
                <div style={{padding:"1rem"}}>
                    <br/>
                    <h1 style={{fontWeight:"Bold", fontSize:"5rem"}}>Busca un coach</h1>
                    <br/>
                    <h3>Enseña cuando quieras busca oportunidades cerca de ti.</h3>
                    <br/>
                    <form>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
            <div className="col-md">
            </div>
            </div>
        </div>
        <div className="container">
        <div className="row" style={{padding:"2rem",alignContent:"center"}}>
            <div className="col-md">
                <h2>Busca un tutor cerca de ti </h2>
            </div>
            <div className="col-md">
                <button className="btn btn-primary">Registrate</button>
            </div>
        </div>
        </div>
        </div>
    )
  }
}

export default homeHeaderOther
