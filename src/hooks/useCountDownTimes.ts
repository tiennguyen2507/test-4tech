import { computed, ref, onUnmounted } from 'vue';

const useCountDownTimes = (timeDown: string) => {
  const daysValue = ref(0);
  const hoursValue = ref(0);
  const minutesValue = ref(0);
  const secondsValue = ref(0);

  const lauchTime = new Date(timeDown) as any;

  const data = setInterval(() => {
    const curentDay = new Date() as any;
    const value = (lauchTime - curentDay) as any;

    secondsValue.value = parseInt(`${value / 1000}`);
    minutesValue.value = parseInt(`${secondsValue.value / 60}`);
    hoursValue.value = parseInt(`${minutesValue.value / 60} `);
    daysValue.value = parseInt(`${hoursValue.value / 24}`);
  }, 1000);

  const format = (value: number) => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  const day = computed(() => format(daysValue.value));
  const hours = computed(() => format(hoursValue.value % 24));
  const minutes = computed(() => format(minutesValue.value % 60));
  const seconds = computed(() => format(secondsValue.value % 60));

  onUnmounted(() => {
    clearInterval(data);
  });
  return { day, hours, minutes, seconds };
};

export default useCountDownTimes;
