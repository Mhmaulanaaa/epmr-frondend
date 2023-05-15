<template>
  <!--begin::Card-->
  <div class="card shadow-sm mb-5">
    <div class="card-body">
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
                Meningkatnya kemandirian dan akuntabilitas kinerja rumah sakit
              </td>
              <td>Persentase capaian tingkat kemandirian</td>
              <td>75%</td>
              <td>98,56%</td>
              <td>96,32%</td>
              <td>-</td>
              <td>
                <KTModalCompWadir
                  modal-id="kt_modal_editrealwadir"
                ></KTModalCompWadir>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                Meningkatnya kemandirian dan akuntabilitas kinerja rumah sakit
              </td>
              <td>
                Opini WTP (Wajar Tanpa Pengecualian) tercapai di rumah sakit
                sebagai entitas PPK BLUD
              </td>
              <td>WTP</td>
              <td>99,81%</td>
              <td>WTP</td>
              <td>-</td>
              <td>
                <KTModalCompWadir
                  modal-id="kt_modal_editrealwadir"
                ></KTModalCompWadir>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                Meningkatnya kemandirian dan akuntabilitas kinerja rumah sakit
              </td>
              <td>
                Persentase kesesuaian akuntabilitas kinerja berdasarkan kriteria
                dalam regulasi yang berlaku
              </td>
              <td>90%</td>
              <td>94,34%</td>
              <td>106,68%</td>
              <td>-</td>
              <td>
                <KTModalCompWadir
                  modal-id="kt_modal_editrealwadir"
                ></KTModalCompWadir>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Meningkatnya mutu pelayanan rumah sakit</td>
              <td>
                Persentase hasil survei akreditasi di jajaran Direktorat
                Perencanaan dan Keuangan
              </td>
              <td>95%</td>
              <td>99,79%</td>
              <td>100,81%</td>
              <td>-</td>
              <td>
                <KTModalCompWadir
                  modal-id="kt_modal_editrealwadir"
                ></KTModalCompWadir>
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
    <!--end::Card body-->
  </div>
  <!--end::Card-->
  <KTModalEditRealWadir></KTModalEditRealWadir>
</template>
      
      <script lang="ts">
import { defineComponent } from "vue";
import { reactive, ref, watch } from "vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { getAssetPath } from "@/core/helpers/assets";
import Swal from "sweetalert2";
import KTModalEditRealWadir from "@/components/epmr/realisasi/modal_edit/edit_rewadir/EditRealWadir.vue";
import KTModalCompWadir from "@/components/epmr/realisasi/modal_edit/edit_rewadir/ModalCompRealWadir.vue";

export default defineComponent({
  methods: {
    hapusrealindiwadir() {
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
    KTModalEditRealWadir,
    KTModalCompWadir,
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
        title2: "Tambah Realisasi Indikator Wakil Direktur",
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
      