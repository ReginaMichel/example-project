<script setup lang="ts">
    import { ref } from 'vue';
    import Bewertung from '@/components/Bewertung.vue';
    import EintragModel from '@/models/eintragModel';
    import EintraegeController from '@/controllers/eintraegeController';

    //Eigene Einträge müssen sowohl auf dieser Seite in einer Tabelle angezeigt werden, als auch dem bestehenden Array aller Einträge, das
    //im lokalen Speicher hinterlegt ist, hinzufügt werden. Daher werden zwei Arrays benötigt.
    let eigeneEintraege: EintragModel[] = [];
    let alleEintraege: EintragModel[] = [];
    // Es wird ein Controller erzeugt, der die Tabelleneinträge aus dem lokalen Speicher lädt. Damit die Referenz, nur die Tabelle auf dieser
    // Seite modifiziert, werden die Tabellen geklont.
    const controller: EintraegeController = new EintraegeController();
    controller.getAll().forEach(entry => alleEintraege.push(entry));
    controller.getEigene().forEach(entry => eigeneEintraege.push(entry));

    // Das Array der eigenen Einträge benötigt noch eine Referenz, damit die Liste aktualisiert werden kann.
    const refEigeneEintraege = ref(eigeneEintraege);

    // Per Default sollten die Einträge nach ihrer Aktualität sortiert sein.
    controller.sortByDate(refEigeneEintraege.value);

    // Die Arrays aller Einträge und der eigenen Einträge haben unterschiedlich viele Einträge, daher brauchen neue Einträge eine verschiedene ID,
    // die davon abhängt, wie viele Einträge sich bereits im Array befinden:
    let idEigene = eigeneEintraege.length;
    let idAlle = alleEintraege.length;

    // Initialisieren der Defaultwerte für neue Einträge.
    const neuerName = ref('');
    const neuePLZ = ref(99999);
    const neueKategorie = ref('');
    const neueSubkategorie = ref('');
    const neueService = ref(-1);
    const neueLeistung = ref(-1);
    const neuePreis = ref(-1);
    const neueBewertung = ref(-1);
    
    /**
     * Funktion zum Hinzufügen der Einträge in das Array aller Einträge und das Array der eigenen Einträge, die anschließend auch die aktualisierten Tabellen
     * im lokalen Speicher hinterlegt.
     */
    function hinzufuegen() {
        refEigeneEintraege.value.push({ id: idEigene++, dienstleister: neuerName.value, plz: neuePLZ.value, kategorie: neueKategorie.value,
            subkategorie: neueSubkategorie.value, service: neueService.value, leistung: neueLeistung.value, preise: neuePreis.value, gesamt: neueBewertung.value,
            datum: new Date() });
        alleEintraege.push({ id: idAlle++, dienstleister: neuerName.value, plz: neuePLZ.value, kategorie: neueKategorie.value,
            subkategorie: neueSubkategorie.value, service: neueService.value, leistung: neueLeistung.value, preise: neuePreis.value, gesamt: neueBewertung.value,
            datum: new Date() });
        // Die Einträge werden anschließend wieder zurück auf die Defaultwerte gesetzt:
        neuerName.value = '';
        neuePLZ.value = 99999;
        neueKategorie.value = '';
        neueSubkategorie.value = '';
        neueService.value = -1;
        neueLeistung.value = -1;
        neuePreis.value = -1;
        neueBewertung.value = -1;
        // Dem lokalen Speicher werden nun die beiden Arrays übergeben.
        localStorage.setItem('eigeneEintraege', JSON.stringify(refEigeneEintraege.value));
        localStorage.setItem('alleEintraege', JSON.stringify(alleEintraege));
    }
</script>

<!-- Seite zum Hinzufügen eigener Einträge -->
<template>
    <section>
        <h1>
            Hier können Sie eigene Einträge vornehmen:
        </h1>
        <!-- Eingabefelder für neue Tabelleneinträge -->
        <form @submit.prevent="hinzufuegen">
            <input class="name" v-model="neuerName" required placeholder="Name des Dienstleisters">
            <input class="number" type="number" v-model="neuePLZ" required placeholder="Postleitzahl">
            <select v-model="neueKategorie">
                <option disabled value="">Kategorie</option>
                <option>Gesundheit</option>
                <option>Einzelhandel</option>
                <option>Gastronomie</option>
                <option>Handwerk</option>
            </select>
            <input class="sub" v-model="neueSubkategorie" required placeholder="Unterkategorie">
            <select v-model="neueService">
                <option disabled value="-1"><font color=firebrick>&bigstar;</font> Service</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <select v-model="neueLeistung">
                <option disabled value="-1"><font color=firebrick>&bigstar;</font> Leistung</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <select v-model="neuePreis">
                <option disabled value="-1"><font color=firebrick>&bigstar;</font> Preise</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <select v-model="neueBewertung">
                <option disabled value="-1"><font color=firebrick>&bigstar;</font> Gesamt</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <button>Hinzufügen</button>
        </form>

        <!-- Tabelle zum Anzeigen der eigenen Einträge: -->
        <table>
            <tr>
                <!-- Die Einträge können durch das Anklicken des Sortier-Icons auf- oder absteigend sortiert werden: -->
                <th>Dienstleister <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByName(refEigeneEintraege)"></img></th>
                <th>PLZ <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByPLZ(refEigeneEintraege)"></img></th>
                <th>Kategorie <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByKategorie(refEigeneEintraege)"></img></th>
                <th>Unterkategorie <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByUnterkategorie(refEigeneEintraege)"></img></th>
                <th>Service <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByService(refEigeneEintraege)"></img></th>
                <th>Leistung <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByLeistung(refEigeneEintraege)"></img></th>
                <th>Preise <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByPreise(refEigeneEintraege)"></img></th>
                <th>Gesamt <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByGesamt(refEigeneEintraege)"></img></th>
                <th>Datum <img src="@/assets/Sort_both_small.png" v-on:click="controller.sortByDate(refEigeneEintraege)"></img></th>
            </tr>
            <!-- Zeile mit Beispieleinträgen, falls man noch keine eigenen Einträge eingegeben hat: -->
            <tr v-if="eigeneEintraege.length==0">
                <td><font color=lightgray>Max Meiers Musterbetrieb</font></td>
                <td><font color=lightgray>99999</font></td>
                <td><font color=lightgray>Beispielkategorie</font></td>
                <td><font color=lightgray>Unterkategorie</font></td>
                <td><Bewertung :counter="0" /></td>
                <td><Bewertung :counter="0" /></td>
                <td><Bewertung :counter="0" /></td>
                <td><Bewertung :counter="0" /></td>
                <td><font color=lightgray>1.1.2000</font></td>
            </tr>
            <tr v-for="eintrag in refEigeneEintraege" :key="eintrag.id">
                <td>{{eintrag.dienstleister}}</td>
                <td>{{eintrag.plz}}</td>
                <td>{{eintrag.kategorie}}</td>
                <td>{{eintrag.subkategorie}}</td>
                <td><Bewertung :counter="eintrag.service" /></td>
                <td><Bewertung :counter="eintrag.leistung" /></td>
                <td><Bewertung :counter="eintrag.preise" /></td>
                <td><Bewertung :counter="eintrag.gesamt" /></td>
                <td>{{eintrag.datum.toLocaleDateString("de-DE", {})}}</td>
            </tr>
        </table>
    </section>
</template>

<style scoped>
    table {
        margin-top: 30px;
    }
    input.name {
        width: 200px;
    }
    input.number {
        width: 70px;
    }
    input.sub {
        width: 156px;
    }
    input {
        margin-right: 12px;
        display: inline;
    }
</style>