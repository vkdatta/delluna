export const name="drag_indicator-fill";
export const id="dl_a19b12ee4167458a10fa";
export const url=new URL("../icons/drag_indicator-fill.svg?v=b8890453bfa31f87a61c5ed93ed76a896df108763822dc4705e196d59214d90e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
