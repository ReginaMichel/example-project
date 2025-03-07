<script setup lang="ts">
  import EintraegeController from '@/controllers/eintraegeController';
  import Bewertung from '../components/Bewertung.vue';
  import EintragModel from "@/models/eintragModel";
  import {ref} from 'vue';

  const controller: EintraegeController = new EintraegeController();
  let alleEintraege: EintragModel[] = [];
  //Das Array, das die Tabelleneinträge enthält muss geklont werden, da die Referenz sonst auf das ursprüngliche Array
  //zurückgreift und die Modifikation des Arrays auf einer Seite sonst zur Modifikation auf allen Seiten führt.
  controller.getAll().forEach(entry => alleEintraege.push(entry));
  const refAlleEintraege = ref(alleEintraege);

  // Per Default sollten die Einträge nach ihrer Aktualität sortiert sein.
  controller.sortByDate(refAlleEintraege.value);
</script>

<!-- Inhalte der Startseite -->
<template>
  <section>
    <h1>Herzlich willkommen auf <font color=firebrick>Cherrypicking.com</font>! - Ihrem Portal zur Bewertung von 
      Dienstleistungen Ihrer Region!</h1>
    <h3>Hier können Sie Dienstleistern aus Gesundheitsbranche, Einzelhandel, Gastronomie und Handwerk anonyme 
      Bewertungen hinterlassen. Erfahren Sie hier von den Geheimtipps Ihrer Nachbarn.</h3>
    <h1>Neuigkeiten in Ihrer Gegend:</h1>
    <!-- Tabelle zum Anzeigen von bis zu 10 Einträgen. Per Default sind es die letzten 10, die hinzugefügt wurden. -->
    <table>
      <tr>
        <th>Dienstleister <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByName(refAlleEintraege)"></img></th>
        <th>PLZ <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByPLZ(refAlleEintraege)"></img></th>
        <th>Kategorie <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByKategorie(refAlleEintraege)"></img></th>
        <th>Unterkategorie <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByUnterkategorie(refAlleEintraege)"></img></th>
        <th>Service <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByService(refAlleEintraege)"></img></th>
        <th>Leistung <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByLeistung(refAlleEintraege)"></img></th>
        <th>Preise <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByPreise(refAlleEintraege)"></img></th>
        <th>Gesamt <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByGesamt(refAlleEintraege)"></img></th>
        <th>Datum <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByDate(refAlleEintraege)"></img></th>
      </tr>
      <template v-for="eintrag in refAlleEintraege.slice(0,10)" :key="eintrag.id">
        <tr>
          <td>{{eintrag.dienstleister}}</td>
          <td>{{eintrag.plz}}</td>
          <td>{{eintrag.kategorie}}</td>
          <td>{{eintrag.subkategorie}}</td>
          <td><Bewertung :counter=eintrag.service /></td>
          <td><Bewertung :counter=eintrag.leistung /></td>
          <td><Bewertung :counter=eintrag.preise /></td>
          <td><Bewertung :counter=eintrag.gesamt /></td>
          <td>{{eintrag.datum.toLocaleDateString("de-DE", {})}}</td>
        </tr>
      </template>      
    </table> 
  </section>
</template>

<style scoped>
  input {
    margin-left: 12px;
  }
</style>