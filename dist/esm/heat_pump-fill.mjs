export const name="heat_pump-fill";
export const id="dl_b5133382e63105f4a7c6";
export const url=new URL("../icons/heat_pump-fill.svg?v=719707e6241b41d41b357d32f177e6ed66008365dad089112bc373b68b5e13ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
