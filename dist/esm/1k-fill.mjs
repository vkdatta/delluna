export const name="1k-fill";
export const id="dl_2e9b10b701db4d4c8ff9";
export const url=new URL("../icons/1/1k-fill.svg?v=d6755684b81480681c9732a1451e4ab3329def5fd35639be3d00a768995a16f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
