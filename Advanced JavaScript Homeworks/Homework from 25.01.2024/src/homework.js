class Product {
    constructor(name, category, hasDiscount, price){
        this.name = name;
        this.category = category;
        this.hasDiscount = hasDiscount;
        this.price = price;
    }
}

let products = [
    new Product('NESCAFE', 'Coffee', false, 5),
    new Product('Doritos', 'Snacks', false, 4),
    new Product('Milky Way Chocolate Candy Bars', 'Candy', true, 18),
    new Product('Fresh Grapefruit', 'Food', false, 1),
    new Product('Fresh Strawberries', 'Food', false, 3),
    new Product('Pringles', 'Snacks', true, 7),
    new Product('Kit Kat Milk Chocolate Candy', 'Candy', false, 5),
    new Product('Beef Ribeye Steak', 'Food', true, 25),
    new Product('Turkey Bacon', 'Food', false, 4),
    new Product('All Natural Turkey Can', 'Food', false, 130),
    new Product('Smoked Beef Bratwurst', 'Food', false, 4),
    new Product('Frozen Chicken Pot Pie', 'Frozen', true, 1),
    new Product('Frozen Thin Crust Pizza', 'Frozen', false, 3),
    new Product('Large White Eggs', 'Dairy', false, 20),
    new Product('Feta Cheese', 'Dairy', false, 4),

]

console.log('Products with price greater than 20 dollars:');

products.filter(product => product.price > 20)
.map(product => `${product.name}`)
.forEach(product => console.log(product))


console.log('----------------');    
console.log('Names of the products from the Food Category, that are on discount:');

products.filter(product => product.category === 'Food' && product.hasDiscount === true)
.map(product => `${product.name}`)
.forEach(product => console.log(product))

console.log('----------------');    
console.log('The prices of all the products that are on discount:');

products.filter(product => product.hasDiscount === true)
.map(product => `${product.price}`)
.forEach(product => console.log(product))

console.log('----------------');    
console.log('Names and prices of all the products whose names start with a vowel, that are not on discount:');

let vowels = 'aeiouAEIOU';
products.filter(product => vowels.indexOf(product.name[0]) !== -1 && product.hasDiscount === false)
.map(product => `Name: ${product.name} Price: ${product.price}`)
.forEach(product => console.log(product))

