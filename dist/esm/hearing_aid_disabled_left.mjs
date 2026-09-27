export const name="hearing_aid_disabled_left";
export const id="dl_3e4b5f4212b9477060e6";
export const url=new URL("../icons/hearing_aid_disabled_left.svg?v=922a38a3d81d9e0001dc61fd320230ddda1d1cc0f81cff50b8b2075b3cc93203",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
