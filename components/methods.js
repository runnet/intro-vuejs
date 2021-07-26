Vue.component('methods', {
    data(){
        return{
            nombre: "pablo",
            apellido: "villamizar"
        }

    },
    computed:{
        nombreCompleto(){
            return `${this.nombre} ${this.apellido}`
        }
    },

    methods: {
        saludar(){
            alert("Hola " + this.nombreCompleto)
        }
    },

    template: `
        <div>
            <h2>Ejemplo Methods</h2>
            <p @click="saludar">  saludame </p>
        </div>
    
    `

})