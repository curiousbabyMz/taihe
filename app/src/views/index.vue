<template>
  <div class="container">
    <page />
  </div>
</template>
<style>
.container {
  height: inherit;
}
</style>

<script>
import Page from "@/components/page.vue";
export default {
  name: "Index",
  components: {
    page: () => import("@/components/page.vue")
  }
};
</script>
