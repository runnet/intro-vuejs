Vue.component('child-methods',{
    data(){
        return{
            cpmName:'Componente hijo con metodo'


        }

    },
    methods:{
        showCmpName(){
            console.log("Resultado ShowCmpName", this.cpmName);

        }


    },
    template: `
        <div>
            <h2>Acceso a metodo del cmp hijo desde el padre</h2>
        </div>
    
    `


});