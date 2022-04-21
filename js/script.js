const number0Films = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = { 
    count: number0Films,
    movies: {},
    actors: {},
    genras: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?;', ''),
      b = prompt('На сколько ооцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?;', ''),
      d = prompt('На сколько ооцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);