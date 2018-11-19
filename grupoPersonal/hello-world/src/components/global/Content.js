import React, { Component } from 'react';
import './css/Content.css';
import PokeCards from '../global/PokeCards';
import Sliders from '../global/Sliders';

import pikachuIMG from "./images/pikachu.jpg";
import raichuIMG from "./images/raichu.png";


class Content extends Component {
    pikachuCard = {
        name: 'Pikachu',
        text: 'Pikachu es un Pokémon de tipo eléctrico introducido en la primera generación.\n' +
            '                                Es el Pokémon más conocido de la historia, mayormente por ser el acompañante del\n' +
            '                                protagonista del anime, Ash Ketchum y la mascota representante de la franquicia Pokémon.\n' +
            '                                Es el Pokémon inicial que usarán los entrenadores que empiezan su aventura en la\n' +
            '                                región Kanto en Pokémon Amarillo y Pokémon: Let\'s Go Pikachu! A partir de la segunda\n' +
            '                                generación, es la forma evolucionada de Pichu.',
        image: pikachuIMG,
    };

    raichuCard = {
        name: 'Raichu',
        text: 'Raichu es un Pokémon de tipo eléctrico introducido en la primera generación.\n' +
            '                                Es una de las dos posibles evoluciones de Pikachu y la forma habitual del Raichu de Alola.',
        image: raichuIMG,
    };

  render() {
    return (
      <div className="container-fluid">
          <div className="row">
              <Sliders />
          </div>

          <div className="row">
              <PokeCards name={this.pikachuCard.name}
                         text={this.pikachuCard.text}
                         image={this.pikachuCard.image}/>

              <PokeCards name={this.raichuCard.name}
                         text={this.raichuCard.text}
                         image={this.raichuCard.image}/>
          </div>
      </div>
    );
  }
}

export default Content;
