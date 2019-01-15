<template>
    <div id="app">
    </div>
</template>

<script>
import { AutoManufacturer } from './model/Car.js'

export default {
    name: 'app',

    data: function() {
        return {
            civic: null,
            honda: null,
            cx5: null,
            sante: null,
        }
    },

    created: function() {
        this.civic = new AutoManufacturer('car', 'civic')
        this.honda = new AutoManufacturer('car', 'honda')
        console.log(this.civic)
        console.log(this.honda)
        this.cx5 = new AutoManufacturer('suv', 'cx5')
        this.sante = new AutoManufacturer('suv', 'sante fe')
        console.log(this.cx5)
        console.log(this.sante)
    },
}
</script>
