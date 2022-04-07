<template>
  <div class="pedidos">
    <h2 class="tittle">Place an <b>Order!</b></h2>
    <div class="formulario-container">
      <form action="" @submit.prevent="pedido" v-on:submit.prevent="procesar();" name="form" id="form">
        <p>
          Name: <input v-model="variables.nombre" type="text" name="nombre" placeholder="Erika Machain">
        </p>
        <p>
          Phone: <input v-model="variables.telefono" type="text" name="telefono" placeholder="624 147 7078">
        </p>
        <p>
          E-mail: <input v-model="variables.correo" type="text" name="correo" placeholder="erimacha07@gmail.com">
        </p>
        <p>
          Add comments: <textarea v-model="variables.comentarios" name="comentarios" id="comentarios" cols="47" rows="4" placeholder="I would like sushi on my cake"></textarea>
        </p>
        <div class="radio-container">
          <p class="radio-p">Choose your flavor:</p>
          <div>
            <input v-model="variables.chocolate" type="radio" id="chocolate" name="sabores" value="Chocolate">
            <label for="Chocolate">Chocolate</label><br>
          </div>
          <div>
            <input v-model="variables.Vainilla" type="radio" id="Vainilla" name="sabores" value="Vainilla">
            <label for="Vainilla">Vainilla</label><br>
          </div>
          <div>
            <input v-model="variables.Strawberry" type="radio" id="Strawberry" name="sabores" value="Strawberry">
            <label for="Strawberry">Strawberry</label><br>
          </div>
          <div>
            <input v-model="variables.Lemon" type="radio" id="Lemon" name="sabores" value="Lemon">
            <label for="Lemon">Lemon</label><br>
          </div>
          <div>
            <input v-model="variables.Carrot" type="radio" id="Carrot" name="sabores" value="Carrot">
            <label for="Carrot">Carrot</label><br>
          </div>
          <div>
            <input v-model="variables.Cheese" type="radio" id="Cheese" name="sabores" value="Cheese">
            <label for="Cheese">Cheese</label><br>
          </div>
        </div>
        <div class="checkcontainer">
          <p class="radio-p">Choose your decorations:</p>
          <div>
            <input v-model="variables.ornament1" type="checkbox" id="ornament1" name="ornament1" value="Sparks">
            <label for="ornament1">Sparks</label><br>
          </div>
          <div>
            <input v-model="variables.ornament2" type="checkbox" id="ornament2" name="ornament2" value="Chocolate">
            <label for="ornament2">Chocolate</label><br>
          </div>
          <div>
            <input v-model="variables.ornament3" type="checkbox" id="ornament3" name="ornament3" value="Fruits">
            <label for="ornament3">Fruits</label>
          </div>
          <div>
            <input v-model="variables.ornament4" type="checkbox" id="ornament4" name="ornament4" value="Biscuits">
            <label for="ornament4">Biscuits</label>
          </div>
          <div>
            <input v-model="variables.ornament5" type="checkbox" id="ornament5" name="ornament5" value="Glazed">
            <label for="ornament5">Glazed</label>
          </div>
          <div>
            <input v-model="variables.ornament6" type="checkbox" id="ornament6" name="ornament6" value="Nuts">
            <label for="ornament6">Nuts</label>
          </div>
        </div>
        <div class="submit">
          <input type="submit" value="Send">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    variables: {
      nombre: "",
      telefono: "",
      correo: "",
      comentarios: "",
      chocolate: "",
      Vainilla: "",
      Strawberry: "",
      Lemon: "",
      Carrot: "",
      Cheese: "",
      ornament1: "",
      ornament2: "",
      ornament3: "",
      ornament4: "",
      ornament5: "",
      ornament6: ""
    }
  }),
  methods: {
    procesar() {
      //alert(this.variables.nombre);
      console.log(this.variables.nombre);
      console.log(this.variables.telefono);
      console.log(this.variables.correo);
      console.log(this.variables.comentarios);
      console.log(this.variables.chocolate);
      console.log(this.variables.Vainilla);
      console.log(this.variables.Strawberry);
      console.log(this.variables.Lemon);
      console.log(this.variables.Carrot);
      console.log(this.variables.Cheese);
      console.log(this.variables.ornament1);
      console.log(this.variables.ornament2);
      console.log(this.variables.ornament3);
      console.log(this.variables.ornament4);
      console.log(this.variables.ornament5);
      console.log(this.variables.ornament6); 
    }
  }
};
</script>

<style scoped>

.pedidos {
  margin: 20px;
  font-size: 12px;
}
.formulario-container {
  width: 85%;
}
p{
  margin: 10px;
}
/*  Escoger sabores  */
.radio-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  min-height: 50px;
  margin-left: 20px;
}
.radio-container>*{
  flex:1 1 auto;
  margin: 5px;
  text-align: center;
}
input[type=radio] {
  width: auto;
  
}
.radio-p {
  font-size: 17px;
  margin: 0;
  padding: 0;
}
.checkcontainer {
  margin: 10px;
  padding: 0;
  width: 100%;
  min-height: 50px;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.checkcontainer>*{
  margin: 5px;
  text-align: center;
}
/*  Style submit  */
.submit {
  width: 100%;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
input[type=submit] {
  cursor: pointer; 
  font-size: 15px;
  font-weight: 600;
  color: #FF6B6C;
  transition: all 0.5s ease-in-out;
}
input[type=submit]:hover {
  background-color: #FF6B6C;
  color: #fff;
}
</style>
