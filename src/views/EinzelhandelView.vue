<script setup lang="ts">
  import EintraegeController from '@/controllers/eintraegeController';
  import Bewertung from '../components/Bewertung.vue';
  import EintragModel from "@/models/eintragModel";
  import {ref} from 'vue';

  const controller: EintraegeController = new EintraegeController();
  let eintraegeEinzelhandel: EintragModel[] = [];
  //Das Array, das die Tabelleneinträge enthält muss geklont werden, da die Referenz sonst auf das ursprüngliche Array
  //zurückgreift und die Modifikation des Arrays auf einer Seite sonst zur Modifikation auf allen Seiten führt.
  controller.getEinzelhandel().forEach(entry => eintraegeEinzelhandel.push(entry));
  const refEintraegeEinzelhandel = ref(eintraegeEinzelhandel);

  // Per Default sollten die Einträge nach ihrer Aktualität sortiert sein.
  controller.sortByDate(refEintraegeEinzelhandel.value);
</script>

<!-- Inhalte der Seite "Einzelhandel" -->
<template>
  <section>
    <!-- Tabelle zum Anzeigen der Einträge in der Kategorie "Einzelhandel". Anklicken der Icons im Header sortiert die Einträge alphanumerisch: -->
    <table>
      <tr>
        <th>Dienstleister <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByName(refEintraegeEinzelhandel)"></img></th>
        <th>PLZ <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByPLZ(refEintraegeEinzelhandel)"></img></th>
        <th>Kategorie <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByKategorie(refEintraegeEinzelhandel)"></img></th>
        <th>Unterkategorie <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByUnterkategorie(refEintraegeEinzelhandel)"></img></th>
        <th>Service <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByService(refEintraegeEinzelhandel)"></img></th>
        <th>Leistung <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByLeistung(refEintraegeEinzelhandel)"></img></th>
        <th>Preise <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByPreise(refEintraegeEinzelhandel)"></img></th>
        <th>Gesamt <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByGesamt(refEintraegeEinzelhandel)"></img></th>
        <th>Datum <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByDate(refEintraegeEinzelhandel)"></img></th>
      </tr>
      <template v-for="eintrag in refEintraegeEinzelhandel" :key="eintrag.id">
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