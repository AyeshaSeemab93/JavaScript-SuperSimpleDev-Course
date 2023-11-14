let arto = {
    name: 'arto',
    age: 25,
    occupation: 'Businessman',
    greet: function(){
        console.log('My name is '+ this.name);   
    },
    addition: function(a,b){
    console.log(a+b);
    }
}
//arto.greet();
arto.getolder = function(){
   this.age +=1;
}
// console.log(arto.age);
// arto.getolder();
// console.log(arto.age);

// //storing a method reference in a variable and calling the method through the variable:
// let values = arto.addition;
// values(2,4); //6
// let greeting = arto.greet;
// greeting(); //XXXX   undefined this

setTimeout(arto.greet, 1000);  //My name is undefined
setTimeout(arto.greet.bind(arto), 1000);  //My name is arto