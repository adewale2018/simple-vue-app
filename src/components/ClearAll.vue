<template>
  <button
    v-show="linksNum > 0"
    class="btn-small waves-effect waves-light red"
    type="submit"
    name="action"
    @click="clearLinks"
  >
    <span>Remove All Links</span>
    <i class="material-icons right">delete</i>
  </button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ClearAll",
  computed: { ...mapGetters(["linksNum"]) },
  methods: {
    ...mapActions(["clearLinks"])
  }
};
</script>

<style scoped>
span {
  padding: 3rem !important;
  padding-bottom: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 2rem;
}
</style>
