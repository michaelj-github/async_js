let baseURL = "https://deckofcardsapi.com/api/deck/";

let shuffle = "new/shuffle/"
let draw = "draw/?count=1"


async function getCard() {
    let aNewDeck = await $.getJSON(`${baseURL}${shuffle}`);
    let deckId = aNewDeck.deck_id;
    let response = await $.getJSON(`${baseURL}/${deckId}/${draw}`)
    console.log(response.cards[0].value, "of", response.cards[0].suit, "with", response.remaining, "cards remaining.");
}
// console.log("#1 - get 1 card from a suffled deck - console.log(response)");
// getCard()


async function get2Cards() {
    let aNewDeck = await $.getJSON(`${baseURL}${shuffle}`);
    let deckId = aNewDeck.deck_id;
    let response = await $.getJSON(`${baseURL}/${deckId}/${draw}`)
    console.log(response.cards[0].value, "of", response.cards[0].suit, "with", response.remaining, "cards remaining.");
    response = await $.getJSON(`${baseURL}/${deckId}/${draw}`)
    console.log(response.cards[0].value, "of", response.cards[0].suit, "with", response.remaining, "cards remaining.");
}
// console.log("#2 - get 2 cards from a suffled deck - console.log(response)");
// get2Cards()

let $btn = $('button');
let $cardArea = $('#card-area');

async function dealTheCards() {
    let aNewDeck = await $.getJSON(`${baseURL}${shuffle}`);
    let deckId = aNewDeck.deck_id;
    $btn.show();
    $btn.on('click', async function() {
        let card = await $.getJSON(`${baseURL}/${deckId}/${draw}`)
        $cardArea.append(
            $('<img>', {
              src: card.cards[0].image,
            })
          );
        //   console.log(card.remaining)
          if (card.remaining === 0) $btn.remove();
    })
}
dealTheCards()
