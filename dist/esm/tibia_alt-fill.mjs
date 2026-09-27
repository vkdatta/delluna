export const name="tibia_alt-fill";
export const id="dl_2896ff1c6149740f8d7a";
export const url=new URL("../icons/tibia_alt-fill.svg?v=44cbf8993a7bc0203eb7d07d32b7e084d5289f1e5b79269cc027d4f46523e6a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
