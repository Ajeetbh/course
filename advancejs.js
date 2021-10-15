//ES6 version added class ,arrow function,let that's why ES6 are important

//var,let and const

//1.var keyword make properties of global object
// var count=1;
// console.log(window.count) //1

//let keyword not make properties of global object
// let count=1;
// console.log(window.count) //undefined

//2.redeclared
// var count=1
// var count;
// console.log(count) //1

// let count=1;
// let count;
// console.log(count); //Identifier 'count' has already been declared

//const and let 
// let count=1; 
// count=2;
// console.log(count); //2

// const count=1; 
// count=2;
// console.log(count); //error :assignment  of constant variable


//3.ES6 feature default parameter
// function talk(msg){
//     console.log(msg);
// }
// talk('hello') //hello

// function talk(msg){
//     console.log(msg);
// }
// talk() //undefined :when we will not pass any parameter then it take defalut parameter as undefined

// function talk(msg='hi'){
//     console.log(msg);
// }
// talk()//hi

// function talk(msg='hi'){
//     console.log(msg);
// }
// talk('hello')//hello


//4.rest parameter
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(3,4))


//if want sum of more Node.then we use  ...args
// function sum(..args){
//     console.log(args);
// }
// sum(2)//[2]
// sum(3,4,5)//[3,4,5]  //it store in array

// function sum(...args){
//     let result=0;
//     for(let i=0;i<args.length;i++){
//         result+=args[i];
//     }
//     console.log(result);
// }
// sum(2)//2
// sum(3,4,5)//12


//5.spread operator means copy using ... 
// let array1=[1,2,3]
// let array2=[5,4,6,...array1]
// let array2=[...array1,4,5,6]//[1,2,3,4,5,6]
// let array2=[4,...array1,5,6]//[4,1,2,3,5,6]
// let array2=[...array1,...array2]//[1,2,3,4,5,6]
// console.log(array2) //[ 5, 4, 6, 1, 2, 3 ]


//6.for of :is used for iterating ,in these no need to find the length
// let score=[1,2,3,9,8]
// for(let x of score){
//     console.log(x)
// }

// let score='Hello World';
// for(let x of score){
//     console.log(x)
// }  //H e  l l o W o r l d


//7.template literals
// let str='Hello \nworld'
// console.log(str);

// let str=`Hello
//    world
// thankyou`
// console.log(str)

// let str='Ajeet'
// console.log("my name is "+str+".");
// console.log(`My name is ${str}.`);


//8. array distructuring in ES6
// let book=['java',200,150]
// //console.log(book[1])//200
// let name = book[0];
// let page=book[1]
// let price=book[2]
// console.log(name); //java

// let book=['java',200,150]
// let[name,page,price]=book
// console.log(name);


//9. object destructing
// let book={
//     name:'java',
//     page:200,
//     price:150,
//     publication:{
//         pub_name:'techgun',
//         year:2021
//     }
// };
//let{name:title,page,price,publication:{pub_name:pub,year}}=book;
//console.log(pub)



//11. oops
// var person={
//     firstName:'Ajeet',
//     lastName:'Bharti',
//     age:25,
//     fullName:function(){
//         console.log(this.firstName+' '+this.lastName)
//     }
// }
// person.fullName()

// var person={}
// person.name='Ajeet'
// person.age=25
// person.sayHi=function(){
//     console.log('hello')
// }
// console.log(person)
// person.sayHi()

// var person=new Object;
// person.name='Ajeet Bharti'
// person.age=25
// person.sayHi=function(){
//     console.log('hello')
// }
// console.log(person)
// person.sayHi()


//constructor
function Person(first,last,a){
    this.firstName=first;
    this.lastName=last;
    this.age=a;
    this.sayHi=function(){
        console.log('Hi Hello');
    }
    this.changeAge=function(newAge){
        this.age=newAge;
    }
}

let person1=new Person('Ajeet','Kumar',20)
person1.changeAge(15)
//let person2=new Person('Ajay','Bharti',21)
console.log(person1)
//console.log(person2)