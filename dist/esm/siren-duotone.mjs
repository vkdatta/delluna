export const name="siren-duotone";
export const id="dl_b556b6b5ceb33dd252c1";
export const url=new URL("../icons/siren-duotone.svg?v=cc1d1c844abc3362713e50351a240d5890b80a2275d7515d746267321afbc7c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
