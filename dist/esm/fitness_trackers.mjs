export const name="fitness_trackers";
export const id="dl_79352b71b646a49719ac";
export const url=new URL("../icons/fitness_trackers.svg?v=b2ffe46159dcbafd4731a1e6a3d00c089f61ebee4359c6f29c07d0e1bc8ac923",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
