// alert('хуй');

// const arr = [1,2,3];
// const obj = {
//     0: 'a',
//     1: 'b',
//     2: 'c'
// };


// //console.log(arr[1]);

// //console.log(obj[1]);
// obj.b = 12;
// obj['c'] = 36;
// console.log(obj.b);
// console.log(obj['b']);   //not (obj[b])
// console.log(obj.c);

// // 

// const category =  'toys';

// console.log(`https://someurl.com/${category}`); 


// const user = 'Sladky';

// alert(`Привет,${user}`)


// let numberOfFilms = prompt('сколько фильмов вы уже посмотрели?', '');

// const count = 'count';


'use strict';


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');


const personalMovieDB = {
                    count: numberOfFilms,
                    movies: {},
                    actors : {},
                    ganres: [],
                    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько оцениваете его?',''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько оцениваете его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);