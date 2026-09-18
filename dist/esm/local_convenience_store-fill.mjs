export const name="local_convenience_store-fill";
export const id="dl_d5e85f37e6184ef09583";
export const url=new URL("../icons/local_convenience_store-fill.svg?v=53f010cb7a28ef909122986223a3b8853ff1543d5aef70e10cf3586de14b390b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
