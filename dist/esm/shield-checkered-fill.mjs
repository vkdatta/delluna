export const name="shield-checkered-fill";
export const id="dl_9e2b3ee37d0504d18cf8";
export const url=new URL("../icons/shield-checkered-fill.svg?v=553d49cb22462dbfe5f4213ed5491e109ab7d20df90c6af9795b6fa7acfecebd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
