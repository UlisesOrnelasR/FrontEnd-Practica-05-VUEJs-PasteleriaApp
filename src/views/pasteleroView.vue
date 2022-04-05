<template>
  <div class="pasteleroView">
    <div class="header">
      <h2 class="tittle">About <b>Us!</b></h2>
      <div class="info-header">
        <div class="text">
          <h3>Address</h3>
          <p class="">Quinta del refugio street #16 col. La Otra banda</p>
        </div>
        <div class="img">
          <i class='bx bx-building-house bx-lg'></i>
        </div>
      </div>
      <div class="info-header">
        <div class="text">
          <h3>Phone</h3>
          <p class="">324-100-26-01 or 324-103-14-69</p>
        </div>
        <div class="img">
          <i class='bx bx-phone-call bx-lg'></i>
        </div>
      </div>
      <div class="info-header">
        <div class="text">
          <h3>Attention Schedule</h3>
          <p class="">Monday to Saturday from 9am to 5pm</p>
        </div>
        <div class="img">
          <i class='bx bxs-bell-ring bx-lg'></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.pasteleroView {
  margin: 20px;
  
}
/* infoooo */
.info-header {
  background-color: #FF6B6C;
  color: #E6EBE0;
  padding: 20px;
  margin-top: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  }
.info-header h3 {
  font-size: 25px;
  font-weight: 600;
}
.info-header p {
  font-size: 13px;
  margin-top: 10px;
  line-height: 150%;
}
.text {
  width: 50%;
}
.img {
  width: 50%;
  margin-top: -35px;
  margin-bottom: -35px;
  margin-left: 40px;
}



</style>