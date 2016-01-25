module.exports = Letter;
function Letter(let){
  this.appear = false;
  this.charac = let;
  letterRender: function(){
    if(this.appear === false){
      return("_");
    }
    else{
      return(this.charac);
    }
  }
};