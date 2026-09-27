export const name="sim-card-fill";
export const id="dl_a0487bf7b43f818c8ff3";
export const url=new URL("../icons/sim-card-fill.svg?v=b5efa4c7afe36691b92a152150edd54dee8d4123c713478576b46ecb3e6c2996",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
