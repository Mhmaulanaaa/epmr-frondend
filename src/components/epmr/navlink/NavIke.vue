<template>
  <div class="d-flex overflow">
    <ul class="nav nav-tabs nav-line-tabs">
      <!--begin::Nav item-->
      <li class="nav-item">
        <router-link
          to="/build/nav_master_ike/nav_saseselon"
          class="nav-link text-gray-900 text-active-primary fw-bold"
          active-class="active"
        >
          Sasaran Eselon 3
        </router-link>
      </li>
      <!--end::Nav item-->
      <!--begin::Nav item-->
      <li class="nav-item">
        <router-link
          class="nav-link text-gray-900 text-active-primary fw-bold"
          to="/build/nav_master_ike/nav_ikeselon"
          active-class="active"
        >
          Indikator Kinerja Eselon 3
        </router-link>
      </li>
      <!--end::Nav item-->
      <!--begin::Nav item-->
      <li class="nav-item">
        <router-link
          class="nav-link text-gray-900 text-active-primary fw-bold"
          to="/build/nav_master_ike/nav_mapsaseselon"
          active-class="active"
        >
          Mapping Sasaran Eselon 3
        </router-link>
      </li>
      <!--end::Nav item-->
      <!--begin::Nav item-->
      <li class="nav-item">
        <router-link
          class="nav-link text-gray-900 text-active-primary fw-bold"
          to="/build/nav_master_ike/nav_mapikeselon"
          active-class="active"
        >
          Mapping Indikator Kinerja Eselon 3
        </router-link>
      </li>
      <!--end::Nav item-->
      <!--begin::Nav item-->
      <!--end::Nav item-->
    </ul>
  </div>
  <router-view />
</template>