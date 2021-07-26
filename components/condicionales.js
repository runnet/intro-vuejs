Vue.component("condicionales", {
  data() {
    return {
      edad: 10,
    };
  },
  template: `
        <div>
            <h2> condicionales con Vue.js (v-if)</h2>
            <input v-model="edad" />
            <p v-if="edad<18">Menor de edad</p>
            <p v-else-if="edad >=18 && edad<30">Mayor de edad pero menor de 30</p>
            <p v-else-if="edad >=30 && edad<65">Mayor de 30 pero menor de 65 </p>
            <p v-else>Estas Jubilado we!</p>

            <p><h2>Otra manera con V-show(Todas las opciones estan en el DOM, pero solo se muestra la que aplica)</h2></p>

            <p v-show="edad<18">Menor de edad</p>
            <p class="edad1830" v-show="edad >=18 && edad<30">Mayor de edad pero menor de 30</p>
            <p v-show="edad >=30 && edad<65">Mayor de 30 pero menor de 65 </p>
            <p v-show="edad>=65">Estas Jubilado we!</p>


        </div>
    
    `

})
