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

export class Suv {
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

export class SuvFactory {
    createCar(type) {
        switch(type) {
            case 'cx5':
                return new Car(4, 'cx5', 'Green')
            case 'sante fe':
                return new Car(2, 'sante', 'Red')
        }
    }
}

let carFactory = new CarFactory()
let suvFactory = new SuvFactory()

export class AutoManufacturer {
    constructor(type, model) {
        switch(type) {
            case 'car': 
                return carFactory.createCar(model)
            case 'suv':
                return suvFactory.createCar(model)
        }
    }
}