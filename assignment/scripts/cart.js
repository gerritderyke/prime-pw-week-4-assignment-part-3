console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
 let basket = []

 function addItem( item){

   basket.unshift( item );
   return basket;
     if (item >= basket.length);{
       return true;
     }//end if
    return false;
 }//end function
console.log(`basket is ${basket}`);
console.log('adding kiwi (expect true)', addItem('kiwi'));
console.log(`basket is now ${basket}`);
