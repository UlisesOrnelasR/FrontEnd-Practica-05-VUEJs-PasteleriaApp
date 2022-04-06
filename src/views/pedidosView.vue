<template>
  <div class="pedidos">
    <h2 class="tittle">Place an <b>Order!</b></h2>
    <div class="formulario-container">
      <form action="">
        <p>
          Name: <input type="text" name="nombre" placeholder="Erika Machain">
        </p>
        <p>
          Phone: <input type="text" name="telefono" placeholder="624 147 7078">
        </p>
        <p>
          E-mail: <input type="text" name="correo" placeholder="erimacha07@gmail.com">
        </p>
        <p>
          Add comments: <textarea name="comentarios" id="comentarios" cols="47" rows="4" placeholder="I would like sushi on my cake"></textarea>
        </p>
        <div class="radio-container">
          <p class="radio-p">Choose your flavor:</p>
          <div>
            <input type="radio" id="chocolate" name="sabores" value="Chocolate">
            <label for="Chocolate">Chocolate</label><br>
          </div>
          <div>
            <input type="radio" id="Vainilla" name="sabores" value="Vainilla">
            <label for="Vainilla">Vainilla</label><br>
          </div>
          <div>
            <input type="radio" id="Strawberry" name="sabores" value="Strawberry">
            <label for="Strawberry">Strawberry</label><br>
          </div>
          <div>
            <input type="radio" id="Lemon" name="sabores" value="Lemon">
            <label for="Lemon">Lemon</label><br>
          </div>
          <div>
            <input type="radio" id="Carrot" name="sabores" value="Carrot">
            <label for="Carrot">Carrot</label><br>
          </div>
          <div>
            <input type="radio" id="Cheese" name="sabores" value="Cheese">
            <label for="Cheese">Cheese</label><br>
          </div>
        </div>
        <div class="checkcontainer">
          <p class="radio-p">Choose your decorations:</p>
          <div>
            <input type="checkbox" id="ornament1" name="ornament1" value="Sparks">
            <label for="ornament1">Sparks</label><br>
          </div>
          <div>
            <input type="checkbox" id="ornament2" name="ornament2" value="Chocolate">
            <label for="ornament2">Chocolate</label><br>
          </div>
          <div>
            <input type="checkbox" id="ornament3" name="ornament3" value="Fruits">
            <label for="ornament3">Fruits</label>
          </div>
          <div>
            <input type="checkbox" id="ornament4" name="ornament4" value="Biscuits">
            <label for="ornament4">Biscuits</label>
          </div>
          <div>
            <input type="checkbox" id="ornament5" name="ornament5" value="Glazed">
            <label for="ornament5">Glazed</label>
          </div>
          <div>
            <input type="checkbox" id="ornament6" name="ornament6" value="Nuts">
            <label for="ornament6">Nuts</label>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
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
  align-items: center;
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
  text-align: center;
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
</style>
