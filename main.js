// task1
// let a=+prompt()
// function Polygon(){
//     if(a>=2)
//     return (a-2)*180

// }
// alert(Polygon())

// task2
// let a=+prompt()
// let b=+prompt()
// function Polygon(){
   
//     return a+b

// }
// alert(Polygon())

// task3
// let a=prompt()
// function Polygon(){
        // return a.toUpperCase().split("").reverse().join()
// }
// alert(Polygon())

// task4
// function Polygon(){
//         return arguments.length
// }
// alert(Polygon(1,2,3,4))


// task5
// let a=+prompt()
// function Seconds(){
//         return a*60
// }
// alert(Seconds())

// task6
// let a=+prompt()
// function Days(){
//         return a*365
// }
// alert(Days())

// task7
// let a=+prompt()
// let b=+prompt()
// function Power(){
//         return a*b
// }
// alert(Power())

// task8
// let a=+prompt()
// function Power(){
//     if(a%2==0)
//         return "Even"
//         else
//         return "Odd"
// }
// alert(Power())

// task9
// function Power(a){
//       a=a.split(" ")
//     return Math.max(...a)+" "+Math.min(...a)
// }
// console.log(Power("1 2 3 4 5"))


// task10
// let a=+prompt()
// let b=prompt()
// let c=+prompt()
// function Power(){
//     if(b=="+"){
//         return a+c}
//         else if (b=="-")
//         {
//         return a-c
//         }
//         else if (b=="*")
//         {
//         return a*c
//         }
//         else if (b=="/")
//         {
//         return a/c
//         }
// }
// console.log(Power())


// task11
// let max=0
// function Power(string){
//         string=string.split(" ")
       
//         for(let i=0;i<string.length;i++)
//         {
//             if(i.length>max){
//             i.length=max}
//         }
//         return max

// }
// console.log(Power("the quick brown fox"))


// task1
// function factorial(n)
// {
//     if (n <= 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// console.log(factorial(5))

// task2
//     function doublefactorial(n)
//     {
//         if (n == 0 || n==1)
//             return 1;   
//         return n * doublefactorial(n - 2);
//     } 
//     console.log(doublefactorial(5));


// task3
// function factorial(n)
// {
//     if (n < 0) {
//         return 0;
//     }
//     return n + factorial(n - 1);
// }
// console.log(factorial(5))





// task5
// function fibonacci(n)
// {
//     if (n < 2) {
//         return n;
//     }
//     else
//     return fibonacci(n - 1)+fibonacci(n - 2);
// }
// console.log(fibonacci(8))

// -----------CLOSURE--------


// TASK1
// function string(x) {
//         return function () {
//                 return x;
//         }
          
//       }
// console.log(strting("apple"))



// task2
// function AddsNum(x) {
//         return function (y) {
//           return x + y;
//         }
//       }
//       var add1 =  AddsNum(3)
//       console.log(add1(1));

// task3
//       function Adder(x) {
//         return function (y) {
//           return x + y;
//         };
//       }
//       const add5 = Adder(-2);
//       console.log(add5(2));

// task4
//       function Adder(x) {
//         return function (y) {
//           return x + y;
//         };
//       }
//       const add5 = Adder("hopeless");
//       console.log(add5("ly"));


// task4
//       function Adder(x) {
//         return function (y) {
//           return x + y;
//         };
//       }
//       const add5 = Adder("hopeless");
//       console.log(add5("ly"));



// task5
//       function time(a1,a2) {
//         return function (b1,b2) {
//                return function (c1,c2){
//                         return  (a1*b1*c1)+(a2*b2*c2)
//           }
//         }
//       }
//       console.log(time(1,2)(1,1)(2,3))


// Tasks about “Function” in
// Java Script

// task1
// function Square(n){
//         return n*n
// }
// console.log(Square(5))


// task2
// function Square(a){
//         return function (b) {
//         if (a==b)
//         return "true"
//         }
// }
// console.log(Square(5)(5))

// task3
// function Square(a){
//         return function (b) {
//         if (a==b)
//         return "true"
//         }
// }
// console.log(Square(5)(5))



// task4
// let a=prompt()
// function Nemo(){
// let result=a.includes("Nemo")
// if(result==true)
// {
//     return("I found Nemo")
// }
// else{
// return ("I can't find Nemo")
// }
// }
// console.log(Nemo())

// task4
// let add=function (char,text){
// let txt=text.split(' ').join(char)
// return txt;
// }
// console.log(add('#','hello world'))
// console.log(add('R', 'python is fun'))


// task5
//       function Adder(x) {
//         return function (y) {
//           return x + y;
//         };
//       }
//       const add5 = Adder(1);
//       console.log(add5(2));


// task 6-------------------
// function Hacker(a){
// let result=a.replaceAll("a","4").replaceAll("i","1").replaceAll("e","3").replaceAll("o","0").replaceAll("s","5")
// return result
// }
// console.log(Hacker("javascript is cool"))


// task 7-----------------
// let a=prompt()
// for(let i=0;i<=a.length;i++)
// if (a[i]=="a" || a[i]=="e" || a[i]=="i" || a[i]=="o" || a[i]=="u" )
// {
    
// }
// alert(cnt);  



// Recursion tasks

// task1
// function Split(n){
//     return [Math.floor(n/2),Math.ceil(n/2)]
// }
// console.log(Split(11))

// task2
// let arr=[ "a","ccc","dddd","bb"]
//     arr.sort(function (a,b){
//     return a.length-b.length    
// })
// console.log(arr)

// task3
// const array1 = [1, 2, 3, 4];

// function sumOfCubes(array1){

//     let arrMap=array1.map((e)=>{
//         return e*e*e
//     })
//     let arrReduce=arrMap.reduce((a,b)=>{
//         return a+b
//     })
//     return arrReduce
// }
// console.log(
//     sumOfCubes(array1)
//     )


// task4
// function Compact(arr){
//     return arr.filter((a)=>{
//         return a
//           })   
// }
// console.log(Compact([1,2,3,' ',false]))

// task5
// function secondlarg(arr){
//     let arr1=arr.sort((a,b)=>{
//     return b-a 
// })[1]
// return arr1
// }
// console.log(secondlarg[1,2,4,3,5,56])




