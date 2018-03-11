/// 3/3 mentor Antonella

var array = [
  //this is the array holding ALL of the hiding pairs in holding.
  '<i class="fa fa-anchor"></i>',
  '<i class="fa fa-anchor"></i>',
  '<i class="fa fa-diamond"></i>',
  '<i class="fa fa-diamond"></i>',
  '<i class="fa fa-leaf"></i>',
  '<i class="fa fa-leaf"></i>',
  '<i class="fa fa-bomb"></i>',
  '<i class="fa fa-bomb"></i>',
  '<i class="fa fa-bolt"></i>',
  '<i class="fa fa-bolt"></i>',
  '<i class="fa fa-bicycle"></i>',
  '<i class="fa fa-bicycle"></i>',
  '<i class="fa fa-paper-plane-o"></i>',
  '<i class="fa fa-paper-plane-o"></i>',
  '<i class="fa fa-cube"></i>',
  '<i class="fa fa-cube></i>'
];
var arrayValuesStorage = []; /// this is the empty array to hold the value of my flipped cards while there are 2 or less filipped
var arrayForCardIds = []; ///this is my empty array that will hold the card ids
var cardsFlipped = 0; ///this is the quantity of the cards flipped begininng at number zero
// Shuffle function from http://stackoverflow.com/a/2450976 as supplied with the precode supplies
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
var array = shuffle(array);

///(".cards")  Then, you should try to shuffle your list of cards and assign the new cards to the HTML.
function shuffleCards(array) {
  var cardElem = document.querySelectorAll(".card");
  for (var i = 0; i < array.length; i++) {
    cardElem[i].innerHTML = array[i];
  }
}
 //when i am clicking its the same card underneath each time though there is no changing
shuffleCards(array);

///adding event listener///
$(".deck").on("click", ".card", function(event) {
  ///funtionality to handle clicks
  $(event.target).addClass("open show"); ///This should reveal the hidden side of each card.
  ///$(event.target).removeClass("open show");

  console.log(event.target);
});
