"use strict";


//TODO: First task

const numberOfFilms = +prompt("Скільки фільмів подивилися?", "");

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

if (personalMovieDB.count < 10) {
    console.log("Доволі мало");
} else if (personalMovieDB >= 10 && personalMovieDB < 30) {
    console.log("Не погано");
} else if (personalMovieDB >= 30) {
    console.log("Ви кіноман");
} else {
    console.log("Помилка");
}


console.log(personalMovieDB);