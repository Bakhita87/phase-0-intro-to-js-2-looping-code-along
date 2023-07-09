// Code your solutions in this file
function writeCards(names, event) {
  let myThankYouCards = [];
  for (let i = 0; i < names.length; i++) {
    myThankYouCards.push(
      `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    );
  }
  return myThankYouCards;
}
writeCards(["Jane", "John", "Mary"], "gift");




function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}
countDown(10);





 
