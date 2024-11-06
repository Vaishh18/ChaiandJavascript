const myNums =[1,2,3,4,5,6,7,8,9,10]

const newNums=myNums.filter((num) => num>4)
console.log(newNums);

//if books object given
//1
const books =[
    { title: "Sapes",genre: "fiction" ,publishyr:1990},
    { title: "Sapes",genre: "fiction" ,publishyr:1999},
    { title: "Sapes",genre: "fiction" ,publishyr:1899},
];



let userBooks = books.filter((bk)=> bk.genre === 'fiction')
userBooks=books.filter((bk)=> {
    return bk.publishyr >= 1900 || bk.title==='Sapes'}) //declared in scopre i.e state 'return'
console.log(userBooks);


//2

