<template>
  <div class="section">
    <h4 class="teal white-text">Available Links</h4>
    <ul class="collection left">
      <li class="collection-item left" v-for="link in getLinks" :key="link.id">
        <span id="link">
          <a class="teal-text" :href="link.link" target="_blank">
            {{ link.link }}
          </a>
        </span>
        <button
          class="btn-small waves-effect waves-light red"
          type="submit"
          name="action"
          id="btn"
          @click="deleteLink(link)"
        >
          Delete
          <i class="material-icons right">delete</i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "LinksList",
  computed: { ...mapGetters(["getLinks"]) },
  methods: {
    ...mapActions(["deleteLink"])
  }
};
</script>

<style scoped>
h4 {
  margin: 0;
  padding: 1rem;
  letter-spacing: 0.18rem;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 2rem;
}
#btn {
  margin-left: 2rem;
}
#link {
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
  font-family: "PT Serif", serif;
  margin-left: 0;
}
#link:hover {
  background: teal;
  padding: 1.2rem 0.1rem;
}
#link:hover a {
  color: #fff !important;
}
.collection-item {
  overflow: hidden !important;
}
</style>
