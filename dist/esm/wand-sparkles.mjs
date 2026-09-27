export const name="wand-sparkles";
export const id="dl_68e7b35f73034c1a9538";
export const url=new URL("../icons/wand-sparkles.svg?v=4c27a45bf97f2114ca4be56dbeb09f812d1fbcf0bc529918723477bb37688035",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
