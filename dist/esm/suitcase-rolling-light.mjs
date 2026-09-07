export const name="suitcase-rolling-light";
export const id="dl_d8637989bc3b47e0bd0d";
export const url=new URL("../icons/S/suitcase-rolling-light.svg?v=3577b126ef27447a26e10c2c08e6992ba003096e5799d17bcf69162caf89b274",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
