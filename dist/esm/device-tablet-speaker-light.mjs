export const name="device-tablet-speaker-light";
export const id="dl_0ebbb7c69ac14d8da3a3";
export const url=new URL("../icons/device-tablet-speaker-light.svg?v=d8fd9700d15a4b799b1d49d0458865a73bdcf9eb0b6d07cf14fd83637243c19d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
