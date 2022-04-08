<template>
  <div class="historial">
    <h2 class="tittle">Comming <b>Soon!</b></h2>
    <p class="tittle-sabores">Developed by Ulises Ornelas</p>
    <div class="clock-container">
      <div class="clock">
      <div class="hour">
        <div class="hr"></div>
      </div>
      <div class="min">
        <div class="mn"></div>
      </div>
      <div class="sec">
        <div class="sc"></div>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin:20px;
}

.clock-container {
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 500px;
  background-color: #0e4145;
}
.clock {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('@/assets/clock.png');
  background-size: cover;
  border: 4px solid #0e4145;
  box-shadow: 0 -15px 15px rgba(255,255,255,0.05),
              inset 0 -15px 15px rgba(255,255,255,0.05),
              0 0 15px 15px rgba(0,0,0,0.3),
              inset 0 15px 15px rgba(0,0,0,0.3);
}
.clock:before {
  content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 50%;
  z-index: 10000;
}
.clock .hour,
.clock .min,
.clock .sec {
  position: absolute;
}
.clock .hour, .hr {
  width: 160px;
  height: 160px;
}
.clock .min, .mn {
  width: 190px;
  height: 190px;
}
.clock .sec, .sc {
  width: 230px;
  height: 230px;
}
.hr, .mn, .sc {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  position: absolute;
  border-radius: 50%;
}
.hr:before {
  content: '';
  position: absolute;
  width: 8px;
  height: 80px;
  background: #FF6B6C;
  border-radius: 6px 6px 0 0;
  z-index: 10;
  transform: rotate(190deg) translateX(-6.5px) translateY(-73px);
}
.mn:before {
  content: '';
  position: absolute;
  width: 4px;
  height: 90px;
  background: #fff;
  border-radius: 6px 6px 0 0;
  z-index: 11;
  transform: rotate(90deg) translateX(50px) translateY(-20px);
}
.sc:before {
  content: '';
  position: absolute;
  width: 2px;
  height: 150px;
  background: #fff;
  border-radius: 6px 6px 0 0;
  z-index: 12;
  transform: rotate(45deg) translateX(30px);
}
</style>

<script>
  
</script>
