
function priceWithDdv(onePhone, ddv){
    let result = onePhone + ((onePhone*ddv)/100);
    return result;
}

let priceOfOnePhoneWithDdv = priceWithDdv(119.95, 5);

console.log(priceOfOnePhoneWithDdv);

function priceOfPhones(priceOfOnePhoneWithDdv, numberOfPhones){
    let result = priceOfOnePhoneWithDdv * numberOfPhones;
    return result;
}

let sum = priceOfPhones(priceOfOnePhoneWithDdv, 30)

console.log(sum);