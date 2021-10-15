// for(let i=1;i<=10;i++){
//     console.log(`2*${i}=${2*i}`);
// }

// function mul(){
//     for(let i=1;i<=10;i++){
//         console.log(`3*${i}=${3*i}`)
//     }
// }
// mul();
// console.log('Ajeet')
// mul()


//parameter and argument
// function mul(n){
//     for(let i=1;i<=10;i++){
//         console.log(`${n}*${i}=${n*i}`)
//     }
// }
// mul(19);

// function add(a,b){
//     console.log(`sum of a and b ${a}+${b}=${a+b}`)
// }
// add(3,4);



//argument object
// function add(){
//     if(arguments.length==0){
//         console.log('no parameter passes!')
//     }else{
//         let sum=0;
//         for(let i=0;i<arguments.length;i++){
//             sum+=arguments[i]
//         }
//         console.log('Sum=',sum)
//     }
// }
// add()
// add(2)
// add(0,9)
// add(3,5,7,8)


//return statement
// function add(a,b){
//     console.log('Ajeet')
//     //let z=[3,4,5,6]
//     let c=a+b;
//     return c
//     console.log('Ajay')
    
// }
// let c=add(6,9)
// console.log(c);

// function compare(a,b){
//     if(a>b){
//         return 1;
//     }else if(a<b){
//         return -1;
//     }else{
//         return 0;
//     }
// }
// let c=compare(30,30)
//console.log(c)


//global and local variable
// let car='audi'
// function add(){
//     let result=33
//     console.log(result)
//     console.log(car)
// }
// add()
// console.log(car)


//anonymous function : which have no name of function;
// let result=function(){
//     console.log('Hi')
// }
// result()

// function show(){
//     console.log('Hello')
// }
// // setTimeout(FunctionName,Time)
// setTimeout(show,3000)


//Immediately invoked function
// (function(){
//     let str='Ajeet';
//     console.log(str);
//     console.log("hello world")
//     //alert('Hi world')
// })();