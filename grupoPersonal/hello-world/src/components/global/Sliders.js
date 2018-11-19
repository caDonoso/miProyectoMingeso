import React, { Component } from 'react';
import './css/Sliders.css';
import itemIMG from '../global/images/items.jpg';
import pokedexIMG from '../global/images/pokedex.jpg';

class Sliders extends Component {
  render() {
    return (
        <div className="Sliders">
            <div className="carousel slide" data-ride="carousel" id="slides">
                <ul className="carousel-indicators">
                    <li className="active" data-target="#slides" data-slide-to="0">  </li>
                    <li data-target="#slides" data-slide-to="1">  </li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={itemIMG}/>
                    </div>

                    <div className="carousel-item">
                        <img src={pokedexIMG}/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Sliders;
