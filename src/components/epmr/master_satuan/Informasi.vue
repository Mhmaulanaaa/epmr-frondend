<template>
  <section>
    <div class="card-body">
      <div class="row gy-5 g-xl-8">
        <!--begin::Card header-->
        <!--begin::Card title-->
        <div class="card-title m-0">
          <h3 class="fw-bolder m-0">{{ title }}</h3>
        </div>
        <!--end::Card title-->
      </div>
      <!--begin::Card header-->
      <!--begin::Card body-->
      <div class="card-body p-9">
        <div class="row g-6 g-xl-9 mb-6 mb-xl-9">
          <div class="table-responsive">
            <table
              class="table table-hover table-rounded table-striped border gy-2 gs-2 cssTable"
            >
              <thead>
                <tr
                  class="fw-bold fs-7 text-gray-800 border-bottom-2 border-gray-200"
                >
                  <th class="text-center">Kode</th>
                  <th class="text-center">Satuan</th>
                  <th class="text-center">Singkatan Satuan</th>
                  <th class="text-center">Status</th>
                  <th class="text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr class="fs-7" v-for="(title, i) in tableHead" :key="i">
                  <td class="text-center">{{ title.kode }}</td>
                  <td class="text-center">{{ title.satuan }}</td>
                  <td class="text-center">{{ title.singkatan }}</td>
                  <td class="text-center">{{ title.status }}</td>
                  <td class="text-center">
                    <KTModalComp modal-id="kt_modal_editsatuanmaster">
                    </KTModalComp>
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
            <div class="dataTables_info">Menampilkan 1 dari 100 data</div>
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
    </div>
  </section>
  <KTEditSatuan></KTEditSatuan>
</template>
    
    <style></style>
    <script setup lang="ts">
import { reactive, ref, watch } from "vue";
import { Search } from "@element-plus/icons-vue";
import Swal from "sweetalert2";
import KTEditSatuan from "@/components/epmr/master_satuan/modal_edit/edit_satuan/EditSatuan.vue";
import KTModalComp from "@/components/epmr/master_satuan/modal_edit/edit_satuan/ModalCompSatuan.vue";

const tableHead = ref([
  {
    kode: "S20230101001",
    satuan: "Dokumen",
    singkatan: "Dok",
    status: "Aktif",
  },
  {
    kode: "S20230101001",
    satuan: "Laporan",
    singkatan: "Lap",
    status: "Aktif",
  },
]);
const props = defineProps<{
  title?: string;
}>();
</script>
    <script lang="ts">
export default {
  methods: {
    hapusinfosatuan() {
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
};
</script>