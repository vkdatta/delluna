export const name="location_searching-fill";
export const id="dl_c38464dce47808b865f3";
export const url=new URL("../icons/location_searching-fill.svg?v=95b2732b2b425142a5456f60a793165a31b30809346e095c934437aa120c8639",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
