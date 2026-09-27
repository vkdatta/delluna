export const name="trolley_cable_car-fill";
export const id="dl_d4b5fa41048e4289cbe0";
export const url=new URL("../icons/trolley_cable_car-fill.svg?v=2d9fe704d8b3d94839d732c479f693bc219992b43f201614cd33cd30462671bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
