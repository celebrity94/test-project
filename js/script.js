' use strict ';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let lastMov1 = prompt('Какой последний фильм посмотрели?');
let rateMov1 = prompt('На сколько его оцените?');
let lastMov2 = prompt('Какой последний фильм посмотрели?');
let rateMov2 = prompt('На сколько его оцените?');

personalMovieDB.movies[lastMov1] = rateMov1;
personalMovieDB.movies[lastMov2] = rateMov2;
    
console.log(personalMovieDB);