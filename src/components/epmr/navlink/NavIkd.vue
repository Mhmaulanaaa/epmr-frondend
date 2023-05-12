<template>
  <div class="d-flex overflow">
    <ul class="nav nav-tabs nav-line-tabs">
      <!--begin::Nav item-->
      <li class="nav-item">
        <router-link
          to="/build/nav_master_ikd/nav_sasaran"
          class="nav-link text-gray-900 text-active-primary fw-bold"
          active-class="active"
        >
          Sasaran Direktur
        </router-link>
      </li>
      <!--end::Nav item-->
      <!--begin::Nav item-->
      <li class="nav-item">
        <router-link
          class="nav-link text-gray-900 text-active-primary fw-bold"
          to="/build/nav_master_ikd/nav_indikator"
          active-class="active"
        >
          Indikator Kinerja Direktur
        </router-link>
      </li>
      <!--end::Nav item-->
      <!--begin::Nav item-->
      <li class="nav-item">
        <router-link
          class="nav-link text-gray-900 text-active-primary fw-bold"
          to="/build/nav_master_ikd/nav_mapping"
          active-class="active"
        >
          Mapping Indikator Kinerja Direktur
        </router-link>
      </li>
      <!--end::Nav item-->
      <!--begin::Nav item-->
      <!--end::Nav item-->
    </ul>
  </div>
  <router-view />
</template>