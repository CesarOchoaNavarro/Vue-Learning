<template>
  <li>
    <a 
      class="nav-link" 
      :class="activeClasses"
      :title="`This link goes to the ${page.link.text} page`" 
      @click.prevent="$bus.$emit('navbarLinkActivated', index)"
      >{{  page.link.text }}</a>
  </li>
</template>

<script>
export default {
  props: ['page', 'index', 'isActive'],
  computed: {
    // Apply mulitple classes whenever a link is active
    activeClasses() {
      return {
        active: this.isActive,
        emphasize: this.isActive
      }
    }
  }
}
</script>

<style>
.emphasize {
  text-decoration: underline !important;
}

</style>