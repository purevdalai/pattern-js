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