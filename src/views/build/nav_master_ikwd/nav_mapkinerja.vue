<template>
  <br />
  <div class="row gy-12">
    <!--begin::Col-->
    <div class="col-xl-12">
      <KTCard4 widget-classes="card-xxl-stretch mb-5 mb-xl-10"></KTCard4>
    </div>
    <!--end::Col-->
  </div>
  <div class="card shadow-sm mb-5">
    <div class="card-header">
      <h3 class="card-title">Pencarian</h3>
    </div>
    <div class="row gy-12">
      <div class="col-xl-12">
        <KTSearch4 widget-classes="card-xxl-stretch mb-5 mb-xl-10"></KTSearch4>
      </div>
    </div>
  </div>
  <!--end::Row-->
  <div class="card shadow-sm card mb-5 mb-xl-10">
    <div class="card-header cursor-pointer">
      <h3 class="card-title m-0">Informasi</h3>
      <div class="float-end">
        <KTModalComp button-text="Tambah" modal-id="kt_modal_mapping_indikator">
        </KTModalComp>
      </div>
    </div>
    <div class="row gy-12">
      <!--begin::Col-->
      <div class="col-xl-12">
        <KTInformasi4
          get-classes="card-xxl-stretch mb-5 mb-xl-10"
        ></KTInformasi4>
      </div>
      <!--end::Col-->
    </div>
  </div>

  <KTModalMappingIndikator></KTModalMappingIndikator>
</template>
  
  <script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import KTCard4 from "@/components/epmr/master_ikwd/card_ikwd/Card4.vue";
import KTSearch4 from "@/components/epmr/master_ikwd/search_ikwd/Search4.vue";
import KTInformasi4 from "@/components/epmr/master_ikwd/info_ikwd/Informasi4.vue";
import KTModalMappingIndikator from "@/components/epmr/master_ikwd/modal_ikwd/ModalMappingIndikator.vue";
import KTModalComp from "@/components/epmr/master_ikwd/modal_ikwd/ModalComp.vue";

export default defineComponent({
  name: "new-target",
  components: {
    KTCard4,
    KTSearch4,
    KTInformasi4,
    KTModalComp,
    KTModalMappingIndikator,
  },
  setup() {
    return {
      getIllustrationsPath,
      getAssetPath,
    };
  },
});
</script>
  