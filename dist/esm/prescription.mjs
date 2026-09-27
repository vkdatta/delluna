export const name="prescription";
export const id="dl_b4e361e13b6d4364827d";
export const url=new URL("../icons/prescription.svg?v=46495404deecaffb2ce7c5d46b37850eff9548fbf11a0e2d9bb31f7e7a309036",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
