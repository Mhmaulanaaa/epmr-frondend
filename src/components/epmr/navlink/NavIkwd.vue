<template>
  <div class="d-flex overflow">
    <ul class="nav nav-tabs nav-line-tabs">
      <!--begin::Nav item-->
      <li class="nav-item">
        <router-link
          to="/build/nav_master_ikwd/nav_swd"
          class="nav-link text-gray-900 text-active-primary fw-bold"
          active-class="active"
        >
          Sasaran Wakil Direktur
        </router-link>
      </li>
      <!--end::Nav item-->
      <!--begin::Nav item-->
      <li class="nav-item">
        <router-link
          class="nav-link text-gray-900 text-active-primary fw-bold"
          to="/build/nav_master_ikwd/nav_ikwd"
          active-class="active"
        >
          Indikator Kinerja Wakil Direktur
        </router-link>
      </li>
      <!--end::Nav item-->
      <!--begin::Nav item-->
      <li class="nav-item">
        <router-link
          class="nav-link text-gray-900 text-active-primary fw-bold"
          to="/build/nav_master_ikwd/nav_mapsas"
          active-class="active"
        >
          Mapping Sasaran Wakil Direktur
        </router-link>
      </li>
      <!--end::Nav item-->
      <!--begin::Nav item-->
      <li class="nav-item">
        <router-link
          class="nav-link text-gray-900 text-active-primary fw-bold"
          to="/build/nav_master_ikwd/nav_mapkinerja"
          active-class="active"
        >
          Mapping Indikator Kinerja Wakil Direktur
        </router-link>
      </li>
      <!--end::Nav item-->
      <!--begin::Nav item-->
      <!--end::Nav item-->
    </ul>
  </div>
  <router-view />
</template>