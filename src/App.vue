<!-- This displays to our home page -->

<template>
  <!-- : is shorthand for v-bind -->
  <!-- :nav-link-click lets parent know of childs updates - in this case active page index -->

  <!-- Navbar component that we imported from components -->
  <navbar 
    :pages="pages" 
    :active-page="activePage"
    :nav-link-click="(index) => activePage = index"
  ></navbar>

  <div 
    v-show="false"
  >Content to Hide</div>

  <!-- PageViewer component that we imported from components -->
  <!-- passing data to components -->
  <page-viewer 
    v-if="pages.length > 0"
    :page="pages[activePage]"
  ></page-viewer>
</template>

<script>
// Imports
import PageViewer from './components/PageViewer.vue';
import Navbar from './components/Navbar.vue';

// These are our options data
// We will import this to main.js
export default {
  components: {
    PageViewer,
    Navbar
  },
  created() {
    this.getPages()
  },
  data() {
    return {
      //data functions etc
      // Array of pages
      activePage: 0,
      pages: []
    }
  },
  methods: {
    async getPages() {
      let res = await fetch ('pages.json');
      let data = await res.json();

      this.pages = data
    }
  }
}
</script>