export const name="functions";
export const id="dl_b6bc934b70dd8af0ab5d";
export const url=new URL("../icons/material_symbols/functions.svg?v=65b20d4ff6a7630727a058c49bec0181011a02356c9ce3fa41b1ece775c7145a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
