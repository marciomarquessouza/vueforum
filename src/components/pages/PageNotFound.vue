<template>
  <div :class="$style.centered">
    <h1 :class="$style.headingLarge">Not Found</h1>
    <p :class="$style.textLarge">Sorry, we couldn't find what you are looking for.
      Go to
      <router-link :to="{name: 'Home'}">
        Home
      </router-link>
      instead, boy.
    </p>
  </div>

</template>

<script>

export default {

};

</script>

<style module>
  .headingLarge {
    font-size: 100px;
  }
  .textLarge {
    font-size: 50px;
    font-weight: 100px;
  }
  .centered {
    text-align: center;
  }
</style>
