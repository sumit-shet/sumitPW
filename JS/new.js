let num=20*2
//console.log(num/2);
//console.log(num+2*3);
console.log(num!=20);
if (num>20) {
    console.log("greater");
}

let trafficLight = "red"
if (trafficLight === "green") {
    console.log("you can go now");
}
if (trafficLight === "red") {
    console.log("hey sTOP");
}
if (trafficLight === "yellow") {
    console.log("slow down");
}
switch (trafficLight) {
    case "red":
        console.log("goo home");
        break;

    default:
        break;
}
let arr = [];
arr.push("good","bad","verybad")
console.log(arr.length);
arr[5]="veryGood";  //"good","bad","verybad", no Value, no Value, "veryGood"
console.log(arr.length);
arr.length=10;
console.log(arr.length);
console.log(arr[8]); 
console.log(arr);

//decresing the arr
arr.length =2;
console.log(arr.length);
console.log(arr);


//creating array with constructor Array()
let arr1=new Array();
console.log(arr1);

function evenOrodd(x) {
    if (x%2==0) {
       return console.log("even");
    } else {
        return console.log("odd");
    }
}
badbou = evenOrodd(21);



function calculate(x) {
    return x*x
}
console.log(calculate(20));

function add() {
    let sum=0
    
    for (let x = 0; x < arguments.length; x++) {
        sum +=x;
        
    }return sum;
}
console.log(add(1,2,3,4,5));

