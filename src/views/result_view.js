const PubSub = require('../helpers/pub_sub.js');

const ResultView = function ( ) {
};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe("PrimeChecker:result-calculated",(event) => {
    const numberIsPrime = event.detail;
    console.log('payload received in ResultView:',numberIsPrime);
    this.displayResult(numberIsPrime);
  });
};


ResultView.prototype.displayResult = function(result){
console.log("RESULT",result);
const resultElement = document.querySelector('#result');
resultElement.textContent = `Is the number you entered Prime?: ${result}`;


}

module.exports = ResultView;
