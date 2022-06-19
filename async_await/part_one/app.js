let URL = "http://numbersapi.com/23?json";

console.log("#1 - console.log(response)");          

async function getFact() {
    console.log(await $.getJSON(`${URL}`))
}
getFact()

URL = "http://numbersapi.com/5,17,23?json";

async function getFactForNumbers() {
    // console.log(await $.getJSON(`${URL}`))
    let response = await $.getJSON(`${URL}`)
    $("body").append(`<h1>#2 - Facts about the numbers 5, 17, and 23</h1>`);
    $("body").append(`<p>${response[5]}</p>`);
    $("body").append(`<p>${response[17]}</p>`);
    $("body").append(`<p>${response[23]}</p>`);
}
getFactForNumbers()

URL = "http://numbersapi.com/23?json";

async function get4Facts() {
    // console.log(await $.getJSON(`${URL}`))
    let response1 = await $.getJSON(`${URL}`)
    let response2 = await $.getJSON(`${URL}`)
    let response3 = await $.getJSON(`${URL}`)
    let response4 = await $.getJSON(`${URL}`)
    $("body").append(`<h2>#3 - 4 facts about the number 23</h2>`);
    $("body").append(`<p>1. ${response1.text}</p>`);
    $("body").append(`<p>2. ${response2.text}</p>`);
    $("body").append(`<p>3. ${response3.text}</p>`);
    $("body").append(`<p>4. ${response4.text}</p>`);

}
get4Facts()

async function get4FactsWithPromiseAll() {
    let responseArray = []
    for (let i = 1; i <= 4; i++) {
        responseArray.push($.getJSON(`${URL}`))
    }
    let rArray = await Promise.all(responseArray)
    $("body").append(`<h2>#3 - 4 facts about the number 23 using Promise.all</h2>`);    
    rArray.forEach(r => $("body").append(`<p>${r.text}</p>`))
}
get4FactsWithPromiseAll()
