export const name="visibility_lock-fill";
export const id="dl_e4e3d89900827c9a6272";
export const url=new URL("../icons/visibility_lock-fill.svg?v=377b2e438f8460fee05720599220ce602f200f72559f4bf5b5a24fe2dba8c054",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
