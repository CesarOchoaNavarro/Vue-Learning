<template>
  <div class="container">
    <h1>{{ page.pageTitle }}</h1>
    <p>{{ page.pageContent }}</p>
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