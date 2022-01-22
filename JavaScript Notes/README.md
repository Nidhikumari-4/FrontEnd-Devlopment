# **CODE WITH HARRY**
## What is JavaScript?

- JavaScript is a client side scripting language.
- It is used to make web pages alive.
- It is used to programmatically perform actions within the page.
- When JavaScript was created, it was initially called “LiveScript”.
- But Java was a very popular language at that time, so it was decided that positioning a language as a “younger brother” of Java would help.

## What JavaScript can do?

- JavaScript can execute not only in the browser, but also on the server.
- We will use JavaScript as a client as well as server side language.
- JavaScript has evolved greatly as a language and is now used to perform a wide variety of tasks. 

## What Can In-Browser JavaScript Do?

If JavaScripts are used in any websites, then it should not be given any low level CPU permissions like switching off the CPU etc. That is why JavaScript is made with extremely safe permissions that does not have any permission to access low level CPU usage. 

1. JavaScript can add new HTML and change existing HTML from DOM.
2. It can even react to any events (actions).
3. It can also manage the AJAX requests (GET or POST request)
4. JavaScript can **get** and **set** cookies and use local storage.

## What Can’t In-Browser JavaScript Do?

1. JavaScript cannot read or write to and from computer hard disk without user permissions. 
2. The browser does not allow the JavaScript of any website to collect the AJAX information of the other website because it generates the error of  same origin policy.
3. To summarize, JavaScript can only access the permitted resources but cannot access your documents on personal computers. 

These strict policies are developed to make sure that your computer is safe.

## What Makes JavaScript a Unique language?

- The most important thing that makes it a unique language is, it has a complete integration of HTML and CSS. They provide it with a lot of extra support.
- Also it provides the use of simple APIs (Application Programming Interface).
- It also supports the major modern browsers which are enabled by default. If you turn off the feature of JavaScript in the browser, you cannot access any website.

### Versions of JavaScript

JavaScript is such an important language that it requires substantial updates to maintain its different versions. The ECMA is a standard maintained for any of the scripting languages that pushes for new updates. The ECMA was first launched in 1997.

So I believe you must have understood the basic concept of JavaScript. We will learn more about it in the upcoming tutorials. Till then stay tuned with the tutorials.
<hr>
<hr>



# [**THAPA TECHNICAL**](https://youtu.be/KGkiIBTq0y0)

##  <u>**What is JavaScript ?**</u> 
- Improves the user experience of the web page by converting it from a static page into an interactive one.
- JavaScript adds behaviour to web pages.

<br>

### **How website FRONTEND works?**
![](./images/js1.jpg)

<br>

## **1. Values and Variables in JavaScript**
![](./images/var1.jpg)
![](./images/var2.jpg)
```js
var myName = 'Nidhi Kumari';
var myAge = 26;
console.log(myName,myAge);
```

<br>

## **2. Data Types in JavaScript**
![](./images/datatype1.jpg)
```js
var myName="Nidhi Kumari";
console.log(myName);
console.log(typeof(myName));
console.log();
var myAge = 26;
console.log(myAge);
console.log(typeof(myAge));
console.log();
var iAmNidhi = true;
console.log(iAmNidhi);
console.log(typeof(iAmNidhi));
console.log("---------------------");
// DataTypes Practice
console.log( 10 + "20");
console.log( 9 - "5");//bug
console.log( "Java " + "Script"); 
console.log( " " - " ");//gives 0
console.log( " " + " ");
console.log( " " + "0");
console.log( "Nidhi" - "Kumari"); //NaN-Not a Number
console.log( true + true);
console.log( true + false);
console.log( false + true);
console.log( false - true);
```
####  <u>Ques-1 🙋</u> - Difference between null and undefined ?
- Explaination using eg
```js
var iAmUseless = null;
console.log(iAmUseless);//null
var iAmStandBy;
console.log(iAmStandBy);//undefined
console.log(typeof(iAmUseless));//********2nd javascript bug*********
var iAmStandBy;
console.log(typeof(iAmStandBy));
```
####  <u>Ques-2 🙋</u> - What is NaN ?
- NaN is a property of the global object.
- In other words, it is a variable in global scope.
- The initial value of NaN is Not-A-Number
```
var myPhoneNumber = 9876543210;
var myName = "thapa technical";

console.log(myPhoneNumber);
console.log(myName);
console.log(isNaN(myPhoneNumber));
console.log(isNaN(myName));

if(isNaN(myName)){
    console.log("plz enter valid phone no");
}


// NaN Practice 🤯

NaN === NaN;        
Number.NaN === NaN; 
isNaN(NaN);         
isNaN(Number.NaN);  
Number.isNaN(NaN);
console.log(NaN === NaN);
console.log(Number.NaN === NaN);
console.log(isNaN(NaN));
console.log(Number.isNaN(NaN));
console.log(isNaN(Number.NaN));

```
####  <u>Ques-3 🙋</u> - What is difference between var vs let vs const  ?
- 
<br>

## **2.  Arithmetic operators in JavaScript**

![](./images/exp1.jpg)

### **1.Assignment Operator**