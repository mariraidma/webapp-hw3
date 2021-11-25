<template>
  <div class="footer-container">
    <div class="footer-text">
      <router-link to="/contact">Contact us</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

.footer-container {
  height: 100px;
  width: 100%;
  background-color: #1e90ff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.footer-text a {
  font-size: 18px;
  color: white;

}



</style>