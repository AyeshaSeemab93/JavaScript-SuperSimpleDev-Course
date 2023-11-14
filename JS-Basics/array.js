// //      ARRAY
// let colorArray = ['Red', 'Blue'];
// console.log(colorArray);
// console.log(colorArray[0]);
// //adding element in array
// colorArray[2]= 'Green';
// console.log(colorArray);
// colorArray.push(1);
// console.log(colorArray);
// // can add different type of elements in array
// colorArray[3]= 5;
// console.log(colorArray);
// console.log(colorArray.length);

// //printing array
// colorArray.forEach(value => {
//     console.log(value);
// } 
// )


// ..............................

// //increasing the length
// let fruits = [];
// fruits.push('APPLE', 'banana', 'peach');
// fruits.length = 10;
// console.log(fruits);
// fruits[8] = 'mango';
// console.log(fruits);

// ..............................
//array.Foreach()
// let num = [2,3,4,5];
// // //num.forEach(another function here as parameter)
// // num.forEach((value) =>{
// //     console.log(value);
// // })
// //lets shorten it (x)
// num.forEach(value => console.log(value));

// ..............................
//filter()

// let num = [2,3,4,5,6,7];
// //boolean
// let even= num.filter((value) =>{ 
//     return value%2===0}
// );
// console.log(even);
// //short code
// let even = num.filter(value => value%2 === 0);
// console.log(even);

// ..............................
//map()
//double all the values in array
// num.map(n=> n*2)

// or do something to values
// let num =[1,2,3,4,5,6,7,8];
// console.log(
// num.map(n=> '<li>' + n + '<li>' )); // [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed

// ..............................
//using filter, map, and foreach altogether
// let num =[1,2,3,4,5,6,7,8];
// num.filter(n => n%2 ===0)
// .map(n=> n*2)
// .forEach(n=> console.log(n));

// ........................

// //Reduce (sum of all the elements in the array)
// let num =[1,2,3,4];
// let result = num.reduce((a,b)=>{return a+b});
// console.log(result);



//Destructuring
//let num = [1,2,3];
// // let[one,two, three] = num;
// // console.log(one); //1
// // console.log(two); //2
// // console.log(one); //3
// let[one, ...rest] = num;
// console.log(one); //1

// console.log(rest); //[ 2, 3 ]