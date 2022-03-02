// 2️⃣ Array Subsection 2 👉 Searching and Filter in an Array 

// Array.prototype.indexOf() 🙋‍♂️

// Returns the first (least) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element from the 
// 0th index number 

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

// console.log(myFriendNames.indexOf("Thapa", 3));



// Array.prototype.lastIndexOf() 🙋‍♂️
// Returns the last (greatest) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element last to first

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

// console.log(myFriendNames.lastIndexOf("Thapa",3));



// Array.prototype.includes() 🙋‍♂️
// Determines whether the array contains a value, 
// returning true or false as appropriate.

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical"];

// console.log(myFriendNames.includes("thapa"));



// Array.prototype.find() 🙋‍♂️

// arr.find(callback(element[, index[, array]])[, thisArg])

// Returns the found element in the array, if some element in the 
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

// const prices = [200,300,350,400,450,500,600];

// price < 400
// const findElem = prices.find((currVal) =>  currVal < 400 );
// console.log(findElem);

// console.log(  prices.find((currVal) => currVal > 1400 )  );



// Array.prototype.findIndex() 🙋‍♂️

// Returns the found index in the array, if an element in the 
// array satisfies the testing function, or -1 if not found.


// console.log(  prices.findIndex((currVal) => currVal > 1400 )  );


// Array.prototype.filter() 🙋‍♂️

// Returns a new array containing all elements of the calling 
// array for which the provided filtering function returns true.

// const prices = [200,300,350,400,450,500,600];

// // price < 400
// const newPriceTag = prices.filter((elem, index) => {
//   return elem > 1400;
// })
// console.log(newPriceTag);

