//requiring prompt, starting it; bring in word.js
var prompt = require("prompt");
prompt.start();
var Word = require("./word.js")

//game object
var game ={
  wordBank: ["Bumfuzzle", "Taradiddle", "Widdershins", "Diphthong", "Umami", "Borborygmus", "Scalawag", "Cad", "Gallivant", "Xenotransplantation" ] 
  guessesRemaining: 10
  currentWrd: null
  //starts the game
  startGame: function(wrd){
    var rando = Math.floor(Math.random() * 10)
    this.currentWrd = new Word(this.wordBank[rando]);
    this.currentWrd.getLets();
    this.keepPromptingUser();
  };
  //gameplay/prompt function
  keepPromptingUser: function(){
    var self = this
    prompt.get(["guessLetter"], function(err,result){
      console.log("The Letter or space you guessed is" + result.guessLetter)
      var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter)
      if (findHowManyOfUserGuess = 0){
        console.log("You guessed wrong!")
        self.guessesRemaining--; 
      }
      else{
        console.log("You guessed right!")
        if (currentWrd.didWeFindTheWord() true) {
          console.log("You Won!!!")
        };
      }
    });
  }


}