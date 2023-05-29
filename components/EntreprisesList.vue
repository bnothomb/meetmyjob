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
    img: 'https://cdn.meet-my-job.com/4f632c51-1a16-4fb0-a586-8d3d9a7ecd6b/1684920853240_5f5cfa4d-5033-4c34-82f7-c8a976a9a991.jpg/368:185:webp:70',
    logo: 'https://cdn.meet-my-job.com/4f632c51-1a16-4fb0-a586-8d3d9a7ecd6b/1684922463744_logo.jpg/100:100:webp:80',
    jobNumber: 2,
    name: 'Ethiquable',
    tagline: 'Entreprise coopérative, citoyenne et solidaire',
    sector:
      'Alimentation saine, Associations & ONG, Consommation responsable, Ecologie & environnement',
    localisation: 'Province de Namur',
    size: 'Entre 5 et 50 employés',
    text: 'd',
  },
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
    text: 'ledd',
  },
])

const sectorIcon = '\f02b'
const mapIcon = '\f3c5'
const sizeIcon = '\f0c0'
</script>

<template>
  <div class="container">
    <div class="row mt-5">
      <header
        class="col-12 generalHeader d-flex flex-row flex-wrap align-items-center"
      >
        <div class="col text-center text-lg-left">
          <h2>
            <span>Les&nbsp;</span><span>dernières&nbsp;</span
            ><span>entreprises&nbsp;</span><span>engagées&nbsp;</span
            ><span>qui&nbsp;</span><span>recrutent</span>
          </h2>
        </div>
        <div class="col-12 pt-lg-3 pt-3 d-block d-lg-none">
          <p class="text-center mb-0 pb-0 small mx-4">
            Leurs particularités ? Ce ne sont que des acteurs qui ont un impact
            environnemental et/ou sociétal
          </p>
        </div>
      </header>
      <div
        class="snapScrollWindow col-12 d-flex flex-row flex-wrap align-items-lg-center align-items-start justify-content-stretch content px-0 mt-2"
      >
        <div class="carousel mx-2">
          <EnterpriseCard
            v-for="enterprise in entreprises"
            class="mx-2"
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
      </div>
      <div
        class="w-100 d-flex d-lg-none align-items-center justify-content-center mt-3"
      >
        <a href="/entreprises-impact" class="btn btn-primary mx-auto mt-3 py-2"
          >Voir plus d'entreprises engagées<i
            class="ml-3 fas fa-chevron-right"
          ></i
        ></a>
      </div>
    </div>
  </div>
</template>

<style>
.generalHeader h2 span::before,
.generalHeader p.h2 span::before {
  background-color: #77e9cb;
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
.generalHeader h2,
.generalHeader p.h2 {
  font-size: 1.2rem !important;
}
.generalHeader h2,
.generalHeader p.h2 {
  margin-left: auto;
  margin-right: auto;
  max-width: 320px;
}
h2,
h3,
h4,
h5,
h6 {
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  margin-top: 0;
}
.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  width: 100%;
}
.generalHeader h2 span,
.generalHeader p.h2 span {
  display: inline-block;
  font-size: inherit;
  font-weight: 800;
  position: relative;
  z-index: 1;
}

@media (max-width: 365.98px) .selectedEntreprises header p {
  margin-left: auto;
  margin-right: auto;
  max-width: 220px;
}

.carousel {
  display: flex;
  overflow: scroll;
  /* scroll-snap-type: x mandatory; */
}

/* .carousel > * {
  flex: 1 0 100%;
  scroll-snap-align: start;
} */
</style>
