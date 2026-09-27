export const name="hardware-fill";
export const id="dl_557fe25a4161cd0238fb";
export const url=new URL("../icons/hardware-fill.svg?v=b356efe19769bcce94cd3a65f3647b4baf000e0daefdade58d7d2609386b00b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
