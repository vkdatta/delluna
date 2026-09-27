export const name="box-arrow-down-fill";
export const id="dl_7adffea133694d18ac7d";
export const url=new URL("../icons/box-arrow-down-fill.svg?v=69b3e103cfff9d5f3f06ccf983f8bea36ba678ed4cbcb37ac4125345d8946ec0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
