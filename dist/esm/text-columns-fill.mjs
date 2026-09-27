export const name="text-columns-fill";
export const id="dl_e3d08a954c3b4f628370";
export const url=new URL("../icons/text-columns-fill.svg?v=e993193f266a1f47fcc1c39c63211ba94dc6596b89688377f0afbb8a0fb9a8d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
