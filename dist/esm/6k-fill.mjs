export const name="6k-fill";
export const id="dl_3230bdbbe41af81ba0f3";
export const url=new URL("../icons/6k-fill.svg?v=ee09f3c689889d75733a82acaa0a0704a9d0ef32937162158d5b44c1b589f720",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
