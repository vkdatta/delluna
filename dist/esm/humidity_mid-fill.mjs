export const name="humidity_mid-fill";
export const id="dl_6694b3706ad01fc22876";
export const url=new URL("../icons/humidity_mid-fill.svg?v=e544160b6aabb91e3a553c731cfb166411a2744f2468cdcc7f5fc20e49af91fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
