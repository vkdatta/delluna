export const name="building";
export const id="dl_386ad8834055448c8710";
export const url=new URL("../icons/building.svg?v=62b22e531355cb72bf03b01dfd100dee6e6a0297886e6fb0a303ed859e179381",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
