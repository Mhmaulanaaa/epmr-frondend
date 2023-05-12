<template></template>
    
    <script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "new-target",
  components: {},
  setup() {
    return {
      getIllustrationsPath,
      getAssetPath,
    };
  },
});
</script>
    