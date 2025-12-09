<script setup>
    import { useAudioStore } from '../stores/audio';
    import { useSequenceStore } from '../stores/sequence';
    const audioStore = useAudioStore();
    const sequenceStore = useSequenceStore();

    const props = defineProps({
        numberSounds: Number,
        size: Number,
        discover: Number,
        timeLimit: Number,
        required: Number
    });

</script>

<template>
    
    <section>

    </section>
</template>