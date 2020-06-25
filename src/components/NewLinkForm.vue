<template>
  <div class="section add-new">
    <h4 class="teal-text">Add New Link</h4>
    <div class="row">
      <form class="col s12 center" @submit.prevent="onSubmit()">
        <div class="row center before-btn">
          <div class="input-field col s6 center">
            <input id="newLink" type="text" class="validate" v-model="newLink" required />
            <label for="newLink">Add More Link...</label>
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
  border: 2px dashed teal;
  text-align: center;
  padding-left: 2rem;
  margin-top: 6rem;
}
h4 {
  margin: 0;
}
.before-btn {
  margin-bottom: 0;
}
</style>
