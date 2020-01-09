const add = (a: number, b: number) => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
};

function divide(a: number, b: number): number {
    return a / b;
}

// anonymouse function
const multiple = function(a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
    // return null | undefined; // void can return null | undefined
};

const throwError = (message: string): void => {
    // anytime you throw an error, the function will not return anything
    if (!message) {
        throw new Error(message);
    }
}; // because we're not returning anything and there's a chance of us never reaching the end of the function
