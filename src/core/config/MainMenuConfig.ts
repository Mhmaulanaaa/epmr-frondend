export interface MenuItem {
  heading?: string;
  sectionTitle?: string;
  route?: string;
  pages?: Array<MenuItem>;
  keenthemesIcon?: string;
  bootstrapIcon?: string;
  sub?: Array<MenuItem>;
}

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/dashboard",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator",
      },
    ],
  },
  {
    pages: [
      {
        sectionTitle: "Master",
        route: "/master",
        keenthemesIcon: "design",
        bootstrapIcon: "bi-shield-check",
        sub: [
          {
            heading: "Indikator Kerja Direktur",
            route: "/build/nav_master_ikd/nav_sasaran",
          },
          {
            heading: "Indikator Kerja Wakil Direktur",
            route: "/build/nav_master_ikwd/nav_swd",
          },
          {
            heading: "Indikator Kinerja Eselon II",
            route: "/build/nav_master_ike/nav_saseselon",
          },
          {
            heading: "Satuan",
            route: "/epmr/master/satuan/mastersatuan",
          },
        ],
      },

      {
        sectionTitle: "Cascade",
        route: "/cascade",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-person",
        sub: [
          {
            heading: "Cascade Direktur",
            route: "/epmr/cascade/cascadedirektur",
          },
          {
            heading: "Cascade Wakil Direktur",
            route: "/epmr/cascade/cascadewadir",
          },
          {
            heading: "Cascade Eselon III",
            route: "/epmr/cascade/cascadeeselon",
          },
        ],
      },
      {
        sectionTitle: "Realisasi",
        route: "/realisasi",
        keenthemesIcon: "profile-circle",
        bootstrapIcon: "bi-person",
        sub: [
          {
            heading: "Realisasi Indikator Direktur",
            route: "/epmr/realisasi/realisasiindikatordirektur",
          },
          {
            heading: "Realisasi Indikator Wakil Direktur",
            route: "/epmr/realisasi/realisasiindikatorwadir",
          },
          {
            heading: "Realisasi Indikator Eselon III",
            route: "/epmr/realisasi/realisasiindikatoreselon",
          },
          {
            heading: "Realisasi Anggaran",
            route: "/epmr/realisasi/realisasianggaran",
          },
        ],
      },
      {
        sectionTitle: "Laporan",
        route: "/laporan",
        keenthemesIcon: "design",
        bootstrapIcon: "bi-shield-check",
        sub: [
          {
            heading: "Laporan Cascade",
            route: "/epmr/laporan/laporancascade",
          },
          {
            heading: "Laporan Realisasi",
            route: "/epmr/laporan/laporanreal",
          },
        ],
      },
    ],
  },
];

export default MainMenuConfig;
