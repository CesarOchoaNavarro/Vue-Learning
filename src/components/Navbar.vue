<template>
  <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">MyVue</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li v-for="(page, index) in pages" class="nav-item" :key="index">
            <navbar-link
              :page="page"
              :isActive="activePage == index"
              @click.prevent="navLinkClick(index)"
            ></navbar-link>
          </li>

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
  //navLinkClick is a function that executes on click passing the current index to child ()
  props: ['pages', 'activePage', 'navLinkClick'],
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