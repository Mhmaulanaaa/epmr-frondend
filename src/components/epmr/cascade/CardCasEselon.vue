<template>
  <!--begin::Card-->
  <div class="card shadow-sm mb-5">
    <div class="card-body p-10">
      <!--end::Heading-->
      <div class="row g-5">
        <div class="col-12">
          <label class="fs-6 fw-semobold mb-2">Tahun</label>
          <div>
            <v-select
              :options="tahun"
              label="select2_tahun"
              placeholder="Masukkan Tahun"
            ></v-select>
          </div>
          <div class="float-end">
            <KTModalComp button-text="Tambah" modal-id="kt_modal_caseselon">
            </KTModalComp>
          </div>
        </div>
      </div>
      <br />
      <div class="row g-6 g-xl-9 mb-6 mb-xl-9">
        <div class="table-responsive">
          <table
            class="table table-hover table-rounded table-striped border gy-2 gs-2 cssTable"
          >
            <thead>
              <tr
                class="fw-bold fs-7 text-gray-800 border-bottom-2 border-gray-200"
              >
                <th class="text-center">No</th>
                <th class="text-center">Jabatan</th>
                <th class="text-center">Sasaran</th>
                <th class="text-center">Indikator</th>
                <th class="text-center">Target</th>
                <th class="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr class="fs-7" v-for="(title, i) in tableHead" :key="i">
                <td class="text-center">{{ title.nomor }}</td>
                <td class="text-center">{{ title.jabatan }}</td>
                <td class="text-center">{{ title.sasaran }}</td>
                <td class="text-center">{{ title.indikator }}</td>
                <td class="text-center">{{ title.target }}</td>
                <td class="text-center">
                  <KTModalEditCasEselon
                    modal-id="kt_modal_editcaseselon"
                  ></KTModalEditCasEselon>
                </td>
              </tr>
            </tbody>
            <slot></slot>
          </table>
        </div>
      </div>
      <!--end::Card body-->
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
    </div>
    <!--end::Card body-->
  </div>
  <KTModalCasEselon></KTModalCasEselon>
  <KTEditCasEselon></KTEditCasEselon>

  <!--end::Card-->
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import { reactive, ref, watch } from "vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import KTModalComp from "@/components/epmr/cascade/ModalComp.vue";
import KTModalCasEselon from "@/components/epmr/cascade/ModalCasEselon.vue";
import Swal from "sweetalert2";
import KTModalEditCasEselon from "@/components/epmr/cascade/modal_edit/edit_caseselon/ModalCompCasEselon.vue";
import KTEditCasEselon from "@/components/epmr/cascade/modal_edit/edit_caseselon/EditCasEselon.vue";

interface NewAddressData {
  tahun: string;
}

export default defineComponent({
  methods: {
    hapuscaseselon() {
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
  components: {
    vSelect,
    KTModalComp,
    KTModalCasEselon,
    KTModalEditCasEselon,
    KTEditCasEselon,
  },

  setup() {
    const tableHead = ref([
      {
        nomor: "1",
        jabatan: "Kepala Bagian Perencanaan dan Evaluasi",
        indikator: "Persentase capaian kesesuaian standar GLD",
        sasaran:
          "Terwujudnya pelaksanaan perencanaan program, anggaran dan evaluasi pelaporan kegiatan di RS",
        target: "95%",
      },
      {
        nomor: "2",
        jabatan: "Kepala Bagian Perencanaan dan Evaluasi",
        indikator: "Persentase rekomendasi Dewas yang ditindaklanjuti",
        sasaran:
          "Terwujudnya pelaksanaan perencanaan program, anggaran dan evaluasi pelaporan kegiatan di RS",
        target: "90%",
      },
      {
        nomor: "3",
        jabatan: "Kepala Bagian Perencanaan dan Evaluasi",
        indikator:
          "Persentase tindak lanjut hasil asesmen kesesuaian akuntabilitas kinerja terhadap standar yang dilaksanakan",
        sasaran:
          "Terwujudnya pelaksanaan perencanaan program, anggaran dan evaluasi pelaporan kegiatan di RS",
        target: "100%",
      },
      {
        nomor: "4",
        jabatan: "Kepala Bagian Perencanaan dan Evaluasi",
        indikator:
          "Persentase dokumen evaluasi dan pelaporan kinerja yang disusun tepat waktu",
        sasaran:
          "Terwujudnya pelaksanaan perencanaan program, anggaran dan evaluasi pelaporan kegiatan di RS",
        target: "100%",
      },
      {
        nomor: "5",
        jabatan: "Kepala Bagian Perencanaan dan Evaluasi",
        indikator: "Isi Sasaran",
        sasaran: "Persentase kesesuaian implementasi DPA tahun berjalan",
        target: "90%",
      },
    ]);
    const targetData = {
      targetKode: "",
    };

    return {
      tableHead,
      targetData,
      tahun: [
        { select2_tahun: "2022" },
        { select2_tahun: "2023" },
        { select2_tahun: "2024" },
      ],
    };
  },
});
</script>
  