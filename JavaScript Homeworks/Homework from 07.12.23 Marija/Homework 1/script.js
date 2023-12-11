console.log('Homework 1');

function inputParameter(parameter){
    let result = typeof(parameter);
    return result;
}

let parameter1 = inputParameter(null)
let parameter2 = inputParameter(500 < 1000)
let parameter3 = inputParameter(2345345)
let parameter4 = inputParameter('Umbrella')
let parameter5 = inputParameter()

console.log(parameter1);
console.log(parameter2);
console.log(parameter3);
console.log(parameter4);
console.log(parameter5);