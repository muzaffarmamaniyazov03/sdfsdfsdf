<template>
    <Nav />
    <router-view />
    <Link/>
  <Footer/>

</template>

<script>
import Nav from "./views/Nav";
import Footer from "./views/Footer";
import Link from './views/Link.vue';

import setCookie from "./cookie/cookie";

export default {
  components: {
    Nav,
    Footer,
    Link,
  },
  data() {
    return {
    
    }
  },
  mounted() {
    setCookie()
  }
};
</script>
<style>

</style>
