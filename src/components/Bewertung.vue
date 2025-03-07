<!-- Komponente zur Modellierung der Bewertungssterne -->

<script setup lang="ts">
    defineProps<{
        // Parameter, der die gewünschte Zahl der Sterne übergibt.
        counter: number
    }>()
</script>

<template>
<!--     Eine for-Schleife zählt von bis 5 und erzeugt so viele rote Sterne, wie der counter
    beträgt und füllt anschließend mit grauen Sternen auf, sodass es insgesamt 5 Sterne werden. -->
    <span v-for="n in 5">
        <p v-if="counter>n-1"><font color=firebrick>&bigstar;</font></p>
        <p v-if="counter<n"><font color=lightgray>&bigstar;</font></p>
    </span>
</template>

<!-- Da das Symbol der Sterne etwas klein ist, wird die Schrift von Paragraphs speziell für diese
    Komponente vergrößert. -->
<style scoped>
    p {
        font-size: large;
    }
</style>