export const name="ear_sound-fill";
export const id="dl_b111bd1a6bea67f95234";
export const url=new URL("../icons/ear_sound-fill.svg?v=fa81c0a61b21edd8a7891f84778a5df755b13e09879e9be1a5ade02700f56259",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
