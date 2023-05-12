<template>
  <br />
  <div class="row gy-12">
    <!--begin::Col-->
    <div class="col-xl-12">
      <KTCard widget-classes="card-xxl-stretch mb-5 mb-xl-10"></KTCard>
    </div>
    <!--end::Col-->
  </div>

  <KTModalIndikator></KTModalIndikator>
</template>
    
    <script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import KTCard from "@/components/epmr/cascade/CardCasDirektur.vue";
import KTSearch2 from "@/components/epmr/master_ikwd/search_ikwd/Search2.vue";
import KTInformasi2 from "@/components/epmr/master_ikd/info_ikd/Informasi2.vue";
import KTModalIndikator from "@/components/epmr/master_ikwd/modal_ikwd/ModalIndikator.vue";
import KTModalComp from "@/components/epmr/cascade/ModalComp.vue";

export default defineComponent({
  name: "new-target",
  components: {
    KTCard,
    KTModalComp,
  },
  setup() {
    return {
      getIllustrationsPath,
      getAssetPath,
    };
  },
});
</script>