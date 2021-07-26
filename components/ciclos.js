Vue.component('ciclos',{
    data(){
        return{
            produDisp: [
                {id: 12, name: "pollo con papas"},
                {id: 22, name: "Barbacoa"},
                {id: 34, name: "Milanesa de pollo"},
                {id: 35, name: "Ensalada"},
            
            ]
        }

    },
    template:`
        <div>
            <h2> Ciclos y Vuejs (v-for)</h2>
            <ul>
                <li class="item-product" 
                    v-for="(product, indexProduct) in produDisp" 
                    :key="'produDips'+indexProduct"
                     :title="product.name"
                >
                
                    {{indexProduct}} | {{product.id}} | {{ product.name }}
                </li>           
            </ul>
        </div>
    `




});