export const name="lock_open_right-fill";
export const id="dl_60759cf8b8130ab14e18";
export const url=new URL("../icons/lock_open_right-fill.svg?v=5a44786a796474e2f5434bd84c4115b0ed30b3446c58ee7589558eba9d335c0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
