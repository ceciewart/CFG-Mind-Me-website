// Function that changes the title message to 'You got this'

function mOver(obj) {
  obj.innerHTML = "You got this!";
  obj.style.backgroundColor= "pink";
  obj.style.fontSize="50px";
}
console.log(mOver);

// Arrays with the website content
let books = ["The Happiness Trap", "It didn't start with you", "The body keeps the score", "Loving Bravely", "The boy, the mole, the fox and the horse", "Daring greatly", "The missing piece", "Furiously Happy"]

let audio = ["The very well mind podcast", "Meditation minis", "A hilarious world of depression", "The mental illness happy hour", "The positive psychology podcast"]

let shows = ["To the bone", "The mind explained", "The woman in the window", "After life", "The Starling"]

let combinedContent = [].concat(books, audio,shows);

console.log(combinedContent);

// This will randomly suggest a specific content of the website if a button is clicked

let randomBook = books[Math.floor(Math.random() * books.length)];

let randomAudio = audio[Math.floor(Math.random() * audio.length)];
console.log(randomAudio);

let randomShow = shows[Math.floor(Math.random() * shows.length)];

let randomContent = combinedContent[Math.floor(Math.random() * combinedContent.length)];

//Suggesting any content from the website - not added to website
document.getElementById(randomChoice).addEventListener("click", suggestMe());

function suggestMe() {
   var result = document.getElementById("randomChoice");
   result.innerHTML= randomContent;
}
console.log(suggestMe());

//Suggesting a Book 
document.getElementById(randomBook).addEventListener("click", suggestMeBook());
function suggestMeBook() {
   var bookResult = document.getElementById("randomBook");
   bookResult.innerHTML= randomBook;
   bookResult.style.fontSize="20px";
}
console.log(suggestMeBook());

//Suggesting a Show
document.getElementById(randomShow).addEventListener("click", suggestMeShow());
function suggestMeShow() {
  var showResult = document.getElementById("randomShow");
  showResult.innerHTML= randomShow;
  showResult.style.fontSize="20px";
}
console.log(suggestMeShow());

//Suggesting a Podcast
document.getElementById(randomAudio).addEventListener("click", suggestMeAudio());
function suggestMeAudio() {
  var audioResult = document.getElementById("randomAudio");
  audioResult.innerHTML= randomAudio;
  audioResult.style.fontSize="20px";
}
console.log(suggestMeAudio());


//Form that sends the information to the browser address

var myform = document.getElementById("formId");
document.getElementById("linkId").addEventListener("click"), function(){
  myform.submit();
}



