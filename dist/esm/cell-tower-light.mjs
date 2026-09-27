export const name="cell-tower-light";
export const id="dl_b819ae99c7294b9c90ec";
export const url=new URL("../icons/cell-tower-light.svg?v=552b27c7ab45040cff7070c39977faa2014e928324f610089e6204204a0b9572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
