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
  margin: 0;
}
</style>
