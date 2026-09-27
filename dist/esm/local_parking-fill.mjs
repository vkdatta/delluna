export const name="local_parking-fill";
export const id="dl_167ca5718518962c324f";
export const url=new URL("../icons/local_parking-fill.svg?v=8010e77d68a14213c55a360618dfb944ebb6489b0820e9f3f59252683464b548",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
