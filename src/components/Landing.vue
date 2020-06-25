<template>
  <div>
    <h1 class="teal-text">{{ getTitle }}</h1>
    <div>
      <div class="row">
        <div class="col s6">
          <links-list />
        </div>
        <div class="col s6">
          <new-link-form />
          <right-section />
          <clear-all />
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
    ...mapGetters(["getTitle"])
  }
};
</script>

<style scoped>
h1 {
  margin-top: 1rem;
  letter-spacing: 0.15rem;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 2rem;
}
</style>
