export const name="cloud_off-fill";
export const id="dl_e3884b219fcb561c322c";
export const url=new URL("../icons/cloud_off-fill.svg?v=079a5fca77ec8b0269da11cbeb17ccbf1d0b49b05c6b5a312d9ef122f8a4da35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
