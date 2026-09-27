export const name="newspaper-clipping-light";
export const id="dl_783c7b36b7b7418db36b";
export const url=new URL("../icons/newspaper-clipping-light.svg?v=84bc63e8a5de95a2e264f32dc9fda8249619e9cfe55ced4e185dad47486f44d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
