<template>
<header id="headerNavbar">
  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src="./../assets/5deMayo.png" width="170px" height="170px" alt="">
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">Inicio</a></li>
        <li><a href="#Acerca-de" class="nav-link px-2 link-dark">Acerca de</a></li>
        <li><a href="#pasteles" class="nav-link px-2 link-dark">Pasteles</a></li>
        <li><a href="#formSection" class="nav-link px-2 link-dark">Pedido</a></li>
      </ul>
    </header>
  </div>
</header>
</template>

<script>
export default {
  name: "NavbarPublic",
};
</script>