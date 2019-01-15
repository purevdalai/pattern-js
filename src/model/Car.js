export class Car {
    constructor(doors, engine, color) {
            this.doors = doors
            this.engine = engine
            this.color = color
    }

    getColor() {
        return this.color
    }

    getEngine() {
        return this.engine
    }

    getDoors() {
        return this.doors
    }

    setColor(color) {
        this.color = color
    }

    setEngine(engine) {
        this.engine = engine
    }

    setDoors(doors) {
        this.doors = doors
    }
}

export class CarFactory {
    createCar(type) {
        switch(type) {
            case 'civic':
                return new Car(4, 'V6', 'Grey')
            case 'honda':
                return new Car(2, 'V4', 'Yellow')
        }
    }
}