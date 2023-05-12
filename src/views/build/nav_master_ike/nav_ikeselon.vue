<template>
  <br />
  <div class="row gy-12">
    <!--begin::Col-->
    <div class="col-xl-12">
      <KTCard2 widget-classes="card-xxl-stretch mb-5 mb-xl-10"></KTCard2>
    </div>
    <!--end::Col-->
  </div>
  <div class="card shadow-sm mb-5">
    <div class="card-header">
      <h3 class="card-title">Pencarian</h3>
    </div>
    <div class="row gy-12">
      <div class="col-xl-12">
        <KTSearch2 widget-classes="card-xxl-stretch mb-5 mb-xl-10"></KTSearch2>
      </div>
    </div>
  </div>
  <!--end::Row-->
  <div class="card shadow-sm card mb-5 mb-xl-10">
    <div class="card-header cursor-pointer">
      <h3 class="card-title m-0">Informasi</h3>
      <div class="float-end">
        <KTModalComp button-text="Tambah" modal-id="kt_modal_indikator">
        </KTModalComp>
      </div>
    </div>
    <div class="row gy-12">
      <!--begin::Col-->
      <div class="col-xl-12">
        <KTInformasi2
          get-classes="card-xxl-stretch mb-5 mb-xl-10"
        ></KTInformasi2>
      </div>
      <!--end::Col-->
    </div>
  </div>

  <KTModalIndikator></KTModalIndikator>
</template>
    
    <script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import KTCard2 from "@/components/epmr/master_ike/card_ike/Card2.vue";
import KTSearch2 from "@/components/epmr/master_ike/search_ike/Search2.vue";
import KTInformasi2 from "@/components/epmr/master_ike/info_ike/Informasi2.vue";
import KTModalIndikator from "@/components/epmr/master_ike/modal_ike/ModalIndikator.vue";
import KTModalComp from "@/components/epmr/master_ike/modal_ike/ModalComp.vue";

export default defineComponent({
  name: "new-target",
  components: {
    KTCard2,
    KTSearch2,
    KTInformasi2,
    KTModalComp,
    KTModalIndikator,
  },
  setup() {
    return {
      getIllustrationsPath,
      getAssetPath,
    };
  },
});
</script>
    