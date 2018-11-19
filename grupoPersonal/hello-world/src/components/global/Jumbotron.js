import React, { Component } from 'react';
import './css/Jumbotron.css';

class Jumbotron extends Component {
  render() {
    return (
        <div className="container">
            <div className="jumbotron">
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                    <p className="lead">
                        Esta aplicación otorgará información relevante con respecto al mundo pokemon.
                    </p>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
                    <a href="#">
                        <button type="button" className="btn btn-outline-secondary btn-lg">
                            Conoce a nuestro equipo
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
  }
}

export default Jumbotron;
