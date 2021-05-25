new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertar(){
            alert("!!!!!");
        },
        armazenar(event){
            this.valor = event.target.value;  
        }
    }
})