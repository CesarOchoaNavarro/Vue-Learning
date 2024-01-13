<template>
  <div class="container">
    <h1>Page Title</h1>
    <p>Page Content</p>
  </div>
</template>

<script>
export default {
  // Arguments of component
  props: {
    page : {
      type: Object,
      default(rawProps) {
        return {
          pageTitle: '',
          content: ''
        };
      }
    }
  },
}
</script>