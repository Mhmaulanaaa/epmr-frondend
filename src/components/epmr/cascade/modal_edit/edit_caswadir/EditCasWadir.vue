<template>
  <!--begin::Modal - New Target-->
  <div
    class="modal fade"
    id="kt_modal_editcascadewadir"
    ref="newModalEditCascadeWadir"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <h3>Edit Cascade Wakil Direktur</h3>

          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg
                :src="getAssetPath('media/icons/duotune/arrows/arr061.svg')"
              />
            </span>
          </div>
          <!--end::Close-->
        </div>

        <!--begin::Modal body-->
        <div class="modal-body">
          <!--begin:Form-->
          <div
            class="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6"
          >
            <!--begin::Icon-->
            <!--begin::Svg Icon | path: icons/duotune/general/gen044.svg-->
            <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  opacity="0.3"
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="10"
                  fill="black"
                />
                <rect
                  x="11"
                  y="14"
                  width="7"
                  height="2"
                  rx="1"
                  transform="rotate(-90 11 14)"
                  fill="black"
                />
                <rect
                  x="11"
                  y="17"
                  width="2"
                  height="2"
                  rx="1"
                  transform="rotate(-90 11 17)"
                  fill="black"
                />
              </svg>
            </span>
            <!--end::Svg Icon-->
            <!--end::Icon-->
            <!--begin::Wrapper-->
            <div class="d-flex flex-stack flex-grow-1">
              <!--begin::Content-->
              <div class="fw-bold">
                <h4 class="text-gray-900 fw-bolder">Perhatian!</h4>
                <div class="fs-6 text-gray-700">
                  Kolom pengisian dengan tanda bintang *) berwarna merah adalah
                  wajib diisi.
                </div>
              </div>
              <!--end::Content-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Notice-->
          <el-form
            id="kt_modal_editcascadewadir_form"
            @submit.prevent="submit()"
            :model="targetData"
            ref="formRef"
            class="form"
          >
            <!--begin::Input group-->
            <br />
            <div class="col-12">
              <label class="fs-6 fw-semobold mb-2">Jabatan</label>
              <div>
                <v-select
                  :options="pilihjabatan"
                  label="select2_pilihjabatan"
                  placeholder="Pilih Jabatan"
                ></v-select>
              </div>
            </div>
            <br />
            <!--end::Input group-->

            <div class="col-12">
              <label class="fs-6 fw-semobold mb-2">Sasaran</label>
              <div>
                <v-select
                  :options="pilihsasaran"
                  label="select2_pilihsasaran"
                  placeholder="Pilih Sasaran"
                ></v-select>
              </div>
            </div>
            <br />
            <!--end::Input group-->

            <div class="col-12">
              <label class="fs-6 fw-semobold mb-2">Indikator</label>
              <div>
                <v-select
                  :options="pilihindikator"
                  label="select2_pilihindikator"
                  placeholder="Pilih Indikator"
                ></v-select>
              </div>
            </div>
            <br />
            <!--end::Input group-->

            <div class="d-flex flex-column mb-5 fv-row">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Target</span>
              </label>
              <!--end::Label-->

              <el-form-item prop="targetTarget">
                <el-input
                  v-model="targetData.targetTarget"
                  placeholder="Masukkan Target"
                  name="targetTarget"
                ></el-input>
              </el-form-item>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="mb-5 row">
              <!--begin::Wrapper-->
              <div class="d-flex flex-stack">
                <!--begin::Label-->
                <div class="fw-semobold me-10">
                  <label class="fs-6 required">Status</label>
                </div>
                <!--end::Label-->
              </div>

              <!--begin::Checkboxes-->
              <div class="align-items-center mt-3">
                <!--begin::Checkbox-->
                <label class="form-check form-check-custom form-check-solid">
                  <input
                    class="form-check-input h-20px w-20px"
                    type="radio"
                    name="status[]"
                    value="aktif"
                    checked
                  />

                  <span
                    class="form-check form-check-custom form-check-solid fw-semobold"
                  >
                    Aktif
                  </span>
                </label>
                <!--end::Checkbox-->

                <!--begin::Checkbox-->
                <label class="form-check form-check-custom form-check-solid">
                  <input
                    class="form-check-input h-20px w-20px"
                    type="radio"
                    name="status[]"
                    value="tidakaktif"
                  />
                  <span
                    class="form-check form-check-custom form-check-solid fw-semobold"
                  >
                    Tidak Aktif
                  </span>
                </label>
                <!--end::Checkbox-->
              </div>
              <!--end::Checkboxes-->
              <!--end::Wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Actions-->
            <div class="float-end">
              <button
                type="reset"
                id="kt_modal_editcascadewadir_cancel"
                class="btn btn-light me-3"
              >
                Tutup
              </button>

              <!--begin::Button-->
              <button
                :data-kt-indicator="loading ? 'on' : null"
                class="btn btn-lg btn-primary"
                type="submit"
              >
                <span v-if="!loading" class="indicator-label">
                  Simpan
                  <!-- <KTIcon icon-name="arrow-right" icon-class="fs-3 ms-2 me-0" /> -->
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
            <!--end::Actions-->
          </el-form>
          <!--end:Form-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - New Target-->
