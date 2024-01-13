<template>
  <div class="container">
    <h1>Page Title</h1>
    <p>{{$route.params.index}}</p>
  </div>
</template>

<script>
export default {
  // Arguments of component
  created() {
    // console.log(this.$route.params)
  }
}
</script>