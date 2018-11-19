import React, { Component } from 'react';
import pokebolaIMG from '../global/images/pokebola.png';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
        <div className="Header">
              <nav className="navbar navbar-expand-md navbar-light bg-light">
                  <div className="container">
                      <a className="navbar-brand" href="#">
                          <img className="float-left" src={pokebolaIMG} style={{width: '40px', height: '40px'}}/>
                      </a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                          <span className="navbar-toggler-icon"> </span>
                      </button>
                      <div className="navbar-collapse collapse" id="navbarResponsive">
                          <ul className="navbar-nav ml-auto">
                              <li className="nav-item active">
                                  <a className="nav-link" href="#"> Home </a>
                              </li>

                              <li className="nav-item">
                                  <a className="nav-link" href="#"> Pokedex </a>
                              </li>

                              <li className="nav-item">
                                  <a className="nav-link" href="#"> Items </a>
                              </li>

                              <li className="nav-item">
                                  <a className="nav-link" href="#"> About us </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
        </div>
    );
  }
}

export default Header;
