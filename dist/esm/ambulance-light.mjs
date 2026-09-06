export const name="ambulance-light";
export const id="dl_d6120f724f2143bbb8fd";
export const url=new URL("../icons/ambulance-light.svg?v=88a0a6e7645736fcc733259eb335dd3945278eac43443cda0c2ccaadd993871a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
