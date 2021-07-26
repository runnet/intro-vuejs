Vue.component('emit',{
    data(){
        return{
            marcaRopa: 'Arturo Calle',
            

        }
    },

    template:`
        <div>
        <h2>Emitir eventos del Componente padre</h2>
        <p @click="$emit('show-marca-ropa', marcaRopa)">
            Click para emitir evento de la 
            instancia root de Vue
            </p>
        </div>

      
    
    `





})