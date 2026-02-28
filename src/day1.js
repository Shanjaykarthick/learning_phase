let a = 10
let b = "10"

console.log("addtion:",a+b)
console.log("subraction",a-b)
console.log("multiplication :",a*b)
console.log("divison :",a/b)
console.log("modulus :" ,a%b)

console.log(a!=b)
console.log(a||b)
console.log(a&&b)

console.log("OR",true||true)
console.log("OR",true||false)
console.log("OR",false||true)
console.log("OR",false||false)
console.log("AND",true&&true)
console.log("AND",true&&false)
console.log("AND",false&&true)
console.log("AND",false&&false)
console.log("NOT",true!=true)
console.log("NOT",true!=false)
console.log("NOT",false!=true)
console.log("NOT",false!=false)

console.log(a!==b)
console.log(a===b)
console.log(a<=b)
console.log(a>=b)
console.log(a==b)
console.log(a>b)
console.log(a<b)
console.log(a!=b)

console.log(a)

let age = prompt("enter the age:")
const senior = a<=60
if(age>=18 && senior){
    console.log("eligible to vote")
}
else {
    console.log("not eligible to vote")
}

const mark = prompt();
if(mark>=90&&100){
    console.log("Grade : A")
}
else if(mark>=70&&mark<=89){
    console.log("Grade : B")
}
else if(mark>=50&&mark<=69){
    console.log("Grade : C")
}
else{
    console.log("Grade : U")
}

const login=true;
const sub=true;

if(login){
    console.log("logined")
    if(sub) console.log("subscribed ");
    else console.log("Not subscribed");
}
else
console.log("did Not logined");

const seg = {
    name : "srid",
    year : "2006",
    sec : "cse-d"
}
console.log(seg.sec)
const arr =["did","not","logined","subs"]
console.log(arr[3])
