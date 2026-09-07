export const name="sim-card-light";
export const id="dl_9f8f663f4aa04e0ca404";
export const url=new URL("../icons/S/sim-card-light.svg?v=670fcc1fc02266aa1c8c31228c144b132d9e6f3af9243a0d084635b21f364759",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