</template>
            
            <style lang="scss">
.el-select {
  width: 100%;
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
</style>
            
            <script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

interface NewAddressData {
  pilihjabatan: string;
  pilihsasaran: string;
  pilihindikator: string;
  targetTitle: string;
  targetTarget: string;
  assign: string;
  dueDate: string;
  targetDetails: string;
  tags: Array<string>;
}

export default defineComponent({
  name: "new-modal-sasaran",
  components: {
    vSelect,
  },
  setup() {
    const formRef = ref<null | HTMLFormElement>(null);
    const newModalEditCascadeWadir = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);

    const targetData = ref<NewAddressData>({
      targetTitle: "",
      targetTarget: "",
      pilihjabatan: "",
      pilihsasaran: "",
      pilihindikator: "",
      assign: "",
      dueDate: "",
      targetDetails: "",
      tags: ["important", "urgent"],
    });

    // const rules = ref({
    //   targetTitle: [
    //     {
    //       required: true,
    //       message: "Please input Activity name",
    //       trigger: "blur",
    //     },
    //   ],
    //   assign: [
    //     {
    //       required: true,
    //       message: "Please select Activity zone",
    //       trigger: "change",
    //     },
    //   ],
    //   dueDate: [
    //     {
    //       required: true,
    //       message: "Please select Activity zone",
    //       trigger: "change",
    //     },
    //   ],
    //   tags: [
    //     {
    //       required: true,
    //       message: "Please select Activity zone",
    //       trigger: "change",
    //     },
    //   ],
    // });

    const submit = () => {
      if (!formRef.value) {
        return;
      }

      formRef.value.validate((valid: boolean) => {
        if (valid) {
          loading.value = true;

          setTimeout(() => {
            loading.value = false;

            Swal.fire({
              text: "Data Berhasil Tersimpan",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Lanjutkan",
              heightAuto: false,
              customClass: {
                confirmButton: "btn btn-primary",
              },
            }).then(() => {
              hideModal(newModalEditCascadeWadir.value);
            });
          }, 2000);
        } else {
          Swal.fire({
            text: "Mohon Isi Data Terlebih dahulu",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Lanjutkan",
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
          return false;
        }
      });
    };

    return {
      targetData,
      submit,
      loading,
      formRef,
      //   rules,
      newModalEditCascadeWadir,
      getAssetPath,
      pilihjabatan: [
        { select2_pilihjabatan: "Wakil Direktur Perencanaan dan Keuangan" },
      ],
      pilihsasaran: [
        {
          select2_pilihsasaran:
            "Meningkatnya kemandirian dan akuntabilitas rumah sakit",
        },
      ],
      pilihindikator: [
        {
          select2_pilihindikator:
            "Persentase capaian elemen akreditasi sesuai standar di jajaran Perencanaan dan Keuangan",
        },
        {
          select2_pilihindikator:
            "Persentase kesesuaian akuntabilitas kinerja terhadap standar",
        },
        {
          select2_pilihindikator: "IKM di jajaran Perencanaan dan Keuangan",
        },
        {
          select2_pilihindikator:
            "Persentase pegawai jajaran Perencanaan dan Keuangan yang memahami nilai organisasi",
        },
        {
          select2_pilihindikator:
            "Persentase realisasi anggaran jajaran Perencanaan dan Keuangan",
        },
        {
          select2_pilihindikator:
            "Capaian opini pemeriksa eksternal terhadap RS sebagai entitas PPK BLUD",
        },
        {
          select2_pilihindikator: "Persentase capaian tingkat kemandirian",
        },
      ],
    };
  },
});
</script>
            
            <style lang="scss">
.override-styles {
  z-index: 99999 !important;
  pointer-events: initial;
}
</style>
            