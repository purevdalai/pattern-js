let instance = null;
export class Car {
    constructor(doors, engine, color) {
        if (!instance) {
            this.doors = doors
            this.engine = engine
            this.color = color
            instance = this;
        } else {
            return instance
        }
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

export class Suv extends Car {
    constructor(doors, engine, color) {
        super(doors, engine, color)
        this.wheels = 4;
    }

    getWheels() {
        return this.wheels
    }
}