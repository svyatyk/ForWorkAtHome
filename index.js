'using script';
let NumberOfFilms = prompt("Скільки фільмів ви вже подивилися","");
const personalm = {
    count : NumberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
}
let a = prompt("один із останніх переглянутих фільмів ","");
let b = prompt("наскільки оціните його ","");
let c = prompt("один із останніх переглянутих фільмів ","");
let d = prompt("наскільки оціните його ","");
personalm.movies[a]=b;
personalm.movies[c]=d;
// 

console.log(personalm.movies)