export const name="car-simple-thin";
export const id="dl_5e50963350b841969335";
export const url=new URL("../../icons/C/car-simple-thin.svg?v=ef912732912edbdf5e5e9b81e6da6fb4a36a7893ee46351eb98562a38adbd1ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
