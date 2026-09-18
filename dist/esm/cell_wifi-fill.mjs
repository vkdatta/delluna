export const name="cell_wifi-fill";
export const id="dl_5869a215e536472ea649";
export const url=new URL("../icons/cell_wifi-fill.svg?v=914ee2db5ef4f6a0256960dd2d83e4d57e65c2a9090a74603e653f7c5b2cf237",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
