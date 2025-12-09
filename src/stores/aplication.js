import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useAplicationStore = defineStore('aplicationStore', () => {
  const router = useRouter();

  const aplication = ref({
    themes: {
      sounds: {
        required: 5,
        countResponses: 0,
        objects: [
            {id: 1, path: '/sounds/C4.mp3', name: 'Dó', color: 'blue'},
            {id: 2, path: '/sounds/D4.mp3', name: 'Ré', color: 'green'},
            {id: 3, path: '/sounds/E4.mp3', name: 'Mi', color: 'red'},
            {id: 4, path: '/sounds/F4.mp3', name: 'Fá', color: 'pink'},
            {id: 5, path: '/sounds/G4.mp3', name: 'Sol', color: 'brown'},
            {id: 6, path: '/sounds/A4.mp3', name: 'Lá', color: 'yellow'},
            {id: 7, path: '/sounds/B4.mp3', name: 'Si', color: 'purple'},
        ],
        difficulties: {
            easy: {
                required: 5,
                timeLimit: 90000,
                params: { numberSounds: 3, size: 9, discover: 1 }
            },
            medium: {
                required: 5,
                timeLimit: 90000,
                params: { numberSounds: 4, size: 12, discover: 2 }
            },
            hard: {
                required: 3,
                timeLimit: 90000,
                params: { numberSounds: 5, size: 15, discover: 3 }
            }
        }
      }
    },
  });

  return{
    aplication
  }
})