export const name="move_to_inbox";
export const id="dl_dcb67c1b98d5ecd68e6b";
export const url=new URL("../icons/move_to_inbox.svg?v=4ea41d416202b46490ec1c3d4fb90351d32bf581715e9e6d5e0b96becce826bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
