<template>
  <!--begin::Card-->
  <div class="card-body">
    <!--begin::Nav-->
    <ul class="nav nav-tabs nav-line-tabs mb-5 fs-6">
      <template v-for="(item, i) in items" :key="i">
        <!--begin::Item-->
        <li class="nav-item">
          <!--begin::Link-->
          <a
            class="nav-link text-gray-900 text-active-primary fw-bold"
            :id="`kt_stats_widget_1_tab_link_${i}`"
            data-bs-toggle="pill"
            :href="`#kt_stats_widget_1_tab_${i}`"
          >
            <!--begin::Title-->
            <span class="nav-text text-gray-800 fw-bold fs-6 lh-1">
              {{ item.title1 }}
            </span>
            <!--end::Title-->
          </a>
          <!--end::Link-->
        </li>
        <!--end::Item-->
        <li class="nav-item">
          <!--begin::Link-->
          <a
            class="nav-link text-gray-900 text-active-primary fw-bold"
            :id="`kt_stats_widget_2_tab_link_${i}`"
            data-bs-toggle="pill"
            :href="`#kt_stats_widget_2_tab_${i}`"
          >
            <!--begin::Title-->
            <span class="nav-text text-gray-800 fw-bold fs-6 lh-1">
              {{ item.title2 }}
            </span>
            <!--end::Title-->
          </a>
          <!--end::Link-->
        </li>
        <li class="nav-item">
          <!--begin::Link-->
          <a
            class="nav-link text-gray-900 text-active-primary fw-bold"
            :id="`kt_stats_widget_3_tab_link_${i}`"
            data-bs-toggle="pill"
            :href="`#kt_stats_widget_3_tab_${i}`"
          >
            <!--begin::Title-->
            <span class="nav-text text-gray-800 fw-bold fs-6 lh-1">
              {{ item.title3 }}
            </span>
            <!--end::Title-->
          </a>
          <!--end::Link-->
        </li>
        <!--end::Item-->
      </template>
    </ul>
    <!--end::Nav-->

    <!--begin::Tab Content-->
    <div class="tab-content">
      <template v-for="(item, i) in items" :key="i">
        <!--begin::Tap pane-->
        <div
          class="tab-pane fade"
          :id="`kt_stats_widget_1_tab_${i}`"
          role="tabpanel"
        >
          <div class="row gy-12">
            <!--begin::Col-->
            <div class="col-xl-12">
              <KTCard1
                widget-classes="card-xxl-stretch mb-5 mb-xl-10"
              ></KTCard1>
            </div>
            <!--end::Col-->
          </div>
          <div class="card shadow-sm mb-5">
            <div class="card-header">
              <h3 class="card-title">Pencarian</h3>
            </div>
            <div class="row gy-12">
              <div class="col-xl-12">
                <KTSearch1
                  widget-classes="card-xxl-stretch mb-5 mb-xl-10"
                ></KTSearch1>
              </div>
            </div>
          </div>
          <!--end::Row-->
          <div class="card shadow-sm card mb-5 mb-xl-10">
            <div class="card-header cursor-pointer">
              <h3 class="card-title m-0">Informasi</h3>
              <div class="float-end">
                <KTModalComp1 button-text="Tambah" modal-id="kt_modal_sasaran">
                </KTModalComp1>
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
          <br />
        </div>
        <KTModalSasaran1></KTModalSasaran1>

        <!--end::Tap pane-->
        <!-- End Navbar 1 -->
        <div
          class="tab-pane fade"
          :id="`kt_stats_widget_2_tab_${i}`"
          role="tabpanel"
        >
          <div class="card-body">
            <div class="row gy-12 gx-xl-12">
              <!--begin::Col-->
              <div class="col-xl-12">
                <KTCard2
                  widget-classes="card-xxl-stretch mb-5 mb-xl-10"
                ></KTCard2>
              </div>
              <!--end::Col-->
            </div>
            <div class="card shadow-sm mb-5">
              <div class="card-header">
                <h3 class="card-title">Pencarian</h3>
              </div>
              <div class="row gy-12">
                <div class="col-xl-12">
                  <KTSearch2
                    widget-classes="card-xxl-stretch mb-5 mb-xl-10"
                  ></KTSearch2>
                </div>
              </div>
            </div>
            <!--end::Row-->
            <div class="card shadow-sm card mb-5 mb-xl-10">
              <div class="card-header cursor-pointer">
                <h3 class="card-title m-0">Informasi</h3>
                <div class="float-end">
                  <KTModalComp2
                    button-text="Tambah"
                    modal-id="kt_modal_indikator"
                  >
                  </KTModalComp2>
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

            <KTModalIndikator2></KTModalIndikator2>
          </div>
        </div>
        <!--end::Tap pane-->
        <!-- End Navbar 2 -->
        <div
          class="tab-pane fade"
          :id="`kt_stats_widget_3_tab_${i}`"
          role="tabpanel"
        >
          <div class="card-body">
            <div class="row gy-12 gx-xl-12">
              <!--begin::Col-->
              <div class="col-xl-12">
                <KTCard3
                  widget-classes="card-xxl-stretch mb-5 mb-xl-10"
                ></KTCard3>
              </div>
              <!--end::Col-->
            </div>
            <div class="card shadow-sm mb-5">
              <div class="card-header">
                <h3 class="card-title">Pencarian</h3>
              </div>
              <div class="row gy-12">
                <div class="col-xl-12">
                  <KTSearch3
                    widget-classes="card-xxl-stretch mb-5 mb-xl-10"
                  ></KTSearch3>
                </div>
              </div>
            </div>
            <!--end::Row-->
            <div class="card shadow-sm card mb-5 mb-xl-10">
              <div class="card-header cursor-pointer">
                <h3 class="card-title m-0">Informasi</h3>
                <div class="float-end">
                  <KTModalComp3
                    button-text="Tambah"
                    modal-id="kt_modal_mapping"
                  >
                  </KTModalComp3>
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
            <KTModalMapping3></KTModalMapping3>
          </div>
        </div>
        <!--end::Tap pane-->
        <!-- End Navbar 3 -->
      </template>
    </div>
    <!--end::Tab Content-->
  </div>
  <!--end::Card body-->
  <!--end::Card-->
