let baseURL = "https://deckofcardsapi.com/api/deck/wwcmv1jdtp5b/";

let shuffle = "shuffle/"
let draw = "draw/?count=1"

// console.log("#1 - 1 card from the a suffled deck - console.log(response)");  

// $.getJSON(`${baseURL}${shuffle}`)
//     .then(response1 => {        
//         return $.getJSON(`${baseURL}${draw}`)
//     })
//     .then(response2 => {
//         console.log(response2.cards[0].value, "of", response2.cards[0].suit, "with", response2.remaining, "cards remaining.");
//     });


// console.log("#2 - 2 cards from the same suffled deck - console.log(response)");  

// $.getJSON(`${baseURL}${shuffle}`)
// .then(response1 => {        
//     return $.getJSON(`${baseURL}${draw}`)
// })
// .then(response2 => {
//     console.log(response2.cards[0].value, "of", response2.cards[0].suit, "with", response2.remaining, "cards remaining.");
//     return $.getJSON(`${baseURL}${draw}`)
// })
// .then(response3 => {
//     console.log(response3.cards[0].value, "of", response3.cards[0].suit, "with", response3.remaining, "cards remaining.");
// });


let $btn = $('button');
let $cardArea = $('#card-area');

$.getJSON(`${baseURL}${shuffle}`)
    .then(data => {    
    $btn.show();
  });

$btn.on('click', function() {
    $.getJSON(`${baseURL}/${draw}`)
    .then(data => {
        $cardArea.append(
            $('<img>', {
              src: data.cards[0].image,
            })
          );
          console.log(data.remaining)
          if (data.remaining === 0) $btn.remove();
        });
      });
