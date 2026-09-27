export const name="safety_check_off";
export const id="dl_f5b2ee1aa426c472bc64";
export const url=new URL("../icons/safety_check_off.svg?v=a64f1857321ff424f43d22e24c579448b06d24c7904abfbb8ff42981eb6bc68e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
