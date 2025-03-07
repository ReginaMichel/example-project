<script setup lang="ts">
  import EintraegeController from '@/controllers/eintraegeController';
  import Bewertung from '../components/Bewertung.vue';
  import EintragModel from "@/models/eintragModel";
  import {ref} from 'vue';

  const controller: EintraegeController = new EintraegeController();
  let eintraegeHandwerk: EintragModel[] = [];
  //Das Array, das die Tabelleneinträge enthält muss geklont werden, da die Referenz sonst auf das ursprüngliche Array
  //zurückgreift und die Modifikation des Arrays auf einer Seite sonst zur Modifikation auf allen Seiten führt.
  controller.getHandwerk().forEach(entry => eintraegeHandwerk.push(entry));
  const refEintraegeHandwerk = ref(eintraegeHandwerk);

  // Per Default sollten die Einträge nach ihrer Aktualität sortiert sein.
  controller.sortByDate(refEintraegeHandwerk.value);
</script>

<!-- Inhalte der Seite "Handwerk" -->
<template>
  <section>
    <!-- Tabelle zum Anzeigen der Einträge in der Kategorie "Handwerk". Anklicken der Icons im Header sortiert die Einträge alphanumerisch: -->
    <table>
      <tr>
        <th>Dienstleister <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByName(refEintraegeHandwerk)"></img></th>
        <th>PLZ <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByPLZ(refEintraegeHandwerk)"></img></th>
        <th>Kategorie <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByKategorie(refEintraegeHandwerk)"></img></th>
        <th>Unterkategorie <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByUnterkategorie(refEintraegeHandwerk)"></img></th>
        <th>Service <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByService(refEintraegeHandwerk)"></img></th>
        <th>Leistung <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByLeistung(refEintraegeHandwerk)"></img></th>
        <th>Preise <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByPreise(refEintraegeHandwerk)"></img></th>
        <th>Gesamt <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByGesamt(refEintraegeHandwerk)"></img></th>
        <th>Datum <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByDate(refEintraegeHandwerk)"></img></th>
      </tr>
      <template v-for="eintrag in refEintraegeHandwerk" :key="eintrag.id">
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