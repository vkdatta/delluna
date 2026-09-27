export const name="battery_charging_full_2";
export const id="dl_069c72fd6d78106309c8";
export const url=new URL("../icons/battery_charging_full_2.svg?v=6be1479cce509ef42a6d721644d18e22bfcf82d6ca6b31ce75f541d0ebf11011",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
