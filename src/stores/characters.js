import { defineStore } from 'pinia'
import {ref} from 'vue'
import ky from 'ky';
const NAMESPACE = 'characters'

export const useCharacterStore = defineStore(NAMESPACE,() => {
    const disneyCharacters = ref([])
    const currentChar = ref('')
    const fetchAllChar = async ()=>{
        const rawReq  = await ky.get("https://api.disneyapi.dev/character/")
        const jsonReq = await rawReq.json()
        disneyCharacters.value = jsonReq.data
        return rawReq
    }
    const setCurrentChar = (charId)=>{
        currentChar.value = charId
    }
    return { 
        disneyCharacters,
        setCurrentChar,
        currentChar,
        fetchAllChar
    }
  })