<template>
  <div class="card-body">
    <div class="row gy-5 g-xl-8">
      <div class="col-4">
        <!--begin::Input group-->
        <div class="d-flex flex-column mb-7 fv-row">
          <!--begin::Label-->
          <label
            class="d-flex align-items-center fs-6 fw-semobold form-label mb-2"
          >
            <span class="">Kode</span>
          </label>
          <!--end::Label-->

          <el-form-item prop="targetKode">
            <el-input
              v-model="targetData.targetKode"
              placeholder="Masukkan Kode"
              name=""
            ></el-input>
          </el-form-item>
        </div>
      </div>
      <!--begin::Input group-->
      <div class="col-4">
        <label class="fs-6 fw-semobold mb-2">Sasaran Eselon 3</label>
        <div>
          <v-select
            :options="sasaran"
            label="select2_sasaran"
            placeholder="Pilih Sasaran Eselon 3"
          ></v-select>
        </div>
      </div>
      <!--end::Col-->
      <!--begin::Col-->
      <div class="col-4">
        <label class="fs-6 fw-semobold mb-2">Status</label>
        <div>
          <v-select
            :options="status"
            label="select2_status"
            placeholder="Pilih Status"
          ></v-select>
        </div>
      </div>
      <!--begin::Actions-->
      <div class="float-start">
        <!--begin::Button-->
        <button
          :data-kt-indicator="loading ? 'on' : null"
          class="btn btn-md btn-success"
          type="submit"
        >
          <span v-if="!loading" class="indicator-label">
            Cari
            <KTIcon icon-name="arrow-right" icon-class="fs-5 ms-2 me-0" />
          </span>
          <span v-if="loading" class="indicator-progress">
            Please wait...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
        <!--end::Button-->
      </div>
      <!--end::Col-->
    </div>
    <!--end::Input group-->
  </div>
  <!--end::Input group-->
</template>
  <style>
.m_sasaran {
  max-width: 1000px;
  max-height: 60px;
  font-size: 11px;
}
</style>
  
  <script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import JwtService from "@/core/services/JwtService";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

interface NewAddressData {
  targetKode: string;
  targetSasaran: string;
  tahun: string;
  status: string;
  tags: Array<string>;
}

export default defineComponent({
  name: "new-target-modal",
  components: {
    vSelect,
    Field,
  },
  setup() {
    const kode = JwtService;

    const loading = ref<boolean>(false);

    const targetData = {
      targetKode: "",
      targetSasaran: "",
      tahun: "",
      status: "",
      sasaran: "",
      tags: ["important", "urgent"],
    };

    const rules = ref({
      targetTitle: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur",
        },
      ],
      assign: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],

      tags: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
    });

    return {
      targetData,
      rules,
      loading,
      getAssetPath,
      kode,
      status: [
        { select2_status: "Aktif" },
        { select2_status: "Tidak Aktif" },
        { select2_status: "Semua" },
      ],
      sasaran: [
        {
          select2_sasaran:
            "Terwujudnya pelaksanaan perencanaan program, anggaran dan evaluasi pelaporan kegiatan di RS",
        },
      ],
    };
  },
});
</script>
  
  