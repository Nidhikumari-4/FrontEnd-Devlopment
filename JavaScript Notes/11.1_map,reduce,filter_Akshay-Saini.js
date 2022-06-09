//*************** MAP *************
console.log("    ");
console.log("*************** MAP *************");
const arr =[5,1,3,2,6];
// double-[10,2,6,4,12]
//triple-[15,3,9,6,18]
//binary-["101","1","11","10","110"]

function double(x){
    return x*2;
}
function triple(x){
    return x*3;
}
function binary(x){
    return x.toString(2);
}
const output =arr.map(double);
const output1 =arr.map(triple);
const output2 =arr.map(binary);
console.log(output);
console.log(output1);
console.log(output2);

//can write in this way too
const output3 =arr.map(function double(x){
    return x*2;
});
console.log(output3);

//can write in this way too
const output4 =arr.map((x)=>{
    return x*2;
});
console.log(output4);

//*************** FILTER *************
console.log("    ");
console.log("*************** FILTER *************");

const array =[5,1,3,2,6];
//filter odd values

function isOdd(x){
    return x%2;
}
const OUTPUT =arr.filter(isOdd);
console.log(OUTPUT);

//*************** REDUCE *************
console.log("    ");
console.log("*************** REDUCE *************");

const Array =[5,1,3,2,6];
//SUM OR MAX

function findsum(Array){
    let sum=0;
    for(let i=0;i<Array.length;i++){
        sum=sum+Array[i];
    }
    return sum;
}
console.log(findsum(Array));