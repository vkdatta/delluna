export const name="draw_abstract";
export const id="dl_b31bf56aeb1744348128";
export const url=new URL("../icons/D/draw_abstract.svg?v=2dabead95a3136ad1d957309ed5523f02a6430280348eafdcd40fb657ba6fb2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
