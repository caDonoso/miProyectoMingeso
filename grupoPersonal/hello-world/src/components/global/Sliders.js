import React, { Component } from 'react';
import './css/Sliders.css';
import itemIMG from '../global/images/items.jpg';
import pokedexIMG from '../global/images/pokedex.jpg';

class Sliders extends Component {
  render() {
    return (
        <div className="center-div">
            <div className="carousel slide" data-ride="carousel" id="slides">
                <ul className="carousel-indicators">
                    <li className="active" data-target="#slides" data-slide-to="0">  </li>
                    <li data-target="#slides" data-slide-to="1">  </li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={itemIMG}/>
                        <div className="carousel-caption d-none d-md-block text-center">
                            <h5>
                               Información de items
                            </h5>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={pokedexIMG}/>
                        <div className="carousel-caption d-none d-md-block text-center">
                            <h5>
                                Pokedex con datos muy interesantes
                            </h5>
                        </div>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#slides" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"> </span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#slides" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"> </span>
                    <span className="sr-only">Next</span>
                </a>

            </div>
        </div>

    );
  }
}

export default Sliders;
