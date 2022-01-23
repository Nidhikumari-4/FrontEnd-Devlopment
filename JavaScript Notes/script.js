// console.log('Hello World');

/**** Section 3👉 values and variables in JavaScript ****/
// var myName = 'Nidhi Kumari';
// var myAge = 26;
// console.log(myName,myAge);
// console.log("---------------------");

/**** Section 4👉 Data Types in JavaScript ****/

// var myName="Nidhi Kumari";
// console.log(myName);
// console.log(typeof(myName));
// console.log();
// var myAge = 26;
// console.log(myAge);
// console.log(typeof(myAge));
// console.log();
// var iAmNidhi = true;
// console.log(iAmNidhi);
// console.log(typeof(iAmNidhi));
// console.log();
// console.log();
// // DataTypes Practice
// console.log( 10 + "20");
// console.log( 9 - "5");  //*********1st javascript bug*********
// console.log( "Java " + "Script"); 
// console.log( " " - " ");//gives 0
// console.log( " " + " ");
// console.log( " " + "0");
// console.log( "Nidhi" - "Kumari"); //NaN-Not a Number
// console.log( true + true);
// console.log( true + false);
// console.log( false + true);
// console.log( false - true);
// console.log();
// console.log();

// Question 1 - Difference between null vs undefined? 

// var iAmUseless = null;
// console.log(iAmUseless);//null
// var iAmStandBy;
// console.log(iAmStandBy);//undefined
// console.log(typeof(iAmUseless));//********2nd javascript bug*********
// var iAmStandBy;
// console.log(typeof(iAmStandBy));
// console.log();
// console.log();

// Question 2 - What is NaN?

// - NaN is a property of the global object. 
// - In other words, it is a variable in global scope.
// - The initial value of NaN is Not-A-Number 

// var myPhoneNumber = 9876543210;
// var myName = "thapa technical";

// console.log(myPhoneNumber);
// console.log(myName);
// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if(isNaN(myName)){
//     console.log("plz enter valid phone no");
// }

// NaN Practice 🤯

// NaN === NaN;        
// Number.NaN === NaN; 
// isNaN(NaN);         
// isNaN(Number.NaN);  
// Number.isNaN(NaN);

// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(Number.isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log();
// console.log();
// console.log("---------------------");

/**** Section 5👉 Arithmetic operators in JavaScript ****/

// console.log(5+20)

// 1️⃣Assignment operators
// var x=5;
// var y=5;
// console.log("is both the x and y are equal or not" + x == y )
// I will tell you when we will see es6
// console.log(`Is both the x and y are equal : ${x == y}`);

// 2️⃣Arithmetic operators
// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);
// console.log("Remainder Operator " + 27%4);

// Increment and Decrement operator

// var num=15;
// var newNum=num-- + 15;
// console.log(num);
// console.log(newNum);


// 3️⃣Comparison operators
// var a=30;
// var b=10;
// console.log(a==b);
// console.log(a!=b);
// console.log(a<b);
// console.log(a>b);
// console.log(a<=b);
// console.log(a>=b);

// 4️⃣ Logical operators
// var a=30;
// var b=-20;
// // Logical AND (&&)
// console.log(a > b && b > -50 && b < 0);
// // Logical OR (||)
// console.log((a < b) || (b > 0) || (b > 0));
// // Logical NOT (!)
// console.log(!((a>0) || (b<0)));
// console.log(!true);

// 5️⃣ String Concatenation(operators)

// console.log("Hello World");

// console.log("hello " +  "world");

// var myName = "vinod";

// console.log(myName + " thapa");
// console.log(myName + " bahadur");
// console.log(myName + " bahadur Thapa");


/**** Section 6👉 Control Statement - ****/

// 1️⃣If...Else 
// var tomr = 'sunny';

// if(tomr == 'rain'){
//   console.log('take a raincoat');
// }else{ 
//   console.log('No need to take a raincoat');
// }

// leap year

// var year=2012;

// if(year%4==0){
//     if(year%100==0){
//        if(year % 400==0){
//         console.log("The year " + year + " is a leap year ");
//        }else{
//         console.log("The year " + year + " is not a leap year");
//        }

//     }else{
//         console.log("The year " + year + " is  a leap year");
//     }
// }else{
//     console.log("The year " + year + " is not a leap year");
// }

/**** Section 5 👉 Functions in JavaScript ****/
