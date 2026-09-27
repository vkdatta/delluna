export const name="widgets-fill";
export const id="dl_53919e2854c1733442c2";
export const url=new URL("../icons/widgets-fill.svg?v=6b747a10154ef58013e88f761da93bf39c49be509aef39526a96614a4cc4366b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
