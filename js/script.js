"use strict";


//TODO: First task

let numberOfFilms;

function start() {
    numberOfFilms = prompt("Скільки фільмів подивилися?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Скільки фільмів подивилися?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// const a = prompt("Що ви в останній раз дивилися?", ""),
//     b = prompt("На скільки оцінюєте його?"),
//     c = prompt("Що ви в останній раз дивилися?", ""),
//     d = prompt("На скільки оцінюєте його?");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


//TODO: Secpnd task



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Що ви в останній раз дивилися?", ""),
            b = +prompt("На скільки оцінюєте його?", "");

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("Done");
        } else {
            console.log("Err");
            i--;
        }
    }
}

// rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Доволі мало");
    } else if (personalMovieDB >= 10 && personalMovieDB < 30) {
        console.log("Не погано");
    } else if (personalMovieDB >= 30) {
        console.log("Ви кіноман");
    } else {
        console.log("Помилка");
    }
}

// detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);


function writeYourGeners() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[ i - 1] = prompt(`Ваш олюблений жанр? ${i}`, "");
    }
}

writeYourGeners();