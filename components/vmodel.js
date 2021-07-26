Vue.component('vmodel',{
    data(){
        return{
            name: "hernan"

        }
    },
    template:`
        <div>
            <h2>    Bindeo de data  </h2>
            <input v-model="name" />
            <p> Hola buenos dias {{ name }}</p>
        </div>

    
    
    `

    
    
    
    
    
    
})