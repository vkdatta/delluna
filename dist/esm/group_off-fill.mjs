export const name="group_off-fill";
export const id="dl_ebfc5bf914d1d1116bab";
export const url=new URL("../icons/group_off-fill.svg?v=11efb19694be8c4c033207137f87bc7d4f3675f5b425329e43b8ad1660698148",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
