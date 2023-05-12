<template>
  <br />
  <div class="row gy-12">
    <!--begin::Col-->
    <div class="col-xl-12">
      <KTCard1 widget-classes="card-xxl-stretch mb-5 mb-xl-10"></KTCard1>
    </div>
    <!--end::Col-->
  </div>
  <div class="card shadow-sm mb-5">
    <div class="card-header">
      <h3 class="card-title">Pencarian</h3>
    </div>
    <div class="row gy-12">
      <div class="col-xl-12">
        <KTSearch1 widget-classes="card-xxl-stretch mb-5 mb-xl-10"></KTSearch1>
      </div>
    </div>
  </div>
  <!--end::Row-->
  <div class="card shadow-sm card mb-5 mb-xl-10">
    <div class="card-header cursor-pointer">
      <h3 class="card-title m-0">Informasi</h3>
      <div class="float-end">
        <KTModalComp button-text="Tambah" modal-id="kt_modal_sasaran">
        </KTModalComp>
      </div>
    </div>
    <div class="row gy-12">
      <!--begin::Col-->
      <div class="col-xl-12">
        <KTInformasi1
          get-classes="card-xxl-stretch mb-5 mb-xl-10"
        ></KTInformasi1>
      </div>
      <!--end::Col-->
    </div>
  </div>

  <KTModalSasaran></KTModalSasaran>
</template>
  
  <script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import KTCard1 from "@/components/epmr/master_ikd/card_ikd/Card1.vue";
import KTSearch1 from "@/components/epmr/master_ikd/search_ikd/Search1.vue";
import KTInformasi1 from "@/components/epmr/master_ikd/info_ikd/Informasi1.vue";
import KTModalSasaran from "@/components/epmr/master_ikd/modal_ikd/ModalSasaran.vue";
import KTModalComp from "@/components/epmr/master_ikd/modal_ikd/ModalComp.vue";

export default defineComponent({
  name: "new-target",
  components: {
    KTCard1,
    KTSearch1,
    KTInformasi1,
    KTModalSasaran,
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
  