<script setup>

</script>
<template>
  <div>
      <nav class="navbar">
      <div class="navbar__logo">
          <img src="../assets/logo.png" alt="logo" />
      </div>
      <div class="navbar__links">
          <a href="#"><router-link to="/chretien">Chretien</router-link></a>
          <a href="#">Juif</a>
          <a href="#">Muslim</a>
          
      </div>
      </nav>
  </div>

</template>

<style scoped>
.container {
  background-color: black;
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-items: center;
  height: 100%;
  width: 100%;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: beige;
  z-index: -1;
  display: flex;

}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: black;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
.navbar__logo {
    display: flex;
    align-items: center;
}
.navbar__logo img {
    height: 2rem;
}
.navbar__links {
    display: flex;
    align-items: center;
    margin-right: 2rem;
}
.navbar__links a {
    margin-left: 1rem;
    text-decoration: none;
    color: white;
}
.navbar__links a:hover {
    color: #ff6347;
}
  
</style>
