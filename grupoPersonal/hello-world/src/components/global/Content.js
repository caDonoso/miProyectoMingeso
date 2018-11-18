import React, { Component } from 'react';
import './css/Content.css';
import pikachuIMG from "./images/pikachu.jpg";
import raichuIMG from "./images/raichu.png";
import {PanelGroup} from "react-bootstrap";
import {Panel} from "react-bootstrap";
import {Image} from "react-bootstrap";

class Content extends Component {
  render() {
    return (
      <div className="Content">
          <PanelGroup accordion id="accordion-example">
              <Panel eventKey="1">
                  <Panel.Heading>
                      <Panel.Title toggle>Pikachu</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Image src={pikachuIMG} circle responsive alt="logo"/>
                      Pikachu es un Pokémon de tipo eléctrico introducido en la primera generación.
                      Es el Pokémon más conocido de la historia, mayormente por ser el acompañante del
                      protagonista del anime, Ash Ketchum y la mascota representante de la franquicia Pokémon.
                      Es el Pokémon inicial que usarán los entrenadores que empiezan su aventura en la
                      región Kanto en Pokémon Amarillo y Pokémon: Let's Go Pikachu! A partir de la segunda
                      generación, es la forma evolucionada de Pichu.
                  </Panel.Body>
              </Panel>
              <Panel eventKey="2">
                  <Panel.Heading>
                      <Panel.Title toggle>Raichu</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                      <Image src={raichuIMG} circle responsive alt="logo"/>
                      Raichu es un Pokémon de tipo eléctrico introducido en la primera generación.
                      Es una de las dos posibles evoluciones de Pikachu y la forma habitual del Raichu de Alola.

                  </Panel.Body>
              </Panel>
          </PanelGroup>
      </div>
    );
  }
}

export default Content;
