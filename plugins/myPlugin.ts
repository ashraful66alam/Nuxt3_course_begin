import { provide } from "vue";

export default defineNuxtPlugin( (useNuxtApp)=> {
    console.log(useNuxtApp);
   return{
    provide:{
        hello:(msg:string)=>`Hello ${msg}!`
    }
   }
});