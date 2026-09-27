export const name="diversity_2";
export const id="dl_1952a2cd5d42eaaa01d6";
export const url=new URL("../icons/diversity_2.svg?v=4fd310772f49e229df323a3279cbe3e59b90874231b9a09d561933ad584ce2c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
