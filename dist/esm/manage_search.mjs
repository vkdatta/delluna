export const name="manage_search";
export const id="dl_a1c4a528f915f39f9873";
export const url=new URL("../icons/material_symbols/manage_search.svg?v=2cc4e32312d5d8fc639c1fc657f9689ae66b0bbcd5c8f50724a1011b5a9854e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
