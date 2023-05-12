<template>
  <div class="card shadow-sm mb-5">
    <div class="card-body">
      <ul class="nav row mb-5">
        <li class="nav-item col-12 col-lg mb-5 mb-lg-0">
          <a
            class="nav-link btn btn-flex btn-light-primary btn-active-primary d-flex flex-grow-1 flex-column flex-center py-5 h-1250px h-lg-130px btn-hover-scale"
            data-bs-toggle="tab"
            href="#biruSasaran"
            id="tabs_biruSasaran"
          >
            <div class="symbol symbol-40px mb-1">
              <img
                alt="Logo"
                :src="getAssetPath('images/icon/biru.png')"
                class="symbol symbol-40px mb-1"
              />
            </div>
            <span class="fs-8 fw-bold">Total Sasaran Direktur</span>
            <span class="fs-1 fw-bold">1</span>
          </a>
        </li>
        <li class="nav-item col-12 col-lg mb-5 mb-lg-0">
          <a
            class="nav-link btn btn-flex btn-light-success btn-active-success d-flex flex-grow-1 flex-column flex-center py-5 h-1250px h-lg-130px btn-hover-scale"
            data-bs-toggle="tab"
            href="#hijauSasaran"
            id="tabs_hijauSasaran"
          >
            <div class="symbol symbol-40px mb-1">
              <img
                alt="Logo"
                :src="getAssetPath('images/icon/hijau.png')"
                class="symbol symbol-40px mb-1"
              />
            </div>
            <span class="fs-8 fw-bold">Sasaran Direktur Aktif</span>
            <span class="fs-1 fw-bold">1</span>
          </a>
        </li>
        <li class="nav-item col-12 col-lg mb-5 mb-lg-0">
          <a
            class="nav-link btn btn-flex btn-light-danger btn-active-danger d-flex flex-grow-1 flex-column flex-center py-5 h-1250px h-lg-130px btn-hover-scale"
            data-bs-toggle="tab"
            href="#merahSasaran"
            id="tabs_merahSasaran"
          >
            <div class="symbol symbol-40px mb-1">
              <img
                alt="Logo"
                :src="getAssetPath('images/icon/merah.png')"
                class="symbol symbol-40px mb-1"
              />
            </div>
            <span class="fs-8 fw-bold">Sasaran Direktur Tidak Aktif</span>
            <span class="fs-1 fw-bold">0</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "card-1",
  components: {},
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
