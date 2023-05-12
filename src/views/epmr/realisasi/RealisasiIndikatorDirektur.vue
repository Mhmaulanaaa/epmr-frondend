<template>
  <br />
  <div class="row gy-12">
    <!--begin::Col-->
    <div class="col-xl-12">
      <KTCard widget-classes="card-xxl-stretch mb-5 mb-xl-10"></KTCard>
    </div>
    <!--end::Col-->
  </div>
</template>
    
    <script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import KTCard from "@/components/epmr/realisasi/CardRealIndikator.vue";
export default defineComponent({
  name: "new-target",
  components: {
    KTCard,
  },
  setup() {
    return {
      getIllustrationsPath,
      getAssetPath,
    };
  },
});
</script>