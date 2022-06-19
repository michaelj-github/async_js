let baseURL = "https://deckofcardsapi.com/api/deck/wwcmv1jdtp5b/";

let shuffle = "shuffle/"
let draw = "draw/?count=1"


async function getCard() {
    await $.getJSON(`${baseURL}${shuffle}`)
    let response = await $.getJSON(`${baseURL}${draw}`)
    console.log(response.cards[0].value, "of", response.cards[0].suit, "with", response.remaining, "cards remaining.");
}
// console.log("#1 - get 1 card from a suffled deck - console.log(response)");  
// getCard()


async function get2Cards() {
    await $.getJSON(`${baseURL}${shuffle}`)
    let response = await $.getJSON(`${baseURL}${draw}`)
    console.log(response.cards[0].value, "of", response.cards[0].suit, "with", response.remaining, "cards remaining.");
    response = await $.getJSON(`${baseURL}${draw}`)
    console.log(response.cards[0].value, "of", response.cards[0].suit, "with", response.remaining, "cards remaining.");
}
// console.log("#2 - get 2 cards from a suffled deck - console.log(response)");  
// get2Cards()

let $btn = $('button');
let $cardArea = $('#card-area');

async function dealTheCards() {
    await $.getJSON(`${baseURL}${shuffle}`)
    $btn.show();
    $btn.on('click', async function() {
        let card = await $.getJSON(`${baseURL}/${draw}`)
        $cardArea.append(
            $('<img>', {
              src: card.cards[0].image,
            })
          );
          console.log(card.remaining)
          if (card.remaining === 0) $btn.remove();
    })
}
dealTheCards()