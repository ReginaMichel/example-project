<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

const titleClass = ref('title');
</script>

<!-- Header und Navigationszeile der Seite. -->
<template>
  <header>
    <h1 :class="titleClass">Cherrypicking.com</h1>
  </header>
  <nav>
    <RouterLink to="/">Startseite</RouterLink>
    <RouterLink class="eingerueckt" to="/gesundheit">Gesundheit</RouterLink>
    <RouterLink to="/einzelhandel">Einzelhandel</RouterLink>
    <RouterLink to="/gastronomie">Gastronomie</RouterLink>
    <RouterLink to="/handwerk">Handwerk</RouterLink>
    <RouterLink class="eingerueckt" to="/eintragen">Eigener Eintrag</RouterLink>
  </nav>
  <RouterView />
</template>