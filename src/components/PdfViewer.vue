<template>
  <PdfApp style="height: 70vh;" pdf="/pdf/Hussein_Malingha_CV.pdf"></PdfApp>
</template>

<script>
import PdfApp from "vue3-pdf-app";
import "vue3-pdf-app/dist/icons/main.css";
export default {
  components: {
    PdfApp,
  },
};
</script>