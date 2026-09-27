export const name="blood_pressure-fill";
export const id="dl_45f57cce3fac95da9b1e";
export const url=new URL("../icons/blood_pressure-fill.svg?v=7f6e6d45603edcc67c66da7131f009aec36f2952424080407af3ef3b9c2d2bee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
