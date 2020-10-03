' use strict ';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt( 'Сколько фильмов вы уже посмотрели?', '' );
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt( 'Сколько фильмов вы уже посмотрели?', '' );
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i=0; i<2; i++) {
        let a = prompt( 'Какой последний фильм посмотрели?' ),
            b = prompt( 'На сколько его оцените?' ); 
        if (a != null && b != null && a != '' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        }else {
            i--; 
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        alert( 'Просмотрено довольно мало фильмов' );
    }   else if (numberOfFilms >=  10 && numberOfFilms <30 ) {
            alert('Вы классический зритель');
    }   else if (numberOfFilms >= 30) {
            alert('Вы киноман!');
    }   else {
            alert('Произошла ошибка');
    }
}

detectPersonalLevel(); 

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } 
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i=1; i<=3; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1]=a;
    }
}
writeYourGenres();