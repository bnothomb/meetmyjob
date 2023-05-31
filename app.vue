<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: "Meet My Job : 1er site Belge pour la recherche d'un emploi à impact",
  meta: [
    {
      name: 'description',
      content:
        "Trouve ton emploi au sein d'entreprises qui se mobilisent pour notre planète et société. Environnement, Social, Secteur Bio, Économie circulaire, ...",
    },
  ],
})
</script>

<template>
  <div>
    <TopBanner />
    <NavBar />
    <main>
      <BannerHero />
      <EntreprisesList />
    </main>
  </div>
</template>
