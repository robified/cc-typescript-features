const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// const pepsi = ['brown', true, 40];
// this will break the order and lose information
// pepsi[0] = 40;
// pepsi[2] = 'brown';

// how to add a type alias
type Drink = [string, boolean, number];

// to add a tuple annotation
const pepsi: Drink = ['brown', true, 40];
pepsi[0] = 40; // won't work because we are assigning a different type
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsepower: 400,
    weight: 3354
};
