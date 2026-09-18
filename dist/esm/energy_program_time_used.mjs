export const name="energy_program_time_used";
export const id="dl_75411b79266442d6a709";
export const url=new URL("../icons/energy_program_time_used.svg?v=97395d8fe6e12f5a8e7e5c7ad9daf24b9d84a8246a8b3f6b48b74b15717708c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
