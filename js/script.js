"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = prompt("How many movies have I watched?", "");

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt("How many movies have I watched?", "");
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("What was the last time you watched?", ""),
                b = +prompt("How much do you rate this film?", "");

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("Done");
            } else {
                console.log("Err");
                i--;
            }
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Quite a bit");
        } else if (personalMovieDB >= 10 && personalMovieDB < 30) {
            console.log("Not bad");
        } else if (personalMovieDB >= 30) {
            console.log("You are a movie buff");
        } else {
            console.log("Error");
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },

    writeYourGeners: function () {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Your favorite movie genre? ${i}`, "");

            if (genre === '' || genre == null) {
                console.log("You have entered incorrect data");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Favorite genre of movie ${i + 1} is ${item}`);
        });
    }
};