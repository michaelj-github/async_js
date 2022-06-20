let URL = "http://numbersapi.com/23?json";

console.log("#1 - console.log(response)");

$.getJSON(`${URL}`)
    .then(r => {
    console.log(r.number, r.text);
});

URL = "http://numbersapi.com/5,17,23?json";

$.getJSON(`${URL}`)
    .then(r => {
    $("body").append(`<h1>#2 - Facts about the numbers 5, 17, and 23</h1>`);
    $("body").append(`<p>${r[5]}</p>`);
    $("body").append(`<p>${r[17]}</p>`);
    $("body").append(`<p>${r[23]}</p>`);
    });

URL = "http://numbersapi.com/23?json";
let responseArray = []

for (let i = 1; i <= 4; i++) {
    responseArray.push($.getJSON(`${URL}`))
}
Promise.all(responseArray).then(rArray => ( $("body").append(`<h2>#3 - 4 facts about the number 23</h2>`), rArray.forEach(r => $("body").append(`<p>${r.text}</p>`))) )
