export const name="lock-simple-open-bold";
export const id="dl_bf7b57bddd7548719a20";
export const url=new URL("../icons/lock-simple-open-bold.svg?v=fe9ee84ea1fb914b7a9adc1c70fdc437bb826f06a09142afae91ac59bdb39322",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
