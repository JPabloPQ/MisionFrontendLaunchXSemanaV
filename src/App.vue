<template>
  <NavbarPublic/>
  <PhotoSlider/>
  <MainInfo/>
  <ProductosPasteles/>
  <PedidoEspecial/>
  <MainFooter/>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <MyTest/>

  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyTest from './components/MyTest.vue'
import NavbarPublic from './components/PublicNavbar.vue'
import PhotoSlider from './components/PhotoSlider.vue'
import MainInfo from './components/MainInfo.vue'
import ProductosPasteles from './components/ProductosPasteles.vue'
import PedidoEspecial from './components/PedidoEspecial.vue'
import MainFooter from './components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    NavbarPublic,
    PhotoSlider,
    MainInfo,
    ProductosPasteles,
    PedidoEspecial,
    MainFooter,
    HelloWorld,
    MyTest
  },
  mounted(){
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js')


    document.head.appendChild(externalScript)
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
