export const name="trolley_cable_car-fill";
export const id="dl_d7a6e84e10184e928887";
export const url=new URL("../icons/trolley_cable_car-fill.svg?v=9c377ef9d5438a54fef4df3937048494415c1a06a9dfa75784194496e1c0bb8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
