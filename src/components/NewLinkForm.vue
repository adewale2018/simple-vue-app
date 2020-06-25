<template>
  <div class="section add-new">
    <h5 class="teal-text">Add New Link</h5>
    <div class="row">
      <form class="col s12 center" @submit.prevent="onSubmit()">
        <div class="row center before-btn">
          <div class="input-field col s6 center">
            <input
              id="newLink"
              type="text"
              class="validate"
              v-model="newLink"
              required
            />
            <label for="newLink">Enter A Valid Link...</label>
          </div>
        </div>
        <button
          class="btn left waves-effect waves-light"
          type="submit"
          name="action"
          @click="addLink()"
        >
          Submit
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NewLinkForm",
  data() {
    return {
      newLink: ""
    };
  },
  methods: {
    ...mapActions(["addNewLink"]),
    addLink() {
      if (this.newLink.length > 0 && this.newLink.trim() !== "") {
        this.addNewLink(this.newLink);
      }
      this.newLink = "";
    }
  }
};
</script>

<style scoped>
.add-new {
  border: 1px dashed teal;
  text-align: center;
  padding-left: 2rem;
  margin-top: 3rem;
}
h5 {
  margin: 0;
  letter-spacing: 0.15rem;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 2rem;
}
.before-btn {
  margin-bottom: 0;
}
@media only screen and (max-width: 425px) {
  .add-new {
    order: 1;
  }
}
</style>
