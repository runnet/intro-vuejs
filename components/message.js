Vue.component('message',{
    data(){
        return {
            message: "Hola 2amigos"
        }
    },
    template: `
        <div>
            <h1>  Componente message  </h1>
            <p>{{message}}</p>
        </div>
    `

})