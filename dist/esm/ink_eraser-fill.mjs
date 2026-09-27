export const name="ink_eraser-fill";
export const id="dl_bb5dc3ca4113722efa8c";
export const url=new URL("../icons/ink_eraser-fill.svg?v=30d3f46470711d3da1221f1f1bf232583652590d5974b521d31c697e2ce9b9a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
