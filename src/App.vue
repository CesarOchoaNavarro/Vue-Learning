<!-- This displays to our home page -->

<template>
  <!-- : is shorthand for v-bind -->
  <!-- :nav-link-click lets parent know of childs updates - in this case active page index -->

  <!-- Navbar component that we imported from components -->
  <navbar 
    :pages="pages" 
    :active-page="activePage"
  ></navbar>

  <router-view></router-view>

  <!-- PageViewer component that we imported from components -->
  <!-- passing data to components -->
  <!-- <page-viewer 
    v-if="pages.length > 0"
    :page="pages[activePage]"
  ></page-viewer> -->

  <!-- Forms -->

  <!-- Setting up a custom page-handler event(@) that we are handling with the function pageCreated -->
  <!-- <create-page
    @page-created="pageCreated"
  ></create-page> -->


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
    this.getPages(),
    this.$bus.$on('navbarLinkActivated', (index) => {
      this.activePage = index
    })
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