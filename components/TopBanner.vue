<script setup lang="ts">
import { ref } from 'vue'

const alertOpen = ref(true)
</script>

<template>
  <div v-if="alertOpen" class="topBanner text-center container-fluid">
    <div class="row align-items-center justify-content-center">
      <div class="col col-xl-8">
        <div class="row align-items-center justify-content-center">
          <div class="col-11 text-center">
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
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/scss/main.scss';
.topBanner {
  background-color: $primary;
  font-size: 13px;
  margin: 0;
  .row {
    min-height: 32px;
  }

  @include media-breakpoint-down(md) {
    font-size: 12px;
  }
  @include media-breakpoint-down(sm) {
    font-size: 10px;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration: none;
    text-decoration: none;
    &:hover {
      -webkit-text-decoration: underline;
      text-decoration: underline;
    }
  }
}
</style>
