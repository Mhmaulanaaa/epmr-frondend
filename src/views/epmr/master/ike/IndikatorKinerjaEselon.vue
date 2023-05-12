<template>
  <KTNavlink></KTNavlink>

  <KTNewTargetModal></KTNewTargetModal>
</template>
  
  <script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import KTNewTargetModal from "@/components/modals/forms/NewTargetModal.vue";
import KTNavlink from "@/components/epmr/navlink/NavIke.vue";

export default defineComponent({
  name: "new-target",
  components: {
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
  