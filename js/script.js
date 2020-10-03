' use strict ';

let numberOfFilms = +prompt( 'Сколько фильмов вы уже посмотрели?', '' );
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i=0; i<2; i++) {
    let a = prompt( 'Какой последний фильм посмотрели?' ),
        b = prompt( 'На сколько его оцените?' ); 
    if (a != null && b != null && a != '' && b !='' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--; 
    }
}

if (numberOfFilms < 10) {
    alert( 'Просмотрено довольно мало фильмов' );
}   else if (numberOfFilms > 10 && numberOfFilms <30 ) {
        alert('Вы классический зритель');
}
    else {
        alert('Вы киноман!');
    }

console.log(personalMovieDB);
