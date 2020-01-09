// a variable that refers to a type
interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

// to call this function, you must provide an object that has certain properties
const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);
