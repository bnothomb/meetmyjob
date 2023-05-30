<script setup>
import { ref, onMounted } from 'vue'
const typeValue = ref('')
let typeStatus = false
let displayTextArray = ['écologique', 'à impact', 'positif', 'maintenant !']
let typingSpeed = 100
let erasingSpeed = 100
let newTextDelay = 2000
let displayTextArrayIndex = 0
let charIndex = 0

function typeText() {
  if (charIndex < displayTextArray[displayTextArrayIndex].length) {
    if (!typeStatus) typeStatus = true
    typeValue.value += displayTextArray[displayTextArrayIndex].charAt(charIndex)
    charIndex += 1
    setTimeout(typeText, typingSpeed)
  } else {
    typeStatus = false
    setTimeout(eraseText, newTextDelay)
  }
}

function eraseText() {
  if (charIndex > 0) {
    if (!typeStatus) typeStatus = true
    typeValue.value = displayTextArray[displayTextArrayIndex].substring(
      0,
      charIndex - 1
    )
    charIndex -= 1
    setTimeout(eraseText, erasingSpeed)
  } else {
    typeStatus = false
    displayTextArrayIndex += 1
    if (displayTextArrayIndex >= displayTextArray.length)
      displayTextArrayIndex = 0
    setTimeout(typeText, typingSpeed + 1000)
  }
}

onMounted(() => {
  setTimeout(typeText, newTextDelay + 200)
})
</script>

<template>
  <div class="bannerHero w-100 order-1 container-fluid d-flex">
    <div class="container-fluid px-3">
      <div class="row">
        <div class="offset-xl-1 content">
          <h2 class="text-mmj">
            Deviens acteur du changement
            <span class="fw-bold underlined"
              ><span class="writter">{{ typeValue }}</span
              ><i class="fas fa-leaf"></i
            ></span>
          </h2>
          <div
            class="d-grid d-flex flex-lg-row flex-column flex-wrap groupButton my-5 mx-3"
          >
            <a href="/offres-emploi" class="btn btnHero btn-primary fw-bold"
              >Trouve ton emploi à impact !</a
            ><a
              href="/entreprises-impact"
              class="btn btnHero btn-mmj-white fw-bold mt-2"
              >Trouve ton entreprise engagée</a
            >
          </div>
        </div>
        <div
          class="backgroundHero carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="img/1.jpg" class="d-block w-100 img-fluid" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="img/2.jpg" class="d-block w-100 img-fluid" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="img/3.jpg" class="d-block w-100 img-fluid" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/scss/main.scss';
.bannerHero {
  align-items: center;
  -webkit-align-items: center;
  background-color: $secondary;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  height: 90vh;
  justify-content: flex-start;
  -webkit-justify-content: flex-start;
  overflow: hidden;
  padding-left: 64px;
  padding-right: 64px;
  position: relative;
  width: 100%;
  padding: 50px 0;
  height: auto;
  h2 {
    font-size: 39px !important;
    text-align: center;

    span {
      color: #343f52;
      display: inline-block;
      font-size: inherit;
      font-weight: 900;
      position: relative;
    }
  }
  .content {
    padding-left: 1rem;
    padding-right: 1rem;
    position: relative;
    width: 1034px;
    z-index: 4;

    @include media-breakpoint-down(xl) {
      margin-left: auto;
      margin-right: auto;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  .underlined {
    margin-left: 10px;
    min-width: 180px;
    position: relative;
    z-index: 0;

    &::before {
      background-color: #77e9cb;
      -webkit-clip-path: polygon(0 10%, 100% 0, 98% 100%, 6px 90%);
      clip-path: polygon(0 10%, 100% 0, 98% 100%, 6px 90%);
      content: '';
      display: block;
      height: 110%;
      left: -10px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 110%;
      z-index: -1;
    }
    @include media-breakpoint-down(md) {
      right: 0;
      left: 0;
      width: 100%;
    }
  }
}
/* 
.bannerHero h2 .bannerHero h2 > span {
  padding-left: 12px;
  padding-right: 12px;
  text-align: left;
}

.backgroundHero::before {
  background-color: #343f52;
  content: '';
  height: 100%;
  right: 0;
  left: 0;
  top: 0;
  opacity: 0.9;
  position: absolute;
  width: 100%;
  border-radius: 0;
  overflow: hidden;
  z-index: 1;
} 
.bannerHero .backgroundHero img {
  border-radius: 0;
}

.bannerHero .backgroundHero {
  z-index: -1;
  position: absolute;
  opacity: 0.5;
  overflow: hidden;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
}
.carousel-inner {
  height: 100%;
  width: 100%;
}
.carousel-item .d-block {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: center;
} */
</style>
