Vue.component('child-data',{
    data(){
        return{
            text: 'Data del comp Hijo'

        }
    },
    template:`
        <div>
            <h2>Acceso a datos de componente hijo desde el padre</h2>
        </div>
    `



})