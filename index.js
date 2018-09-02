var app = new Vue({
    el: '#name',
    data: {
        name: ''
    },
    mounted() {
        if(localStorage.name)
        this.name = localStorage.name;
    },
    watch:{
        name(newName) {
            localStorage.name = newName;
        }
    }
})