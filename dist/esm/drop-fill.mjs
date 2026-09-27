export const name="drop-fill";
export const id="dl_cb4169fe3c224e4092a3";
export const url=new URL("../icons/drop-fill.svg?v=f4f9143de39c642b1ed13e0e1a25ac186b733d8f840961411c3ceaa6bd40b546",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
