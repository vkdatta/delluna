export const name="drop-fill";
export const id="dl_cb4169fe3c224e4092a3";
export const url=new URL("../icons/drop-fill.svg?v=a10170bd775773cfcec1a2d4d085ee774aa0d92c54a2cd5d66686cfc8378910c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
