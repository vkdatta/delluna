export const name="water_pump-fill";
export const id="dl_d1f525f206c64d28b728";
export const url=new URL("../icons/W/water_pump-fill.svg?v=4cc88bd22f96899a275f077073e72f3865498539c570f00aba2313708c6e5a95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
