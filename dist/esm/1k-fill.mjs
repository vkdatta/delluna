export const name="1k-fill";
export const id="dl_2e61991e20f1e8b382f7";
export const url=new URL("../icons/1k-fill.svg?v=d6755684b81480681c9732a1451e4ab3329def5fd35639be3d00a768995a16f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
