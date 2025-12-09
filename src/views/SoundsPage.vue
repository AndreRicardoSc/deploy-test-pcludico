<script setup>
    import { onMounted } from 'vue';
    import { useAplicationStore } from '../stores/aplication';
    import { useAudioStore } from '../stores/audio';
    import { useSequenceStore } from '../stores/sequence';
    const audioStore = useAudioStore();
    const sequenceStore = useSequenceStore();
    const aplicationStore = useAplicationStore();

    const props = defineProps({
        numberSounds: String,
        size: String,
        discover: String,
        timeLimit: String,
        required: String
    });

    const propsNumber = {
        numberSounds: Number(props.numberSounds),
        size: Number(props.size),
        discover: Number(props.discover),
        timeLimit: Number(props.timeLimit),
        required: Number(props.required),
    }

    onMounted(() => {
        sequenceStore.mountSequence(propsNumber.numberSounds, propsNumber.size, propsNumber.discover, aplicationStore.aplication.themes.sounds.objects);
    })
</script>

<template>

    <section>
        
        <div class="flex flex-wrap gap-5 justify-center">
            <a  href="#" 
                v-for="sound in sequenceStore.sequence"
                @click="audioStore.playAudio(sound.object.path)"
                @focus="audioStore.playAudio(sound.object.path)"                
            >
                <div class="bg-pink-500 w-20 h-20 border rounded-md"></div>
            </a>
        </div>

    </section>

</template>