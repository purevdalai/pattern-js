<template>
    <div id="app">
    </div>
</template>

<script>
import { Car } from './model/Car.js'

export default {
    name: 'app',

    data: function() {
        return {
            car: new Car(4, 'V6', 'Black'),
        }
    },

    created: function() {
        console.log(this.car)
    },

    methods: {
        calc() {
            return 4 * 2
        },

        printCalc(callback) {
            console.log(callback())
        }
    }
}
</script>
