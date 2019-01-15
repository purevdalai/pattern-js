<template>
    <div id="app">
    </div>
</template>

<script>
import { Car, Suv } from './model/Car.js'

export default {
    name: 'app',

    data: function() {
        return {
            civic: new Car(4, 'V6', 'Black'),
            cx5: new Suv(4, 'V8', 'Grey'),
        }
    },

    created: function() {
        console.log(this.civic)
        console.log(this.cx5)
    },
}
</script>
