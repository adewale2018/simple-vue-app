<template>
  <div class="section main">
    <h5>
      <span class="first">Links Counter</span>
      <br />Has a access to the state too
    </h5>
    <p class="counter">There are {{ linksNum }} links</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RightSection",
  computed: {
    ...mapGetters(["linksNum"])
  }
};
</script>

<style scoped>
.main {
  margin-top: 1rem;
}
h5 {
  margin: 0;
}
span.first {
  text-transform: uppercase;
  color: teal;
  letter-spacing: 0.15rem;
  font-weight: 900;
}
.counter {
  border: 1px solid teal;
  margin-top: 1rem;
  padding: 1.5rem;
  font-size: 2rem;
  letter-spacing: 0.2rem;
  color: teal;
  font-weight: 900;
  border-radius: 0.2rem;
}
</style>
