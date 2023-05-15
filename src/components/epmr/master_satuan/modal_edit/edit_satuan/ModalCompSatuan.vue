<template>
  <!--begin::Card-->
  <!--begin::Action-->
  <div class="btn-group" role="group" aria-label="bmse">
    <button
      class="btn btn-sm btn-warning fs-8"
      type="button"
      data-bs-toggle="modal"
      :data-bs-target="`#${modalId}`"
    >
      <i class="bi bi-pencil-square"></i>
    </button>
    <button
      @click="hapussatuanmaster"
      type="button"
      class="btn btn-danger"
      data-bs-toggle="modal"
    >
      <i class="bi bi-trash-fill"></i>
    </button>
  </div>
  <!--end::Action-->
  <!--end::Heading-->
</template>
            
            <script lang="ts">
import Swal from "sweetalert2";
import { defineComponent } from "vue";

export default defineComponent({
  name: "modal-card",
  props: {
    title: String,
    buttonText: String,
    modalId: String,
  },
  components: {},
  methods: {
    hapussatuanmaster() {
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
});
</script>
            