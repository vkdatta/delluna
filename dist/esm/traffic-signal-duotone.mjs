export const name="traffic-signal-duotone";
export const id="dl_d373d7b2cf2241a1b14f";
export const url=new URL("../icons/T/traffic-signal-duotone.svg?v=ff40802dcd2581a8965c2fb60043b234dd31e3daf7a326302f71d9cc3d9a04b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
