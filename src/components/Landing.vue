<template>
  <div>
    <h1 class="teal-text">Links Saver</h1>
    <p>{{ getDescription }}</p>
    <div>
      <div class="row">
        <div class="col l6 m6 s12">
          <new-link-form />
          <right-section />
          <clear-all />
        </div>
        <div class="col l6 m6 s12">
          <links-list />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewLinkForm from "../components/NewLinkForm";
import LinksList from "../components/LinksList";
import RightSection from "../components/RightSection";
import ClearAll from "../components/ClearAll";

import { mapGetters } from "vuex";

export default {
  name: "Landing",
  components: { NewLinkForm, LinksList, RightSection, ClearAll },
  computed: {
    ...mapGetters(["getDescription"])
  }
};
</script>

<style scoped>
h1 {
  margin-top: 1rem;
  margin-bottom: 0;
  letter-spacing: 0.15rem;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 2rem;
}
p {
  color: teal;
  letter-spacing: 0.2rem;
  font-size: 1.5rem;
  text-align: center;
}
</style>
