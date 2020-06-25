<template>
  <div class="section">
    <h4>These are the available Links</h4>
    <ul class="collection">
      <li class="collection-item" v-for="link in getLinks" :key="link.id">
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
  letter-spacing: 0.1rem;
  /* font-weight: 100; */
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
