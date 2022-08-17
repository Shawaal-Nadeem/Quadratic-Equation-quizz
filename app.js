
let a=2;
let b=4;
let c=-6;
console.log("The roots of Equation are : ");
function calRoot1(a,b,c){
   let y=b*b-4*a*c
    let x=Math.sqrt(y)
    let x1=-b+x
    let x2=2*a
    let x3=x1/x2
    return x3
}
console.log(calRoot1(a,b,c))

console.log(calRoot1)
function calRoot2(a,b,c){
    let y=b*b-4*a*c
    let x=Math.sqrt(y)
    let x1=-b-x
    let x2=2*a
    let x3=x1/x2
    return x3
}
console.log(calRoot2(a,b,c))

