export const name="recent_patient";
export const id="dl_b3d8b9714244413a8577";
export const url=new URL("../icons/R/recent_patient.svg?v=5321d149764a19fce520613b20684ca966c4abaab372c39cb7544caa88253340",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
