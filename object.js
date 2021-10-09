// let person={
//     firstName:'Ajeet',
//     lastName:'Kumar'
// }
// console.log(person['firstName'])
// console.log(person.firstName)
// console.log(person)

// let person={
//     'first Name':'Ajeet',
//     lastName:'Kumar'
// }
// console.log(person['first Name'])
// console.log(person.'first Name')   //it fail to access of dot notation


//to modify the properties
// let person={
//     firstName:'Ajeet',
//     lastName:'Kumar'
// }
// person.firstName='Ajay'
// console.log(person)


//to add peroperties
// let person={
//     firstName:'Ajeet',
//     lastName:'Kumar'
// }
// person.age=25
// person.firstName='Ajay'
// console.log(person)


//to delete the properties
// let person={
//     firstName:'Ajeet',
//     lastName:'Kumar'
// }
// delete person.lastName;
// console.log(person)

// to check propeties present or not
//use in operator
// let person={
//     firstName:'Ajeet',
//     lastName:'Kumar',
//     age:25
// }
// //console.log(person.heigth)
// console.log('height' in person); //false
// console.log('age' in person) //true


//iterate all properties
//using for in loop
// let person={
//     firstName:'Ajeet',
//     lastName:'Kumar',
//     age:25
// }
// for(let key in person){
//     console.log(key) //it print only key
//     console.log(key+':'+person[key])
// }




//METHOD
// let person={
//     firstName:'Ajeet',
//     lastName:'Kumar'
// }


// we can create methode via 4 type
// 1. anonymous function 
// person.sayHello=function(){
//     console.log('Hello')  //anonymous function which have no name
// }
// person.sayHello();

//2 normal function
// function greet(){
//     console.log('Hello ..')
// }
// person.sayHello=greet;
// person.sayHello()

//3 type
// let person={
//     firstName:'Ajeet',
//     lastName:'Kumar',
//     sayHello:function(){
//         console.log('Hi');
//     }
// }
// person.sayHello();

//4 type 
// let person={
//     firstName:'Ajeet',
//     lastName:'Kumar',
//     sayHello(){
//         console.log('good morning')
//     }
// }
// person.sayHello()




//this Keyword
//we can access properties of anothe object in another object
// let person={
//     firstName:'Ajeet',
//     lastName:'Kumar',
//     sayHello(){
//         console.log('Hello i am '+this.firstName+' i have a '+ car.brand +' car')
//     }
// };
// let car={
//     brand:'Tata',
//     model:'Safari'
// }
// person.sayHello();



//Math object
// console.log(Math.PI)
//console.log(Math.E)

// var x=Math.round(4.7)
// console.log(x) //5
// var x=Math.round(4.2)
// console.log(x) //4   because .2 is less than .5

// var x=Math.ceil(4.7)
// console.log(x) //5
// var x=Math.round(4.9)
// console.log(x) //5

// var x=Math.floor(4.7)
// console.log(x) //4
// var x=Math.floor(4.9)
// console.log(x) //4

// var x=Math.trunc(4.7)
// console.log(x) //4 it remove the .

// var x=Math.pow(2,3)
// console.log(x) //8

// var x=Math.sqrt(4)
// console.log(x) //2

// var x=Math.min(2,3,0,-5,100,4)
// console.log(x) //-5

// var x=Math.max(4,39,22,100,33)
// console.log(x) //100


//RANDOM Number
// var x=Math.random() //0-1
// console.log(x)

// i want to number between 0-9
// var x=Math.random()*10 
// console.log(x)

//if want only number not in decimal
// var x=Math.floor(Math.random()*10)
// console.log(x)

//1-10
// var x=Math.floor(Math.random()*10)+1
// console.log(x)

//if given range 25-15
// var x=Math.floor(Math.random()*(25-15))+15
// console.log(x)

// //using function
// function getRandom(min,max){
//     let x=Math.floor(Math.random() * (max-min)+min); //it give 10-19
//     //let x=Math.floor(Math.random() * (max-min+1)+min); // it give 10-20
//     return x;
// }
// console.log(getRandom(10,20))



//new KEYWORD
// var person={
//     name:'Ajeet',
//     age:25
// }

// var person=new Object();
// person.name="Ajeet Kumar"
// person.age=25;
// console.log(person.name)
// console.log(person.age)



//Getters and Setters
// var person={
//     name:'ajeet',
//     age:25,
//     // getname:function(){
//     //     return this.name.toUpperCase()
//     // }
//     // get getname(){
//     //     return this.name.toUpperCase()
//     // },
//     set setname(n){
//         return this.name=n.toUpperCase();
//     }
// }
// person.setname='ajay'
// console.log(person)



//Object constructor function
// var student1={
//     firstName:'Ajeet',
//     lastName:'Kumar',
//     age:25,
//     class:5
// }
// var student2={
//     firstName:'Ajay',
//     lastName:'Bharti',
//     age:20,
//     class:7
// }

// function Student(first,last,age,cls){
//     this.firstName=first;
//     this.lastName=last;
//     this.age=age;
//     this.class=cls;
// }
// var student1=new Student('Ajeet','Kumar',25,12)
// // var student2=new Student('Amit','Kumar',20,10)
// // var student3=new Student('Ankit','Kumar',15,8)
// // var student4=new Student('Anuj','Kumar',10,5)
// student1.nationality='Indian';
// student1.name=function(){
//     return this.firstName+ " "+this.lastName;
// }
// console.log(student1.name())



//prototype
// function Student(first,last,age,cls){
//     this.firstName=first;
//     this.lastName=last;
//     this.age=age;
//     this.class=cls;
// }
// var student1=new Student('Ajeet','Kumar',25,12)
// var student2=new Student('Amit','Kumar',20,10)

// Student.prototype.nationality='Indian';

// // student1.nationality='Indian';
// // student1.name=function(){
// //     return this.firstName+ " "+this.lastName;
// // }
// console.log(student1)
// console.log(student1.nationality)


//nested object
var user={
    id:101,
    email:'abc@gmail.com',
    personalInfo:{
        name:'abc',
        address:{
            street:"acs",
            city:'delhi',
            country:'India'
        }
    }
}
console.log(user.personalInfo.address.city);