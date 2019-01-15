<template>
    <div id="app">
    </div>
</template>

<script>
import { Car, CarFactory } from './model/Car.js'

export default {
    name: 'app',

    data: function() {
        return {
            factory: null,
            civic: null,
            honda: null,
        }
    },

    created: function() {
        this.factory = new CarFactory()
        this.civic = this.factory.createCar('civic')
        this.honda = this.factory.createCar('honda')
        console.log(this.civic)
        console.log(this.honda)
    },
}
</script>
