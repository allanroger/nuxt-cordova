<template>
  <section>
    <h1 class="title">
      Empresas
    </h1>
    <nuxt-link class="button" to="/">
      Home page
    </nuxt-link>
  </section>
</template>

<script>
export default {
  data ({ req }) {
    return {
      name: req ? 'server' : 'client'
    };
  },
  head () {
    return {
      title: `About Page (${this.name}-side)`
    };
  }
};

</script>

<style scoped lang="scss">

.info {
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 50px;
}
</style>
