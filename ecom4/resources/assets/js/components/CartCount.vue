<template>
  <div>{{cartcount}} </div>
</template>

<script>
    export default {
        props:['cartcount'],

        data(){
            return {
            }
        },

        created() {
            console.log('Component mounted.')
        },

    }
</script>
