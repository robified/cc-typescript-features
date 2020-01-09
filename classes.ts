class Vehicle {
    protected honk(): void {
        console.log('beep');
    }
}

// you can't do this because honk() is protected
const vehicle = new Vehicle();
vehicle.honk();

class Car extends Vehicle {
    private drive(): void {
        console.log('vroom');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car();
car.startDrivingProcess();
