<template>
    <div class="toPedido">
        <ul>
            <li>
                <router-link to="/Pedidos"> 
                    <i class='bx bxs-flame bx-md'></i>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  display: flex;
  position: absolute;
  top: 7%;
  left: 80%;
  transform: translate(-50%, -50%);
}

ul li {
  list-style: none;
  margin: 0 15px;
}

ul li a {
  position: relative; 
  display: block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 63px;
  background: rgb(238,174,174);
  background: radial-gradient(circle, rgba(238,174,174,0.31277533039647576) 0%, rgba(233,191,148,0.0506607929515418) 100%);
  border-radius: 50%;
  font-size: 30px;
  color: #FF6B6C;
  transition: 0.5s;
}

ul li a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: white;
  transition: 0.3s;
  transform: scale(.9);
  z-index: -1;
}
ul li a:hover::before {
  transform: scale(1.1);
  box-shadow: 0 0 15px #FF6B6C;
}
ul li a:hover {
  color:#FF6B6C ;
  box-shadow: 0 0 5px #FF6B6C;
  text-shadow: 0 0 5px #FF6B6C;
}
</style>