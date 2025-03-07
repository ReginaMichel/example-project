<script setup lang="ts">
  import EintraegeController from '@/controllers/eintraegeController';
  import Bewertung from '../components/Bewertung.vue';
  import EintragModel from "@/models/eintragModel";
  import {ref} from 'vue';

  const controller: EintraegeController = new EintraegeController();
  let eintraegeGesundheit: EintragModel[] = [];
  //Das Array, das die Tabelleneinträge enthält muss geklont werden, da die Referenz sonst auf das ursprüngliche Array
  //zurückgreift und die Modifikation des Arrays auf einer Seite sonst zur Modifikation auf allen Seiten führt.
  controller.getGesundheit().forEach(entry => eintraegeGesundheit.push(entry));
  const refEintraegeGesundheit = ref(eintraegeGesundheit);

  // Per Default sollten die Einträge nach ihrer Aktualität sortiert sein.
  controller.sortByDate(refEintraegeGesundheit.value);
</script>

<!-- Inhalte der Seite "Gesundheit" -->
<template>
  <section>
    <!-- Tabelle zum Anzeigen der Einträge in der Kategorie "Gesundheit". Anklicken der Icons im Header sortiert die Einträge alphanumerisch: -->
    <table>
      <tr>
        <th>Dienstleister <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByName(refEintraegeGesundheit)"></img></th>
        <th>PLZ <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByPLZ(refEintraegeGesundheit)"></img></th>
        <th>Kategorie <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByKategorie(refEintraegeGesundheit)"></img></th>
        <th>Unterkategorie <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByUnterkategorie(refEintraegeGesundheit)"></img></th>
        <th>Service <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByService(refEintraegeGesundheit)"></img></th>
        <th>Leistung <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByLeistung(refEintraegeGesundheit)"></img></th>
        <th>Preise <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByPreise(refEintraegeGesundheit)"></img></th>
        <th>Gesamt <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByGesamt(refEintraegeGesundheit)"></img></th>
        <th>Datum <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByDate(refEintraegeGesundheit)"></img></th>
      </tr>
      <template v-for="eintrag in refEintraegeGesundheit" :key="eintrag.id">
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