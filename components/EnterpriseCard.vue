<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  title?: string
  likes?: number
  link?: string
  img?: string
  logo?: string
  jobNumber?: number
  name?: string
  tagline?: string
  sector?: string
  localisation?: string
  size?: string
  text?: string
}>()

const jobText = computed(() => {
  if (props.jobNumber) {
    let text = props.jobNumber > 1 ? ' Jobs' : ' Job'
    return props.jobNumber + text
  } else {
    return ''
  }
})
</script>

<template>
  <div>
    <div class="card" style="width: 12rem">
      <img :src="img" class="card-img-top" alt="..." />
      <span class="badge-jobs">{{ jobText }}</span>
      <div class="card-body">
        <div class="logo">
          <img alt="logo" :src="logo" />
        </div>
        <h3 class="card-title underlined3">
          <span>{{ name }}</span>
        </h3>
        <div class="card-text">
          <p class="tagline">{{ tagline }}</p>
          <span class="badge bg-primary color-grey">
            <client-only>
              <!-- TODO-ISSUE
                Needed due to a duplication bug in font-awasome 
                https://github.com/FortAwesome/vue-fontawesome/issues/447 
              -->
              <font-awesome-icon icon="fa-solid fa-tag" class="pe-1" />
            </client-only>
            <span>{{ sector }}</span>
          </span>
          <span class="badge bg-primary color-grey">
            <client-only>
              <!-- TODO-ISSUE
                Needed due to a duplication bug in font-awasome 
                https://github.com/FortAwesome/vue-fontawesome/issues/447 
              -->
              <font-awesome-icon
                icon="fa-solid fa-map-marker-alt"
                class="pe-1"
              />
            </client-only>
            <span>{{ localisation }}</span>
          </span>
          <span class="badge bg-primary color-grey">
            <client-only>
              <!-- TODO-ISSUE
                Needed due to a duplication bug in font-awasome 
                https://github.com/FortAwesome/vue-fontawesome/issues/447 
              -->
              <font-awesome-icon icon="fa-solid fa-users" class="pe-1" />
            </client-only>
            <span>{{ size }}</span>
          </span>
          <p>{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.badge-jobs {
  background-color: #fff;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 800;
  padding: 7px 12px;
  position: absolute;
  right: 12px;
  top: 12px;
}

.tagline {
  display: inline-block;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.badge {
  display: inline-block;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.color-grey {
  color: #5c6574;
}

.underlined3 > span,
.underlined3 > span > span {
  position: relative;
  z-index: 1;
}
.underlined3 > span::before {
  background-color: #77e9cb;
  border-radius: 50px;
  content: '';
  display: block;
  height: 13px;
  left: 0;
  position: absolute;
  top: 50%;
  transform: scaleX(1);
  transform-origin: center right;
  transition: all 0.2s ease-in 0s;
  width: 100%;
  width: calc(100% + 8px);
  z-index: -1;
}
.card .logo {
  border-radius: 100%;
  box-shadow: 0 0 10px 0 rgba(52, 63, 82, 0.8);
  height: 100px;
  margin-bottom: 15px;
  margin-top: -74px;
  position: relative;
  width: 100px;
  z-index: 1;
}
.card .logo img {
  background-color: #fff;
  border-radius: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
}
img,
svg {
  vertical-align: middle;
}
</style>
