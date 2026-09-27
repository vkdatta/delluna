export const name="airplay-duotone";
export const id="dl_5963b1e861674f5aad15";
export const url=new URL("../icons/airplay-duotone.svg?v=0ba87bf4cbf02fdb2897af7c623f9458e7c8e1a8a067d60eba19215d155e57ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