</template>
          
          <script lang="ts">
import { defineComponent } from "vue";
import { reactive, ref, watch } from "vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { getAssetPath } from "@/core/helpers/assets";
import KTCard1 from "@/components/epmr/master_ikd/card_ikd/Card1.vue";
import KTSearch1 from "@/components/epmr/master_ikd/search_ikd/Search1.vue";
import KTInformasi1 from "@/components/epmr/master_ikd/info_ikd/Informasi1.vue";
import KTModalSasaran1 from "@/components/epmr/master_ikd/modal_ikd/ModalSasaran.vue";
import KTModalComp1 from "@/components/epmr/master_ikd/modal_ikd/ModalComp.vue";
import KTCard2 from "@/components/epmr/master_ikd/card_ikd/Card2.vue";
import KTSearch2 from "@/components/epmr/master_ikd/search_ikd/Search2.vue";
import KTInformasi2 from "@/components/epmr/master_ikd/info_ikd/Informasi2.vue";
import KTModalComp2 from "@/components/epmr/master_ikd/modal_ikd/ModalComp.vue";
import KTModalIndikator2 from "@/components/epmr/master_ikd/modal_ikd/ModalIndikator.vue";
import KTCard3 from "@/components/epmr/master_ikd/card_ikd/Card3.vue";
import KTSearch3 from "@/components/epmr/master_ikd/search_ikd/Search3.vue";
import KTInformasi3 from "@/components/epmr/master_ikd/info_ikd/Informasi3.vue";
import KTModalComp3 from "@/components/epmr/master_ikd/modal_ikd/ModalComp.vue";
import KTModalMapping3 from "@/components/epmr/master_ikd/modal_ikd/ModalMapping.vue";

export default defineComponent({
  name: "default-dashboard-widget-7",
  components: {
    vSelect,
    Dropdown2,
    getAssetPath,
    KTCard1,
    KTSearch1,
    KTInformasi1,
    KTModalSasaran1,
    KTModalComp1,
    KTCard2,
    KTSearch2,
    KTInformasi2,
    KTModalComp2,
    KTModalIndikator2,
    KTCard3,
    KTSearch3,
    KTInformasi3,
    KTModalComp3,
    KTModalMapping3,
  },
  props: {
    className: { type: String, required: false },
  },
  setup() {
    const items = [
      {
        title1: "Sasaran Direktur",
        index: "1",
      },
      {
        title2: "Indikator Kinerja Direktur",
        index: "2",
      },
      {
        title3: "Mapping Indikator Kinerja Direktur",
        index: "3",
      },
    ];

    const targetData = ref({
      targetTarget: "",
    });

    return {
      targetData,
      items,
      getAssetPath,
      indikator: [
        { modalnama: "Indikator 1" },
        { modalnama: "Indikator 2" },
        { modalnama: "Indikator 3" },
      ],
      sasaran: [
        { modalnama: "Sasaran 1" },
        { modalnama: "Sasaran 2" },
        { modalnama: "Sasaran 3" },
      ],
    };
  },
});
</script>
          