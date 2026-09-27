export const name="move_item-fill";
export const id="dl_7728b5426e8cda08a06d";
export const url=new URL("../icons/move_item-fill.svg?v=49f5c4016a8a06b2bcf4ecf74ffb8fe2ceac40c52154fec92834d50cfe2276bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
