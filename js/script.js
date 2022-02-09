"use strict";


const numberOfFilms = +prompt("Скільки фільмів подивилися?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("Що ви в останній раз дивилися?", ""),
      b = prompt("На скільки оцінюєте його?"),
      c = prompt("Що ви в останній раз дивилися?", ""),
      d = prompt("На скільки оцінюєте його?");


