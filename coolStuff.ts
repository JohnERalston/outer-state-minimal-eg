import { createStore } from 'outer-state';

export const timeState = createStore(getTime());

setInterval(() => {
  timeState.updateStore(getTime());
}, 1000);

function getTime() {
  const now = new Date();
  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  };
}
