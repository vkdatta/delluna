export const name="door_back-fill";
export const id="dl_13d35e3d341b052fc025";
export const url=new URL("../icons/door_back-fill.svg?v=9550766b23bdc084bb88d8167593d676cf12f54dc41a45e25f8eea11922264a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
