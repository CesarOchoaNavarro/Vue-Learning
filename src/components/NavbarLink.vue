<template>
  <a 
    class="nav-link" 
    :class="activeClasses"
    :title="`This link goes to the ${page.link.text} page`" 
    >{{  page.link.text }}</a>
</template>

<script>
export default {
  props: ['page', 'isActive'],
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