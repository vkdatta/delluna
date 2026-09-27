export const name="reorder-fill";
export const id="dl_0b30655d5114b0e1a16c";
export const url=new URL("../icons/reorder-fill.svg?v=4acb39fdd93d7936f8c543eed6cd27617530b98ef78d622f91c83dda4c83c0e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
