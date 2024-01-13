<template>
  <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">MyVue</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <navbar-link
            v-for="(page, index) in publishedPages" class="nav-item" :key="index"
            :page="page"
            :index="index"
            :isActive="activePage == index"
            @activated="$emit('activated')"
          ></navbar-link>
        </ul>
        <form class="d-flex">
          <button class="btn btn-primary" 
          @click.prevent="changeTheme"
        >Toggle Nav</button>

        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue';


export default {
  components: {
    NavbarLink
  },
  created() { // created loads after options API but before the page has actually rendered
    this.getThemeSettings()
  },
  computed: {
    publishedPages() {
      // filter uses a callbacka function that return bool value.
      // If true that value will be in the array and if not it will be left out
      return this.pages.filter(p => p.published)
    }
  },
  //navLinkClick is a function that executes on click passing the current index to child ()
  props: ['pages', 'activePage'],
  data() {
    return {
      theme: 'dark',
    }
  },
  methods: {
    changeTheme() {
      let theme = 'light'

      if (this.theme == 'light') {
        theme = 'dark'
      }

      this.theme = theme
      this.storeThemeSettings();
    },
    storeThemeSettings() {
      localStorage.setItem('theme', this.theme)
    },
    getThemeSettings() {
      let theme = localStorage.getItem('theme')

      if (theme) {
        this.theme = theme
      }

    }
  }
}
</script>