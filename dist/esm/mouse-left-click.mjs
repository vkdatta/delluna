export const name="mouse-left-click";
export const id="dl_36adfc5458bb449b9d1a";
export const url=new URL("../icons/mouse-left-click.svg?v=eb094693211000a62fe3db48a2332a2b67e3d7759bbbed6de28e4f9e9786a6a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
