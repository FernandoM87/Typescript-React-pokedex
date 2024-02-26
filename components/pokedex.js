"use strict";
// @ts-nocheck
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pokecard_tsx_1 = __importDefault(require("./pokecard.tsx"));
//Den här komponenten ska ta emot datat om pokemons (en array av objekt) och rendera vardera Pokecard. 
const Pokedex = ({ pokemons, totalExp, isWinner }) => {
    return (<div className="pokedex">
        <h1>Pokedex</h1>
        {pokemons.map(item => {
            return <pokecard_tsx_1.default key={item.id} id={item.id} name={item.name} type={item.type} experience={item.base_experience}/>;
        })}
        <h3>Total experience: {totalExp}</h3>
        <h4>{isWinner ? "THIS HAND WINS!" : ""}</h4>
      </div>);
};
exports.default = Pokedex;
