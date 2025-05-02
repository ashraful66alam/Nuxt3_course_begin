export const useCounterStore = defineStore('counter', () => {
    const count = ref(10);
    const name = ref('Ash El');
    const doubleCount = computed(() => count.value * 2)
    function increment() {
      count.value++;
      name.value="Ash Raf";
    }
  
    return { count, name, doubleCount, increment }
  })
  