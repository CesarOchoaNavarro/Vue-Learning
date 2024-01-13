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
  <!-- <page-viewer 
    v-if="pages.length > 0"
    :page="pages[activePage]"
  ></page-viewer> -->

  <!-- Forms -->
  <create-page
    :page-created="pageCreated"
  ></create-page>


</template>

<script>
// Imports
import PageViewer from './components/PageViewer.vue';
import Navbar from './components/Navbar.vue';
import CreatePage from './components/CreatePage.vue';

// These are our options data
// We will import this to main.js
export default {
  components: {
    PageViewer,
    Navbar,
    CreatePage
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
    },
    pageCreated(pageObj) {
      // Pushing new page item to pages array
      this.pages.push(pageObj)
    }
  }
}
</script>