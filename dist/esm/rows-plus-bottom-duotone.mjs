export const name="rows-plus-bottom-duotone";
export const id="dl_ddce48accd604921b2af";
export const url=new URL("../icons/rows-plus-bottom-duotone.svg?v=37d5eacc22667e1a1503a8eea10229d3e286f4884605ff46d41e406911e9e01d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
