let random = Math.random();
let a = Number(prompt("Enter First Number: "));
let b = Number(prompt("Enter Second Number: "));
let c = prompt("Enter Operation you want to perform.");

// const prompt = require("prompt-sync")();

// let random = Math.random();
// let a = Number(prompt("Enter First Number: "));
// let b = Number(prompt("Enter Second Number: "));
// let c = prompt("Enter Operation you want to perform (+, -, *, /): ");
// let random = Math.random();
// let a = Number(prompt("Enter First Number: "));
// let b = Number(prompt("Enter Second Number: "));
// let c = prompt("Enter Operation you want to perform (+, -, *, /): ");

const obj ={
    "+" : "-",
    "*" : "+",
    "/" : "**",
    "-" : "/",
}
if(random>0.1){
    if(c=="+"){
        console.log(a+b);
    }
    else if(c == "-"){
        console.log(a-b);
    }
    else if(c == "*"){
        console.log(a*b);
    }
    else{
        console.log(a/b);
    }
}
else{
    c = obj[c];
    if (c == "+") console.log(a + b);
    else if (c == "-") console.log(a - b);
    else if (c == "*") console.log(a * b);
    else if (c == "/") console.log(a / b);
    else if (c == "**") console.log(a ** b);
}

document.body.style.backgroundColor = "skyblue";