"use strict";
// @ts-nocheck
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pokedex_tsx_1 = __importDefault(require("./pokedex.tsx"));
//Slumpa en hand med 4 kort, 2 ggr med Pokedex 
const PokeGame = ({ pokemons }) => {
    let pokemonListOne = [];
    let pokemonListTwo = [];
    pokemons.forEach(pokemon => pokemonListOne.push(pokemon));
    const shuffledPokemons = pokemonListOne.sort(() => Math.random() - 0.5);
    pokemonListOne = shuffledPokemons.slice(0, 4);
    pokemonListTwo = shuffledPokemons.slice(4, 8);
    let handOneSum = 0;
    let handTwoSum = 0;
    pokemonListOne.forEach(pokemon => {
        handOneSum += pokemon.base_experience;
    });
    pokemonListTwo.forEach(pokemon => {
        handTwoSum += pokemon.base_experience;
    });
    let isWinner;
    return (<div>
        {isWinner = handOneSum > handTwoSum ? true : false}
        <pokedex_tsx_1.default pokemons={pokemonListOne} totalExp={handOneSum} isWinner={isWinner}/>
        {isWinner = handTwoSum > handOneSum ? true : false}
        <pokedex_tsx_1.default pokemons={pokemonListTwo} totalExp={handTwoSum} isWinner={isWinner}/>
      </div>);
};
exports.default = PokeGame;
