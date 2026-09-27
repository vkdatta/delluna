export const name="trolley_cable_car-fill";
export const id="dl_aadf1daa1a5fb33d80e6";
export const url=new URL("../icons/trolley_cable_car-fill.svg?v=f02ed920a15ea38df362a2857fd8c355f887a1b0f8e1f81cba3a4f17713ba48c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
