module.exports = Word;
var Letter = require("./letter.js");

function Word(wrd){
  this.word = wrd;
  this.lets = [];
  this.found = false;
  getLets: function(){
    for(var i = 0; i < word.length; i++){
      this.lets.push(new Letter(wrd[i]));
    };
  };
  checkIfLetterFound: function(guessLetter){
    var lettersFound = 0;
    for (var i = this.lets.length - 1; i >= 0; i--) {
      if(this.lets[i].charac == guessLetter){
        this.lets[i].appear = true;
        lettersFound++;
      };
    }
    return lettersFound;
  };
  didWeFindTheWOrd: function(){
    this.lets.every()
    for (var i = Things.length - 1; i >= 0; i--) {
      Things[i]
    };
  };
  wordRender: function(){
    var str = ""
    for (var i = let.length - 1; i >= 0; i--) {
      let[i]
    };
  };
}