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
  <div class="bannerHero w-100 container-fluid">
    <div class="row px-3">
      <div class="col">
        <div
          class="row justify-content-center justify-content-xl-start align-items-center my-5 mx-3"
        >
          <div class="col-lg-10 col-xl-8 col-xxl-7">
            <h2 class="text-mmj">
              Deviens acteur du changement
              <span class="underlined">
                <span class="writter">{{ typeValue }} </span>
                <client-only>
                  <!-- TODO-ISSUE
                Needed due to a duplication bug in font-awasome 
                https://github.com/FortAwesome/vue-fontawesome/issues/447 
              -->
                  <font-awesome-icon
                    icon="fa-solid fa-leaf"
                    class="bannerHero-leaf d-none d-xl-block"
                  />
                </client-only>
              </span>
            </h2>
          </div>
        </div>
        <div
          class="row justify-content-center justify-content-xl-start align-items-center my-5 mx-3"
        >
          <a
            href="/offres-emploi"
            class="col-8 col-xl-3 btn btnHero btn-primary m-2"
            >Trouve ton emploi à impact !
          </a>
          <a
            href="/entreprises-impact"
            class="col-8 col-8 col-xl-3 btn btn-primary btnHero btnHero--white m-2"
            >Trouve ton entreprise engagée
          </a>
        </div>
      </div>
    </div>
    <div class="row backgroundHero d-none">
      <!--position-absolute top-0 end-0 -->
      <div
        class="col-xl-6 carousel slide carousel-fade"
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
</template>

<style scoped lang="scss">
@import '~/assets/scss/main.scss';
.bannerHero {
  background-color: $secondary;

  h2 {
    font-size: 70px;

    span {
      color: $secondary;
      display: inline-block;
      font-size: inherit;
      font-weight: 900;
      position: relative;
    }

    @include media-breakpoint-down(xl) {
      text-align: center;
    }
    @media screen and (max-width: 1039.98px) {
      font-size: 66px;
      max-width: 848px;
    }
    @media screen and (max-width: 945.98px) {
      font-size: 61px;
    }
    @media screen and (max-width: 898.98px) {
      font-size: 57px;
    }
    @media screen and (max-width: 788.98px) {
      font-size: 50px;
    }

    @media screen and (max-width: 500px) {
      font-size: 45px;
    }
  }

  .btnHero {
    font-weight: bold;
    border: none;
    outline: none;

    &:hover {
      background-color: $btn-hover-color;
    }

    &--white {
      background-color: white;

      &:hover {
        background-color: $primary;
      }
    }
  }

  &-leaf {
    color: #77e9cb;
    font-size: 1em;
    position: absolute;
    right: -90px;
    top: -80px;
    transform: scaleX(-1) rotate(-120deg);
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
.backgroundHero {
  z-index: 0;
}
*/
</style>
