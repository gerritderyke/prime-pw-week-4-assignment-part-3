console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//   ATTEMPT 1
//
//  let basket = []
//
//  function addItem(item){
//
//   item = basket.push(item);
//   if(basket.length>0){
//     console.log(`Basket has: ${basket}` );
//     return true;
//   }
//   return false;
//
//  }//end function
// console.log(addItem('kiwi'));
// console.log(addItem('apple'));
// console.log(addItem('banana'));

//   ATTEMPT 2 *******

let basket = [];
console.log('What\'s in the basket:', basket);

function addItem (item){
  basket.push(item);
  return true;
}
addItem('kiwi');
addItem('apple');
addItem('banana');
addItem('peach');
console.log('Items added to basket: ', basket);


//   ATTEMPT 1

// function listItems(){
//
//     for (var i = 0; i < basket.length; i++) {
//       basket[i]
//     }
// }
// console.log(listItems(basket));

//    ATTEMPT 2

// function listItems (){
//   for (let i = 0; i < basket.length; i++) {
//     if( i <= basket.length )
//     return basket[i];
//   }
//   return false;
// }
// console.log(listItems());

//   ATTEMPT 3

function listItems (inBasket){
  for (let i = 0; i < inBasket.length; i++) {
    console.log('List item', inBasket[ i ]);
  }
}
listItems(basket);

  ATTEMPT 1  *********

function empty (){
  basket = [];
}
empty();
console.log('What\'s in the basket: ', basket);


//     STRETCH GOALS

//    ATTEMPT 1   Only seems to work when empty() is commented out
const maxItems = 5;

function isFull(unit) {
  if(unit.length >= maxItems){
    return true;
  }//end if
  return false;
}//end funciton
console.log(isFull(basket));



//    ATTEMPT 1

// function addItem (item){
//   if(isFull(unit)){
//   basket.push(item);
//   return true;
//   }//end if
//   return false;
// }//end function
// addItem('kiwi');
// addItem('apple');
// addItem('banana');
// addItem('peach');
// addItem('pear');
// addItem('plum');
// console.log('Items added to basket: ', basket);

//    ATTEMPT 2

function addItem (item){

  basket.push(item);
  return true;
}

console.log('Items added to basket: ', basket);
