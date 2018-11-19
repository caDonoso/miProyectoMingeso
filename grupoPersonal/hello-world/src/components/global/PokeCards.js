import React from 'react';
import './css/PokeCards.css';


const PokeCards = (props) => (
    <div className="card-group">
        <div className="card text-center" style={{width: '25rem'}}>
            <img className="card-img-top rounded mx-auto d-block" style={{width: '20rem'}} src={props.image} alt="Card image cap"/>
            <div className="card-body">
                <h4 className="card-tittle">{props.name}</h4>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    </div>
);

export default PokeCards;
