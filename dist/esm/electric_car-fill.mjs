export const name="electric_car-fill";
export const id="dl_884048c27d5d9280b6e3";
export const url=new URL("../icons/electric_car-fill.svg?v=1882866d148264d7d09951a0e6741bc898e441bdd90d5fb13bee3d7a4adb3a77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
