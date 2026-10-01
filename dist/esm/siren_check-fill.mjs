export const name="siren_check-fill";
export const id="dl_3a7759cee81f50037caa";
export const url=new URL("../icons/siren_check-fill.svg?v=8c5b29adcb8fcf2b99260ecc75fd26e36b989641956fd078b5e05381356a1df9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
