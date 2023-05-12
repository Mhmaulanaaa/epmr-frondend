<template>
  <br />
  <div class="row gy-12 gx-xl-12">
    <!--begin::Col-->
    <div class="col-xl-12">
      <KTCard3 widget-classes="card-xxl-stretch mb-5 mb-xl-10"></KTCard3>
    </div>
    <!--end::Col-->
  </div>
  <div class="card shadow-sm mb-5">
    <div class="card-header">
      <h3 class="card-title">Pencarian</h3>
    </div>
    <div class="row gy-12">
      <div class="col-xl-12">
        <KTSearch3 widget-classes="card-xxl-stretch mb-5 mb-xl-10"></KTSearch3>
      </div>
    </div>
  </div>
  <!--end::Row-->
  <div class="card shadow-sm card mb-5 mb-xl-10">
    <div class="card-header cursor-pointer">
      <h3 class="card-title m-0">Informasi</h3>
      <div class="float-end">
        <KTModalComp button-text="Tambah" modal-id="kt_modal_mapping">
        </KTModalComp>
      </div>
    </div>
    <div class="row gy-12">
      <!--begin::Col-->
      <div class="col-xl-12">
        <KTInformasi3
          get-classes="card-xxl-stretch mb-5 mb-xl-10"
        ></KTInformasi3>
      </div>
      <!--end::Col-->
    </div>
  </div>
  <KTModalMapping></KTModalMapping>
</template>
  
  <script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import KTCard3 from "@/components/epmr/master_ikd/card_ikd/Card3.vue";
import KTSearch3 from "@/components/epmr/master_ikd/search_ikd/Search3.vue";
import KTInformasi3 from "@/components/epmr/master_ikd/info_ikd/Informasi3.vue";
import KTModalComp from "@/components/epmr/master_ikd/modal_ikd/ModalComp.vue";
import KTModalMapping from "@/components/epmr/master_ikd/modal_ikd/ModalMapping.vue";

export default defineComponent({
  name: "new-target",
  components: {
    KTCard3,
    KTSearch3,
    KTInformasi3,
    KTModalComp,
    KTModalMapping,
  },
  setup() {
    return {
      getIllustrationsPath,
      getAssetPath,
    };
  },
});
</script>
  