<template>
  <KTNavlink></KTNavlink>
  <KTNavIndikatorDirektur></KTNavIndikatorDirektur>

  <KTNewTargetModal></KTNewTargetModal>
</template>
  
  <script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import KTNewTargetModal from "@/components/modals/forms/NewTargetModal.vue";
import KTNavlink from "@/components/epmr/navlink/NavIkd.vue";
import KTNavIndikatorDirektur from "@/components/epmr/navlink/NavIndikatorDirektur.vue";

export default defineComponent({
  name: "new-target",
  components: {
    // KTNavIndikatorDirektur,
    // KTModalCard,
    // KTNewTargetModal,
    KTNavlink,
  },
  setup() {
    return {
      getIllustrationsPath,
      getAssetPath,
    };
  },
});
</script>
  