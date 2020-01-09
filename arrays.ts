// this will return an any[]. We want to avoid this.
// const carMakers = [];
const carMakers: string[] = ['ford', 'toyota', 'chevy'];

// this will contain an array that contains instances of Dates
const dates = [new Date(), new Date()];

// const carsByMake: string[][] = [];
// this is a 2 dimensional arrays
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
    // we get access to a lot of auto complete methods from strings
    return car.toUpperCase();
});
