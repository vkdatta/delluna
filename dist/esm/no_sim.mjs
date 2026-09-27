export const name="no_sim";
export const id="dl_e63d231311776af3d0ef";
export const url=new URL("../icons/no_sim.svg?v=5f862ba6708430c549faa7a596f0e851c796e0437195521ed2e76c0bf94e2bcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
