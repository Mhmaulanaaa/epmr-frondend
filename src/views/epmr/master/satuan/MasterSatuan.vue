<template>
  <br />
  <div class="row gy-12">
    <!--begin::Col-->
    <div class="col-xl-12">
      <KTCard widget-classes="card-xxl-stretch mb-5 mb-xl-10"></KTCard>
    </div>
    <!--end::Col-->
  </div>
  <div class="card shadow-sm mb-5">
    <div class="card-header">
      <h3 class="card-title">Pencarian</h3>
    </div>
    <div class="row gy-12">
      <div class="col-xl-12">
        <KTSearch widget-classes="card-xxl-stretch mb-5 mb-xl-10"></KTSearch>
      </div>
    </div>
  </div>
  <!--end::Row-->
  <div class="card shadow-sm card mb-5 mb-xl-10">
    <div class="card-header cursor-pointer">
      <h3 class="card-title m-0">Informasi</h3>
      <div class="float-end">
        <KTModalComp button-text="Tambah" modal-id="kt_modal_satuan">
        </KTModalComp>
      </div>
    </div>
    <div class="row gy-12">
      <!--begin::Col-->
      <div class="col-xl-12">
        <KTInformasi get-classes="card-xxl-stretch mb-5 mb-xl-10"></KTInformasi>
      </div>
      <!--end::Col-->
    </div>
  </div>
  <KTModalSatuan></KTModalSatuan>
</template>
      
      <script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import KTCard from "@/components/epmr/master_satuan/Card.vue";
import KTSearch from "@/components/epmr/master_satuan/Search.vue";
import KTInformasi from "@/components/epmr/master_satuan/Informasi.vue";
import KTModalComp from "@/components/epmr/master_satuan/ModalComp.vue";
import KTModalSatuan from "@/components/epmr/master_satuan/ModalSatuan.vue";

export default defineComponent({
  name: "new-target",
  components: {
    KTCard,
    KTSearch,
    KTInformasi,
    KTModalComp,
    KTModalSatuan,
  },
  setup() {
    return {
      getIllustrationsPath,
      getAssetPath,
    };
  },
});
</script>
      