<template>
    <div id="app">
    </div>
</template>

<script>

export default {
    name: 'app',

    created: function() {
        // console.log('Hello World!')
        this.printCalc(this.calc)
        // console.log('numb => ', numb)
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
