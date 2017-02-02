<template>
  <section>
    <Landing></Landing>
    <div class="title-holder">
      <h1 class="title">
        {{msg}}
      </h1>

    </div>
    <nuxt-link class="button" to="/about">
      About Page
    </nuxt-link>
  </section>
</template>

<script>

export default {
  data () {
    return {
      msg: 'My test'
    };
  }
};
</script>

<style scoped lang="scss">
@import '~assets/styles/themes/default.scss';
.title-holder {
  .title {
    color: $primaryColor;
    margin: 50px 0;
  }
}
</style>
