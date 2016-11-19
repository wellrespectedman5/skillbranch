import express from 'express';
import fetch from 'isomorphic-fetch';
// import bluebird from 'bluebird';
// import _ from 'lodash';

// import canonize from './canonize';
const app = express();

app.get('/task1', (req, res) => {
    const digit_a = parseInt(req.query.a),
        digit_b = parseInt(req.query.b),
        digit_sum = ((digit_a) ? digit_a : 0) + ((digit_b) ? digit_b : 0);

    res.json({
        digit_a,
        digit_b,
        sum: digit_sum
    });
});
// const __DEV__ = true;
//
//
// app.get('/canonize', (req, res) => {
//     const username = canonize(req.query.url);
//     res.json({
//         url: req.query.url,
//         username
//     });
// });
//
// // Poke API calc most weight pokemon
// const baseURL = 'https://pokeapi.co/api/v2';
// const pokemonStats = ['id', 'name', 'base_experience', 'height,', 'is_default', 'order', 'weight']
//
// async function getPokemons(url, i = 0) {
//     //console.log('getPokemons:function =>', url + 'IterationCount:' + i);
//     const response = await fetch(url);
//     const page = await response.json();
//     const pokemons = page.results;
//     if (__DEV__ && i > 1) {
//         return pokemons
//     }
//     if (page.next) {
//         const pokemonsNext = await getPokemons(page.next, i + 1);
//
//         return [
//             ...pokemons,
//             ...pokemonsNext
//         ]
//     }
//
//     return pokemons;
// }
//
// async function getPokemon(url) {
//     const response = await fetch(url);
//     const pokemonCharacter = await response.json();
//     return pokemonCharacter;
// }
//
// app.get('/pokeapi', async(req, res) => {
//     try {
//         const pokemonsUrl = `${baseURL}/pokemon`;
//         const pokemonsInfo = await getPokemons(pokemonsUrl);
//         const pokemonsPromises = pokemonsInfo.map(info => {
//             return getPokemon(info.url);
//         });
//
//         const pokemonsFullInfo = await Promise.all(pokemonsPromises);
//         const pokemons = pokemonsFullInfo.map((pokemon) => {
//             return _.pick(pokemon, pokemonStats);
//         });
//
//         const sortPokemons = _.sortBy(pokemons, pokemon => -pokemon.weight);
//
//         res.json(sortPokemons);
//     } catch (err) {
//         console.log(err);
//         res.json({err});
//     }
// });

app.listen(3000, () => {
    console.log('Приклад застосунку, який прослуховує 3000-ий порт!');
});

//
//const array = [
//  ' ',
//  '//telegrgwe.me/wellrespectedman',
//  'HttP://tEleGram.me/wellrespectedman5',
//  'HttP://tEleGram.me/wellrespectedman95',
//  'telegram.me/wellrespectedman',
//  'wellrespectedman',
//  '@wellrespectedman',
//  'https://vk.com/wellrespectedman',
//  'http://vk.com/wellrespectedman',
//  '//vk.com/wellrespectedman',
//];
//
//array.forEach(url => {
//  const username = canonize(url);
//  console.log(username[5]);
//});
