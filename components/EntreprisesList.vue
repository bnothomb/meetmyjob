<script setup>
import { ref } from 'vue'
const entreprises = ref([
  {
    link: '#',
    img: 'https://cdn.meet-my-job.com/4f632c51-1a16-4fb0-a586-8d3d9a7ecd6b/1684920853240_5f5cfa4d-5033-4c34-82f7-c8a976a9a991.jpg/368:185:webp:70',
    logo: 'https://cdn.meet-my-job.com/4f632c51-1a16-4fb0-a586-8d3d9a7ecd6b/1684922463744_logo.jpg/100:100:webp:80',
    jobNumber: 1,
    name: 'Ethiquable',
    tagline: 'Entreprise coopérative, citoyenne et solidaire',
    sector:
      'Alimentation saine, Associations & ONG, Consommation responsable, Ecologie & environnement',
    localisation: 'Province de Namur',
    size: 'Entre 5 et 50 employés',
    text: "Construire un monde plus juste et respectueux de l'environnement, tu y crois aussi ? Tu es au bon endroit et nous t’expliquons pourquoi ! 👇Ethiquable Benelux, c'est une véritable ...",
  },
  {
    link: '#',
    img: 'https://cdn.meet-my-job.com/471e9c4d-de08-40ec-a4c2-b389d248d90d/1684159808479_image-7bis.jpg/368:185:jpg:70',
    logo: 'https://cdn.meet-my-job.com/471e9c4d-de08-40ec-a4c2-b389d248d90d/1684157156970_logo.jpg/100:100:webp:80',
    jobNumber: 2,
    name: 'Pro Velo',
    tagline: 'Donner le goût du vélo en le rendant accessible à tous.tes',
    sector:
      'Associations & ONG, Culture / Divertissement / Loisirs, Ecologie & environnement, Mobilité',
    localisation: 'Bruxelles',
    size: 'Entre 50 et 150 employés',
    text: 'Un moyen de déplacement écologique, économique et bénéfique à la santé ? Le vélo, évidemment ! Comme chez Pro Velo, nous pensons que la mobilité douce est la clé pour un avenir plu...',
  },
  {
    link: '#',
    img: 'https://cdn.meet-my-job.com/c14671d8-c8fb-453a-92b3-0c426e147c3e/1678115782128_the-barn-image-entreprise.jpg/368:185:jpg:70',
    logo: 'https://cdn.meet-my-job.com/c14671d8-c8fb-453a-92b3-0c426e147c3e/1678115793366_logo-thebarn-najat-el-messaoudi.png/100:100:webp:80',
    jobNumber: 1,
    name: 'The Barn',
    tagline: "L'alimentation durable accessible",
    sector:
      'Alimentation saine, Associations & ONG, Consommation responsable, Ecologie & environnement',
    localisation: 'Bruxelles',
    size: 'Entre 50 et 150 employés',
    text: "The Barn c'est deux jeunes entrepreneurs, entourés d'une équipe de 140 passionnés, qui, ensemble, relèvent le défi de proposer des produits abordables, 100% bio provenant directeme...",
  },
])
</script>

<template>
  <div class="container">
    <div class="row my-5 justify-content-center justify-content-lg-around gx-5">
      <header
        class="col-12 col-lg-8 generalHeader align-items-center order-0 text-center text-lg-start"
      >
        <div class="row">
          <div class="col">
            <h2>
              <span>Les&nbsp;</span><span>dernières&nbsp;</span
              ><span>entreprises&nbsp;</span><span>engagées&nbsp;</span
              ><span>qui&nbsp;</span><span>recrutent</span>
            </h2>
          </div>
          <div class="col-12 d-block d-lg-none">
            <p class="mb-0 pb-0 small mx-4">
              Leurs particularités ? Ce ne sont que des acteurs qui ont un
              impact environnemental et/ou sociétal
            </p>
          </div>
        </div>
      </header>
      <div class="col-12 carousel m-3 content px-0 py-2 order-2">
        <EnterpriseCard
          v-for="enterprise in entreprises"
          class="mx-3 carousel-enterprise"
          :likes="enterprise.likes"
          :link="enterprise.link"
          :img="enterprise.img"
          :logo="enterprise.logo"
          :jobNumber="enterprise.jobNumber"
          :name="enterprise.name"
          :tagline="enterprise.tagline"
          :sector="enterprise.sector"
          :localisation="enterprise.localisation"
          :size="enterprise.size"
          :text="enterprise.text"
        />
      </div>
      <button
        href="#"
        class="col-10 col-lg-4 btn btn-primary btn-mmj btn-mmj--primary order-3 order-lg-1 align-items-center justify-content-center"
      >
        Voir plus d'entreprises engagées
        <client-only>
          <!-- TODO-ISSUE
                Needed due to a duplication bug in font-awasome 
                https://github.com/FortAwesome/vue-fontawesome/issues/447 
              -->
          <font-awesome-icon icon="fa-solid fa-chevron-right" class="ms-1" />
        </client-only>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/scss/main.scss';
.generalHeader h2 span::before,
.generalHeader p.h2 span::before {
  background-color: $primary;
  border-radius: 50px;
  content: '';
  display: block;
  height: 13px;
  left: 0;
  position: absolute;
  top: 55%;
  width: calc(100% + 15px);
  z-index: -1;
}

.generalHeader h2 span,
.generalHeader p.h2 span {
  display: inline-block;
  font-size: inherit;
  font-weight: 800;
  position: relative;
  z-index: 1;
}

.carousel {
  display: flex;
  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .carousel-enterprise {
    min-width: 30%;
    @include media-breakpoint-down(xl) {
      min-width: 50%;
    }
    @include media-breakpoint-down(lg) {
      min-width: 60%;
    }
    @include media-breakpoint-down(md) {
      min-width: 80%;
    }
  }
}
</style>
