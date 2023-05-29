<script setup lang="ts">
import { ref } from 'vue'

const alertOpen = ref(true)
</script>

<template>
  <div
    v-if="alertOpen"
    class="topBanner container text-center d-flex align-items-center"
  >
    <div class="row align-middle">
      <div class="col-11 align-middle">
        <span class="text-center">
          On vient de lancer notre nouveau site ! Si vous voyez des bugs,
          écrivez-nous à
          <a href="mailto:hello@meet-my-job.com" class="fw-bold text-dark"
            >hello@meet-my-job.com</a
          >
        </span>
      </div>
      <button
        type="button"
        aria-label="Close"
        class="col-1 col-auto d-flex align-items-center justify-content-center bg-transparent border-0"
        @click="alertOpen = !alertOpen"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.topBanner {
  background-color: #77e9cb;
  font-size: 10px;
  height: 41px;
}

a.text-dark:focus,
a.text-dark:hover {
  color: #121416 !important;
}
a:hover {
  color: #0056b3;
  -webkit-text-decoration: underline;
  text-decoration: underline;
}
.fw-bold {
  font-weight: 800 !important;
}
</style>
