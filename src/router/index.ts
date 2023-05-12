import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useConfigStore } from "@/stores/config";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layouts/main-layout/MainLayout.vue"),
    meta: {
      middleware: "auth",
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/epmr/master/ikd/indikatorkerjadirektur",
        name: "epmr-master-indikatorkerjadirektur",
        component: () => import("@/views/epmr/master/ikd/IndikikatorKerjaDirektur.vue"),
        meta: {
          pageTitle: "Indikator Kinerja Direktur",
          // breadcrumbs: ["Indikator Kerja Direktur"],
        },
        children: [
          {
            path: "/build/nav_master_ikd/nav_sasaran",
            name: "sasarandirektur",
            component: () => import("@/views/build/nav_master_ikd/nav_sasaran.vue"),
          },
          {
            path: "/build/nav_master_ikd/nav_indikator",
            name: "indikatordirektur",
            component: () => import("@/views/build/nav_master_ikd/nav_indikator.vue"),
          },
          {
            path: "/build/nav_master_ikd/nav_mapping",
            name: "mappingkinerja",
            component: () => import("@/views/build/nav_master_ikd/nav_mapping.vue"),
          },
        ],
      },
      // End Nav Master Indikator Kerja Direktur
      {
        path: "/epmr/master/ikwd/indikatorkerjawakildirektur",
        name: "epmr-master-indikatorkerjawakildirektur",
        component: () => import("@/views/epmr/master/ikwd/IndikatorKerjaWakilDirektur.vue"),
        meta: {
          pageTitle: "Indikator Kerja Wakil Direktur",
        },
        children: [
          {
            path: "/build/nav_master_ikwd/nav_swd",
            name: "sasaranwakildirektur",
            component: () => import("@/views/build/nav_master_ikwd/nav_swd.vue"),
          },
          {
            path: "/build/nav_master_ikwd/nav_ikwd",
            name: "indikatorkinerjawakildirektur",
            component: () => import("@/views/build/nav_master_ikwd/nav_ikwd.vue"),
          },
          {
            path: "/build/nav_master_ikwd/nav_mapsas",
            name: "mappingsasaranwakildirektur",
            component: () => import("@/views/build/nav_master_ikwd/nav_mapsas.vue"),
          },
          {
            path: "/build/nav_master_ikwd/nav_mapkinerja",
            name: "mappingindikatorkinerjawakildirektur",
            component: () => import("@/views/build/nav_master_ikwd/nav_mapkinerja.vue"),
          },
        ],
      },
      // End Nav Master Indikator Kinerja Wakil Direktur
      {
        path: "/epmr/master/ike/indikatorkinerjaeselon",
        name: "epmr-master-indikatorkinerjaeselon",
        component: () => import("@/views/epmr/master/ike/IndikatorKinerjaEselon.vue"),
        meta: {
          pageTitle: "Indikator Kinerja Eselon 3",
        },
        children: [
          {
            path: "/build/nav_master_ike/nav_saseselon",
            name: "sasaraneselon",
            component: () => import("@/views/build/nav_master_ike/nav_saseselon.vue"),
          },
          {
            path: "/build/nav_master_ike/nav_ikeselon",
            name: "indikatoreselon",
            component: () => import("@/views/build/nav_master_ike/nav_ikeselon.vue"),
          },
          {
            path: "/build/nav_master_ike/nav_mapsaseselon",
            name: "mappingeselon",
            component: () => import("@/views/build/nav_master_ike/nav_mapsaseselon.vue"),
          },
          {
            path: "/build/nav_master_ike/nav_mapikeselon",
            name: "mappingkinerjaeselon",
            component: () => import("@/views/build/nav_master_ike/nav_mapikeselon.vue"),
          },
        ],
      },
      // End Nav Master Indikator Kinerja Eselon 3
      {
        path: "/epmr/master/satuan/mastersatuan",
        name: "epmr-master-mastersatuan",
        component: () => import("@/views/epmr/master/satuan/MasterSatuan.vue"),
        meta: {
          pageTitle: "Satuan",
        },
      },
      // End Nav Master Satuan
      {
        path: "/epmr/cascade",
        name: "epmr-cascade",
        children: [
          {
            path: "/epmr/cascade/cascadedirektur",
            name: "cascadedirektur",
            component: () => import("@/views/epmr/cascade/CascadeDirektur.vue"),
            meta: {
              pageTitle: "Cascade Direktur",
            },
          },
          {
            path: "/epmr/cascade/cascadewadir",
            name: "cascadewadir",
            component: () => import("@/views/epmr/cascade/CascadeWadir.vue"),
            meta: {
              pageTitle: "Cascade Wakil Direktur",
            },
          },
          {
            path: "/epmr/cascade/cascadeeselon",
            name: "cascadeeselon",
            component: () => import("@/views/epmr/cascade/CascadeEselon.vue"),
            meta: {
              pageTitle: "Cascade Eselon III",
            },
          },
        ],
      },
      // End Nav Cascade 
      {
        path: "/epmr/realisasi",
        name: "realisasi",

        children: [
          {
            path: "/epmr/realisasi/realisasiindikatordirektur",
            name: "realisasiindikatordirektur",
            component: () => import("@/views/epmr/realisasi/RealisasiIndikatorDirektur.vue"),
            meta: {
              pageTitle: "Realisasi Indikator Direktur",
            },
          },
          {
            path: "/epmr/realisasi/realisasiindikatorwadir",
            name: "realisasiindikatorwadir",
            component: () => import("@/views/epmr/realisasi/RealisasiIndikatorWadir.vue"),
            meta: {
              pageTitle: "Realisasi Indikator Wakil Direktur",
            },
          },
          {
            path: "/epmr/realisasi/realisasiindikatoreselon",
            name: "realisasiindikatoreselon",
            component: () => import("@/views/epmr/realisasi/RealisasiIndikatorEselon.vue"),
            meta: {
              pageTitle: "Realisasi Indikator Eselon III",
            },
          },
          {
            path: "/epmr/realisasi/realisasianggaran",
            name: "realisasianggaran",
            component: () => import("@/views/epmr/realisasi/RealisasiAnggaran.vue"),
            meta: {
              pageTitle: "Realisasi Anggaran",
            },
          },
        ],
      },
      // End Nav Realisasi
      {
        path: "/epmr/laporan",
        name: "epmr-laporan",
        children: [
          {
            path: "/epmr/laporan/laporancascade",
            name: "laporancascade",
            component: () => import("@/views/epmr/laporan/LaporanCascade.vue"),
            meta: {
              pageTitle: "Laporan Realisasi",
            },
          },
          {
            path: "/epmr/laporan/laporanreal",
            name: "laporanreal",
            component: () => import("@/views/epmr/laporan/LaporanReal.vue"),
            meta: {
              pageTitle: "Laporan Realisasi",
            },
          },
        ],
      },
      // End Nav Laporan
      {
        path: "/crafted/pages/wizards/horizontal",
        name: "horizontal-wizard",
        component: () => import("@/views/crafted/pages/wizards/Horizontal.vue"),
        meta: {
          pageTitle: "Horizontal",
          breadcrumbs: ["Pages", "Wizard"],
        },
      },
      {
        path: "/crafted/pages/wizards/vertical",
        name: "vertical-wizard",
        component: () => import("@/views/crafted/pages/wizards/Vertical.vue"),
        meta: {
          pageTitle: "Vertical",
          breadcrumbs: ["Pages", "Wizard"],
        },
      },

      {
        path: "/apps/customers/getting-started",
        name: "apps-customers-getting-started",
        component: () => import("@/views/apps/customers/GettingStarted.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["Apps", "Customers"],
        },
      },
      {
        path: "/apps/customers/customers-listing",
        name: "apps-customers-listing",
        component: () => import("@/views/apps/customers/CustomersListing.vue"),
        meta: {
          pageTitle: "Customers Listing",
          breadcrumbs: ["Apps", "Customers"],
        },
      },
      {
        path: "/apps/customers/customer-details",
        name: "apps-customers-details",
        component: () => import("@/views/apps/customers/CustomerDetails.vue"),
        meta: {
          pageTitle: "Customers Details",
          breadcrumbs: ["Apps", "Customers"],
        },
      },
      {
        path: "/apps/subscriptions/getting-started",
        name: "apps-subscriptions-getting-started",
        component: () =>
          import("@/views/apps/subscriptions/GettingStarted.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["Apps", "Subscriptions"],
        },
      },
      {
        path: "/apps/subscriptions/subscription-list",
        name: "apps-subscriptions-subscription-list",
        component: () =>
          import("@/views/apps/subscriptions/SubscriptionList.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["Apps", "Subscriptions"],
        },
      },
      {
        path: "/apps/subscriptions/add-subscription",
        name: "apps-subscriptions-add-subscription",
        component: () =>
          import("@/views/apps/subscriptions/AddSubscription.vue"),
        meta: {
          pageTitle: "Add Subscription",
          breadcrumbs: ["Apps", "Subscriptions"],
        },
      },
      {
        path: "/apps/subscriptions/view-subscription",
        name: "apps-subscriptions-view-subscription",
        component: () =>
          import("@/views/apps/subscriptions/ViewSubscription.vue"),
        meta: {
          pageTitle: "View Subscription",
          breadcrumbs: ["Apps", "Subscriptions"],
        },
      },
      {
        path: "/apps/calendar",
        name: "apps-calendar",
        component: () => import("@/views/apps/Calendar.vue"),
        meta: {
          pageTitle: "Calendar",
          breadcrumbs: ["Apps"],
        },
      },
      {
        path: "/apps/chat/private-chat",
        name: "apps-private-chat",
        component: () => import("@/views/apps/chat/Chat.vue"),
        meta: {
          pageTitle: "Private Chat",
          breadcrumbs: ["Apps", "Chat"],
        },
      },
      {
        path: "/apps/chat/group-chat",
        name: "apps-group-chat",
        component: () => import("@/views/apps/chat/Chat.vue"),
        meta: {
          pageTitle: "Group Chat",
          breadcrumbs: ["Apps", "Chat"],
        },
      },
      {
        path: "/apps/chat/drawer-chat",
        name: "apps-drawer-chat",
        component: () => import("@/views/apps/chat/DrawerChat.vue"),
        meta: {
          pageTitle: "Drawer Chat",
          breadcrumbs: ["Apps", "Chat"],
        },
      },
      {
        path: "/crafted/modals/general/view-user",
        name: "modals-general-view-user",
        component: () => import("@/views/crafted/modals/general/ViewUsers.vue"),
        meta: {
          pageTitle: "View User",
          breadcrumbs: ["Crafted", "Modals", "General"],
        },
      },
      {
        path: "/crafted/modals/general/upgrade-plan",
        name: "modals-general-upgrade-plan",
        component: () =>
          import("@/views/crafted/modals/general/UpgradePlan.vue"),
        meta: {
          pageTitle: "Upgrade Plan",
          breadcrumbs: ["Crafted", "Modals", "General"],
        },
      },
      {
        path: "/crafted/modals/general/share-and-earn",
        name: "modals-general-share-and-earn",
        component: () =>
          import("@/views/crafted/modals/general/ShareAndEarn.vue"),
        meta: {
          pageTitle: "Share And Earn",
          breadcrumbs: ["Crafted", "Modals", "General"],
        },
      },
      {
        path: "/crafted/modals/forms/new-address",
        name: "modals-forms-new-address",
        component: () => import("@/views/crafted/modals/forms/NewAddress.vue"),
        meta: {
          pageTitle: "New Address",
          breadcrumbs: ["Crafted", "Modals", "Forms"],
        },
      },
      {
        path: "/crafted/modals/forms/create-api-key",
        name: "modals-forms-create-api-key",
        component: () =>
          import("@/views/crafted/modals/forms/CreateApiKey.vue"),
        meta: {
          pageTitle: "Create Api Key",
          breadcrumbs: ["Crafted", "Modals", "Forms"],
        },
      },
      {
        path: "/crafted/modals/wizards/two-factor-auth",
        name: "modals-wizards-two-factor-auth",
        component: () =>
          import("@/views/crafted/modals/wizards/TwoFactorAuth.vue"),
        meta: {
          pageTitle: "Two Factory Auth",
          breadcrumbs: ["Crafted", "Modals", "Wizards"],
        },
      },
      {
        path: "/crafted/modals/wizards/create-app",
        name: "modals-wizards-create-app",
        component: () => import("@/views/crafted/modals/wizards/CreateApp.vue"),
        meta: {
          pageTitle: "Create App",
          breadcrumbs: ["Crafted", "Modals", "Wizards"],
        },
      },
      {
        path: "/crafted/modals/wizards/create-account",
        name: "modals-wizards-create-account",
        component: () =>
          import("@/views/crafted/modals/wizards/CreateAccount.vue"),
        meta: {
          pageTitle: "Create Account",
          breadcrumbs: ["Crafted", "Modals", "Wizards"],
        },
      },
      {
        path: "/crafted/widgets/lists",
        name: "widgets-list",
        component: () => import("@/views/crafted/widgets/Lists.vue"),
        meta: {
          pageTitle: "Lists",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
      {
        path: "/crafted/widgets/statistics",
        name: "widgets-statistics",
        component: () => import("@/views/crafted/widgets/Statistics.vue"),
        meta: {
          pageTitle: "Statistics",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
      {
        path: "/crafted/widgets/charts",
        name: "widgets-charts",
        component: () => import("@/views/crafted/widgets/Charts.vue"),
        meta: {
          pageTitle: "Charts",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
      {
        path: "/crafted/widgets/mixed",
        name: "widgets-mixed",
        component: () => import("@/views/crafted/widgets/Mixed.vue"),
        meta: {
          pageTitle: "Mixed",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
      {
        path: "/crafted/widgets/tables",
        name: "widgets-tables",
        component: () => import("@/views/crafted/widgets/Tables.vue"),
        meta: {
          pageTitle: "Tables",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
      {
        path: "/crafted/widgets/feeds",
        name: "widgets-feeds",
        component: () => import("@/views/crafted/widgets/Feeds.vue"),
        meta: {
          pageTitle: "Feeds",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/AuthLayout.vue"),
    children: [
      {
        path: "/sign-in",
        name: "sign-in",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignIn.vue"),
        meta: {
          pageTitle: "Sign In",
        },
      },
      {
        path: "/sign-up",
        name: "sign-up",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignUp.vue"),
        meta: {
          pageTitle: "Sign Up",
        },
      },
      {
        path: "/password-reset",
        name: "password-reset",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/PasswordReset.vue"),
        meta: {
          pageTitle: "Password reset",
        },
      },
    ],
  },
  {
    path: "/multi-step-sign-up",
    name: "multi-step-sign-up",
    component: () =>
      import("@/views/crafted/authentication/MultiStepSignUp.vue"),
    meta: {
      pageTitle: "Multi-step Sign up",
    },
  },
  {
    path: "/",
    component: () => import("@/layouts/SystemLayout.vue"),
    children: [
      {
        // the 404 route, when none of the above matches
        path: "/404",
        name: "404",
        component: () => import("@/views/crafted/authentication/Error404.vue"),
        meta: {
          pageTitle: "Error 404",
        },
      },
      {
        path: "/500",
        name: "500",
        component: () => import("@/views/crafted/authentication/Error500.vue"),
        meta: {
          pageTitle: "Error 500",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const configStore = useConfigStore();

  // current page view title
  document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;

  // reset config to initial state
  configStore.resetLayoutConfig();

  // verify auth token before each page change
  authStore.verifyAuth();

  // before page access check if page requires authentication
  if (to.meta.middleware == "auth") {
    if (authStore.isAuthenticated) {
      next();
    } else {
      next({ name: "sign-in" });
    }
  } else {
    next();
  }

  // Scroll page to top on every route change
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

export default router;
