<template>
  <div class="home">
    <div class="header">
      <h2 class="tittle">Hi <b>Fanny!</b></h2>
      <div class="input">
        <input type="text" placeholder="Find what you want...">
        <div class="icon-input">
          <i class='bx bx-search'></i>
        </div>
      </div>
      <div class="combo-header">
        <div class="text">
          <h3>Monday day</h3>
          <p class="">Two cakes for the price of one Only Mondays</p>
        </div>
        <div class="img">
          <img src="@/assets/bicombo.png" width="150px">
        </div>
      </div>
    </div>
    <div class="menusabores">
      <div class="tittle-sabores">
        <p>Available flavors</p>
      </div>
      <div class="menusabores-container">
          <div class="sabor">
            <img src="@/assets/chocolate.png" width="60px">
            <p>Chocolate</p>
          </div>
          <div class="sabor">
            <img src="@/assets/vainilla.png" width="60px">
            <p>Vainilla</p>
          </div>
          <div class="sabor">
            <img src="@/assets/fresa.png" width="60px">
            <p>Strawberry</p>
          </div>
          <div class="sabor">
            <img src="@/assets/limon.png" width="60px">
            <p>Lemon</p>
          </div>
          <div class="sabor">
            <img src="@/assets/carrot.png" width="60px">
            <p>Carrot</p>
          </div>
          <div class="sabor">
            <img src="@/assets/queso.png" width="60px">
            <p>Cheese</p>
          </div>
      </div>
    </div>
    <div class="adornos">
      <div class="tittle-sabores">
        <p>Ornaments</p>
      </div>
      <div class="adornos-container">
        <div class="adornos-box">
          <div class="adornos-img">
            <img src="@/assets/chispas.png" width="50px">
          </div>
          <div class="adornos-text">
            <div class="adornos-tittle">Sparks</div>
            <div class="adornos-price">$1.2</div>
          </div>
        </div>
        <div class="adornos-box">
          <div class="adornos-img">
            <img src="@/assets/cubiertadechocolate.png" width="50px">
          </div>
          <div class="adornos-text">
            <div class="adornos-tittle">Chocolate covered</div>
            <div class="adornos-price">$2.0</div>
          </div>
        </div>
        <div class="adornos-box">
          <div class="adornos-img">
            <img src="@/assets/cubiertadefrutas.png" width="50px">
          </div>
          <div class="adornos-text">
            <div class="adornos-tittle">Fruit toppings</div>
            <div class="adornos-price">$2.2</div>
          </div>
        </div>
        <div class="adornos-box">
          <div class="adornos-img">
            <img src="@/assets/galletas.png" width="50px">
          </div>
          <div class="adornos-text">
            <div class="adornos-tittle">Biscuits</div>
            <div class="adornos-price">$2.4</div>
          </div>
        </div>
        <div class="adornos-box">
          <div class="adornos-img">
            <img src="@/assets/glaseado.png" width="50px">
          </div>
          <div class="adornos-text">
            <div class="adornos-tittle">Glazed</div>
            <div class="adornos-price">$1.5</div>
          </div>
        </div>
        <div class="adornos-box">
          <div class="adornos-img">
            <img src="@/assets/driedfruit.png" width="50px">
          </div>
          <div class="adornos-text">
            <div class="adornos-tittle">Dried fruit</div>
            <div class="adornos-price">$3.0</div>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>


export default {
  components:{
    
  }
}
</script>

<style>
  .home {
    margin: 20px;
  }
/* Tittle*/ 
.tittle {
    font-size: 40px;
    font-weight: 100;
    color: #5CA4A9;
}
/* Inputt */ 
.input {
    display: flex;
    position: relative;
    align-items: center;
    margin-top: 15px;
}
.icon-input {
    position: absolute;
    margin-left: 10px;
    font-size: 20px;
    color: gray;
}
input {
    width: 100%;
    background-color: rgba(250, 248, 248);
    caret-color: #FF6B6C;
    border: 0px;
    outline: none;
    padding: 15px;
    padding-left: 35px;
    border-radius: 15px;
}
/* Combooooo */ 
.combo-header {
  background-color: #FF6B6C;
  color: #E6EBE0;
  padding: 20px;
  margin-top: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  }
.combo-header h3 {
  font-size: 25px;
  font-weight: 600;
  
}
.combo-header p {
  font-size: 13px;
  margin-top: 10px;
  line-height: 150%;
  
}
.text {
  width: 50%;
 
}
.img {
  width: 50%;
  object-fit: cover;
 
  margin-top: -35px;
  margin-bottom: -35px;
}
/* Saboreesssss */ 
.menusabores {
  width: 100%;
  margin-top: 15px;
}
.tittle-sabores {
  color: #5CA4A9;
  font-size: 18px;
  font-weight: 600;
}
.menusabores-container {
  display: flex;
  overflow-y: auto;
  margin-top: 10px;
}
.menusabores-container::-webkit-scrollbar {
  display: none;
}
.sabor {
  border-radius: 17px;
  margin-right: 18px;
  background: #E6EBE0;
}
.sabor img {
  height: 60px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.sabor p {
  font-size: 13px;
  text-align: center;
  margin-bottom: 5px;
  font-weight: 600;
  color: #5CA4A9;
}
/* Adornooos */ 
.adornos {
  width: 100%;
  margin-top: 15px;
}
.adornos-container {
  margin-top: 10px;
  display: flex;
  overflow-y: auto;
}
.adornos-container::-webkit-scrollbar {
  display: none;
}
.adornos-box {
  background: #E6EBE0;
  border-radius: 15px;
  width: 25%;
  margin-right: 15px;
}
.adornos-text {
  font-size: 13px;
  display: flex;
  max-height: 40%;
  flex-direction: column;
  justify-content:space-between;
}
.adornos-img {
  margin-left: 5px;
}
.adornos-tittle {
  color: #5CA4A9;
  text-align:initial;
  margin-left: 5px;
  font-weight: 600;
}

.adornos-price {
  color: #FF6B6C;
  margin-left: 5px;
  
}

</style>
