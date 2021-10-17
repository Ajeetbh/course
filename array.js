// let book1='Math';
// let book2='Physics';
// let book3='Bio';
// let book4='Computer Science'
// console.log(book3)

// let book=['math','physics','bio','computer science'];
// //let book=new Array('math','physics','bio','computer science');
// //console.log(book[2])
// book[1]='English'
// console.log(book)

// let book=['math','physics','bio','computer science'];
// // book.push('Hindi')
// // book.unshift('Hindi')
// //book.pop()
// book.shift()
// console.log(book)
// console.log(book.length)


// let book=['math','physics','bio','computer science'];
// //book.splice(1,2)
// //book=[]
// //book.length=0;
// let position=book.indexOf('bio')
// console.log(position)
// console.log(book.length)


// let text='This is a random text'
// //let wordArray=text.split('s'); //[ 'Thi', ' i', ' a random text' ]
// // let wordArray=text.split(' ')
// let wordArray=text.split('')
// console.log(wordArray)

// let book=['math','physics','bio','computer science']
// let wordArray=book.join('-');
// console.log(wordArray)

// let book=['math','physics','bio','computer science']
// let book1=['hindi','English']
// let book2=['punjabi','urdu']
// let newBook=book.concat(book1,book2)
// console.log(newBook)

// let book=['math','physics','bio','computer science']
// for(let i=0;i<book.length;i++){
//     console.log(`Element ${i} is ${book[i]}\n`)
// }

let book=['math','physics','bio','computer science']
book.forEach(myfun);
function myfun(value){
    console.log(value)
}