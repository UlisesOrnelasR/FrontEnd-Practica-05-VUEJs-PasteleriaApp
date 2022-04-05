<template>
  <div id="app"> 
    <div class="navbar-container">
      <div class="navbar-content">
        <router-link to="/">
          <i class='bx bx-home bx-md'></i>
          </router-link> 
        <router-link to="/Pastelero">
          <i class='bx bx-id-card bx-md'></i>
        </router-link>
        <router-link to="/favoritos"> 
          <i class='bx bx-heart bx-md'></i>
        </router-link> 
        <router-link to="/historial">
          <i class='bx bx-time-five bx-md'></i>
        </router-link> 
      </div>
    </div>
  <router-view/>
  </div>
</template>



<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Roboto:wght@300&display=swap');
* {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Roboto', sans-serif;
}
.navbar-container {
  width: 100%;
  position: fixed;
  bottom: 0;
  
}

.navbar-content {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
a {
  color: gray;
}
.router-link-exact-active {
  color: #FF6B6C;
}
</style>
