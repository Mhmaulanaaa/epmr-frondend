<template>
  <!--begin::Card-->
  <div class="card shadow-sm mb-5">
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
                    <th>Sasaran</th>
                    <th>Indikator</th>
                    <th>Target</th>
                    <th>Realisasi</th>
                    <th>Capaian</th>
                    <th>Keterangan</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <!--end::Table head-->

                <!--begin::Table body-->
                <tbody class="text-center align-middle">
                  <tr>
                    <td>1</td>
                    <td>
                      Terwujudnya pelaksanaan perencanaan program, anggaran dan
                      evaluasi pelaporan kegiatan di RS
                    </td>
                    <td>Persentase capaian kesesuaian standar GLD</td>
                    <td>95%</td>
                    <td>0,00%</td>
                    <td>0,00%</td>
                    <td>-</td>
                    <td>
                      <div class="btn-group" role="group">
                        <button type="button" class="btn btn-warning">
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger"
                          id=""
                          @click="hapusrealindeselon"
                        >
                          <i class="bi bi-trash-fill"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      Terwujudnya pelaksanaan perencanaan program, anggaran dan
                      evaluasi pelaporan kegiatan di RS
                    </td>
                    <td>Persentase rekomendasi Dewas yang ditindaklanjuti</td>
                    <td>100%</td>
                    <td>0,00%</td>
                    <td>0,00%</td>
                    <td>-</td>
                    <td>
                      <div class="btn-group" role="group">
                        <button type="button" class="btn btn-warning">
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger"
                          id=""
                          @click="hapusrealindeselon"
                        >
                          <i class="bi bi-trash-fill"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      Terwujudnya pelaksanaan perencanaan program, anggaran dan
                      evaluasi pelaporan kegiatan di RS
                    </td>
                    <td>
                      Persentase tindak lanjut hasil asesmen kesesuaian
                      akuntabilitas kinerja terhadap standar yang dilaksanakan
                    </td>
                    <td>100%</td>
                    <td>0,00%</td>
                    <td>0,00%</td>
                    <td>-</td>
                    <td>
                      <div class="btn-group" role="group">
                        <button type="button" class="btn btn-warning">
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger"
                          id=""
                          @click="hapusrealindeselon"
                        >
                          <i class="bi bi-trash-fill"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      Terwujudnya pelaksanaan perencanaan program, anggaran dan
                      evaluasi pelaporan kegiatan di RS
                    </td>
                    <td>
                      Persentase dokumen evaluasi dan pelaporan kinerja yang
                      disusun tepat waktu
                    </td>
                    <td>100%</td>
                    <td>23,21%</td>
                    <td>23,21%</td>
                    <td>-</td>
                    <td>
                      <div class="btn-group" role="group">
                        <button type="button" class="btn btn-warning">
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger"
                          id=""
                          @click="hapusrealindeselon"
                        >
                          <i class="bi bi-trash-fill"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      Terwujudnya pelaksanaan perencanaan program, anggaran dan
                      evaluasi pelaporan kegiatan di RS
                    </td>
                    <td>
                      Persentase kesesuaian implementasi DPA tahun berjalan
                    </td>
                    <td>100%</td>
                    <td>84,03%</td>
                    <td>93,36%</td>
                    <td>-</td>
                    <td>
                      <div class="btn-group" role="group">
                        <button type="button" class="btn btn-warning">
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger"
                          id=""
                          @click="hapusrealindeselon"
                        >
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
            <br />
            <div class="row">
              <div
                class="col-sm-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start"
              >
                <div class="dataTables_length">
                  <label>
                    <select
                      class="form-control form-control-sm text-dark font-weight-bold mr-4 border-0 bg-light-dark"
                      style="width: 75px"
                    >
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                      <option value="-1">SEMUA</option>
                    </select>
                  </label>
                </div>
                <div class="dataTables_info">Menampilkan 1 dari 10 data</div>
              </div>
              <div
                class="col-sm-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-end"
              >
                <ul class="pagination justify-content-end">
                  <li class="page-item previous disabled">
                    <a href="#" class="page-link"><i class="previous"></i></a>
                  </li>
                  <li class="page-item active">
                    <a href="#" class="page-link">1</a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">2</a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">3</a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">4</a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">5</a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">6</a>
                  </li>
                  <li class="page-item next">
                    <a href="#" class="page-link"><i class="next"></i></a>
                  </li>
                </ul>
              </div>
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
            <div class="card-body">
              <div class="mb-5">
                <label for="basic-url" class="form-label"
                  >Sasaran <span class="text-danger">*</span></label
                >
                <div>
                  <v-select
                    :options="sasaran"
                    label="modalnama"
                    placeholder="Masukkan Sasaran"
                  ></v-select>
                </div>
              </div>
              <div class="mb-5">
                <label for="basic-url" class="form-label"
                  >Indikator Kinerja <span class="text-danger">*</span></label
                >
                <div>
                  <v-select
                    :options="indikator"
                    label="modalnama"
                    placeholder="Masukkan Indikator"
                  ></v-select>
                </div>
              </div>
              <div class="row g-5">
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
              <div class="row g-5">
                <div class="col-6">
                  <!--begin::Input group-->
                  <div class="d-flex flex-column mb-7 fv-row">
                    <!--begin::Label-->
                    <label
                      class="d-flex align-items-center fs-6 fw-semobold form-label mb-2"
                    >
                      <span class="">Realisasi</span>
                    </label>
                    <!--end::Label-->

                    <el-form-item prop="targetRealisasi">
                      <el-input
                        v-model="targetData.targetRealisasi"
                        placeholder="Masukkan Realisasi"
                        name=""
                      ></el-input>
                    </el-form-item>
                  </div>
                </div>
                <div class="col-6">
                  <!--begin::Input group-->
                  <div class="d-flex flex-column mb-7 fv-row">
                    <!--begin::Label-->
                    <label
                      class="d-flex align-items-center fs-6 fw-semobold form-label mb-2"
                    >
                      <span class="">Capaian</span>
                    </label>
                    <!--end::Label-->

                    <el-form-item prop="targetCapaian">
                      <el-input
                        v-model="targetData.targetCapaian"
                        placeholder="Masukkan Capaian"
                        name=""
                      ></el-input>
                    </el-form-item>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <!--begin::Input group-->
                <div class="d-flex flex-column mb-7 fv-row">
                  <!--begin::Label-->
                  <label
                    class="d-flex align-items-center fs-6 fw-semobold form-label mb-2"
                  >
                    <span class="">Keterangan</span>
                  </label>
                  <!--end::Label-->

                  <textarea
                    v-model="targetData.targetTarget"
                    placeholder="Masukkan Keterangan"
                    name=""
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <button
                type="button"
                class="btn btn-primary"
                id="saSimpanTambahMapIkd2"
              >
                Tambah
              </button>
            </div>
          </div>
          <!--end::Tap pane-->
          <!-- End Navbar 2 -->
        </template>
      </div>
      <!--end::Tab Content-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>
        
        <script lang="ts">
import { defineComponent } from "vue";
import { reactive, ref, watch } from "vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { getAssetPath } from "@/core/helpers/assets";
import Swal from "sweetalert2";

export default defineComponent({
  methods: {
    hapusrealindeselon() {
      Swal.fire({
        text: "Apakah anda yakin ingin menghapus data tersebut?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yakin",
        cancelButtonText: "Tidak Yakin",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Data sudah terhapus", "", "success");
        }
      });
    },
  },
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
        title2: "Tambah Realisasi Indikator Eselon III",
        index: "2",
      },
    ];

    const targetData = ref({
      targetTarget: "",
      targetRealisasi: "",
      targetCapaian: "",
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
        