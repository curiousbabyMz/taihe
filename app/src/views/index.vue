<template>
  <div class="container">
    <Logo
      @logotap="logotap"
      :isTurn='isTurn'
    />
  </div>
</template>
<style>
.container {
  height: inherit;
}
</style>

<script>
export default {
  name: "Index",
  components: {
    Logo: () => import("@/components/logo.vue")
  },
  data: function() {
    return {
      isTurn: false
    };
  },
  methods: {
    logotap: function() {
      this.isTurn = true;
      let time = setTimeout(() => {
        clearTimeout(time);
        this.$router.push({
          name: "home"
        });
      }, 1200);
    }
  }
};
</script>
