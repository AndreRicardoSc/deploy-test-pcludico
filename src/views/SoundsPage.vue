<script setup>
    import SoundSequence from '../components/SoundSequence.vue';
    import SoundResponse from '../components/SoundResponse.vue';
    import { onMounted } from 'vue';
    import { useAplicationStore } from '../stores/aplication';
    import { useAudioStore } from '../stores/audio';
    import { useSequenceStore } from '../stores/sequence';
    const audioStore = useAudioStore();
    const sequenceStore = useSequenceStore();
    const aplicationStore = useAplicationStore();

    import { useRouter } from 'vue-router';
    const router = useRouter();

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
        aplicationStore.aplication.themes.sounds.countResponses = 0;
    })
</script>

<template>

    <section class="flex flex-col items-center text-white gap-20">

        <div class="text-black text-2xl">
            <p>Acertos: {{ aplicationStore.aplication.themes.sounds.countResponses }}/{{ props.required }}</p>
        </div>

        <div class="flex flex-wrap gap-5 justify-center">
            <SoundSequence 
                v-for="(sound, index) in sequenceStore.sequence" :key="index"
                :sound="sound"
                :index="index"
                @play-audio.="audioStore.playAudio"
            />
        </div>

        <div class="flex flex-col items-center gap-10">
            <h1 class="text-3xl text-black font-semibold">Opções:</h1>
            <div class="flex flex-wrap gap-5 justify-center">
                <SoundResponse 
                    v-for="sound in sequenceStore.finalChoices"
                    :sound="sound"
                    :params="propsNumber"
                    @play-audio="audioStore.playAudio"
                />
            </div>
        </div>

        <button 
            class="px-8 py-3 bg-pink-500 border-2 border-pink-500 text-2xl rounded-md cursor-pointer hover:bg-white hover:text-pink-500 transition-all duration-300"
            @click="router.push({ name: 'HomePage'})"
        >
            Sair
        </button>
    </section>

</template>