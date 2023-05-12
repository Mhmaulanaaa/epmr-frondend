<template>
  <!--begin::Card-->
  <!--begin::Title-->
  <h2 class="fs-2x fw-bold mb-10">{{ title }}</h2>
  <!--end::Title-->

  <!--begin::Description-->
  <p class="text-gray-400 fs-6 fw-semobold mb-13">
    <span v-html="description"></span>
  </p>
  <!--end::Description-->

  <!--begin::Action-->
  <button
    type="button"
    class="btn btn-primary er fs-8 px-8 py-4"
    data-bs-toggle="modal"
    :data-bs-target="`#${modalId}`"
  >
    {{ buttonText }}
  </button>
  <!--end::Action-->
  <!--end::Heading-->
</template>
    
    <script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "modal-card",
  props: {
    title: String,
    description: String,
    buttonText: String,
    image: String,
    modalId: String,
  },
  components: {},
});
</script>
    