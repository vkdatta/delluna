export const name="grid_3x3-fill";
export const id="dl_ee02cd53678ea9cf4708";
export const url=new URL("../icons/grid_3x3-fill.svg?v=153989d8f10681d0f34fbf1e1520e757716e395a25500ef9da783b9614113bf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
