module.exports = Letter;

//function creates 'Letters' to populate the lets array
function Letter(let){
  this.appear = false;
  this.charac = let;
  letterRender: function(){
    if(this.appear === false){
      return "_";
    }
    else{
      return this.charac;
    }
  }
};