export const name="pepper-light";
export const id="dl_aef3134b0d7442a68fb6";
export const url=new URL("../icons/pepper-light.svg?v=0075a2a2a443b37cd6c1ebfbb6090c1579c0f0e510930892eeac5fc0a9653781",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
