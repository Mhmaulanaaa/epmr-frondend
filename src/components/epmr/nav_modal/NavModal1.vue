<template>
  <div class="card shadow-sm me-5">
    <!--begin::Tables widget 16-->
    <div class="card card-flush" :class="className">
      <!--begin::Body-->
      <div class="card-body">
        <!--begin::Nav-->
        <ul class="nav nav-tabs nav-line-tabs mb-5 fs-6">
          <template v-for="(item, i) in items" :key="i">
            <!--begin::Item-->
            <li class="nav-item">
              <!--begin::Link-->
              <a
                class="nav-link text-gray-900 text-active-primary fw-bold"
                :class="[i === 0 && 'active']"
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
                :class="[i === 0 && '']"
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
              :class="[i === 0 && 'active show']"
              :id="`kt_stats_widget_1_tab_${i}`"
              role="tabpanel"
            >
              <!--begin::Table container-->
              <div class="table-responsive">
                <!--begin::Table-->
                <table
                  class="table table-hover table-rounded table-striped border gy-2 gs-2"
                >
                  <!--begin::Table head-->
                  <thead class="text-center align-middle">
                    <tr
                      class="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200"
                    >
                      <th>No.</th>
                      <th>Indikator Kinerja Direktur</th>
                      <th>Target</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <!--end::Table head-->

                  <!--begin::Table body-->
                  <tbody class="text-center align-middle">
                    <tr>
                      <td>1</td>
                      <td>Isi Indikator Kinerja</td>
                      <td>100%</td>
                      <td>
                        <div class="btn-group" role="group">
                          <button type="button" class="btn btn-warning">
                            <i class="bi bi-pencil-square"></i>
                          </button>
                          <button type="button" class="btn btn-danger" id="">
                            <i class="bi bi-trash-fill"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <!--end::Table body-->
                </table>
                <!--end::Table-->
              </div>
              <!--end::Table container-->
            </div>
            <!--end::Tap pane-->
            <!-- End Navbar 1 -->
            <div
              class="tab-pane fade"
              :class="[i === 0 && '']"
              :id="`kt_stats_widget_2_tab_${i}`"
              role="tabpanel"
            >
              <div class="card shadow-sm">
                <div class="card-body">
                  <div class="mb-5">
                    <label for="basic-url" class="form-label"
                      >Indikator Kinerja Direktur
                      <span class="text-danger">*</span></label
                    >
                    <div>
                      <v-select
                        :options="sasaran"
                        label="modalnama"
                        placeholder="Masukkan Kinerja"
                      ></v-select>
                    </div>
                  </div>
                  <div class="col-12">
                    <!--begin::Input group-->
                    <div class="d-flex flex-column mb-7 fv-row">
                      <!--begin::Label-->
                      <label
                        class="d-flex align-items-center fs-6 fw-semobold form-label mb-2"
                      >
                        <span class="">Target</span>
                      </label>
                      <!--end::Label-->

                      <el-form-item prop="targetTarget">
                        <el-input
                          v-model="targetData.targetTarget"
                          placeholder="Masukkan Target"
                          name=""
                        ></el-input>
                      </el-form-item>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    id="saSimpanTambahMapIkd2"
                  >
                    Tambah/Ubah
                  </button>
                </div>
              </div>
            </div>
            <!--end::Tap pane-->
            <!-- End Navbar 2 -->
          </template>
        </div>
        <!--end::Tab Content-->
      </div>
      <!--end: Card Body-->
    </div>
    <!--end::Tables widget 16-->
  </div>
</template>
    
    <script lang="ts">
import { defineComponent, ref } from "vue";
import vSelect from "vue-select";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";
import { getAssetPath } from "@/core/helpers/assets";
import "vue-select/dist/vue-select.css";

export default defineComponent({
  name: "default-dashboard-widget-7",
  components: {
    vSelect,
    Dropdown2,
    getAssetPath,
  },
  props: {
    className: { type: String, required: false },
  },
  setup() {
    const items = [
      {
        title1: "Informasi",
        index: "1",
      },
      {
        title2: "Tambah Mapping Indikator Kinerja Terhadap Sasaran Direktur",
        index: "2",
      },
    ];

    const targetData = ref({
      targetTarget: "",
    });

    return {
      targetData,
      items,
      getAssetPath,
      sasaran: [
        { modalnama: "Sasaran 1" },
        { modalnama: "Sasaran 2" },
        { modalnama: "Sasaran 3" },
      ],
    };
  },
});
</script>
    