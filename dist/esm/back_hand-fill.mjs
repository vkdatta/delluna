export const name="back_hand-fill";
export const id="dl_b02acd10155ed337cf17";
export const url=new URL("../icons/back_hand-fill.svg?v=e0c53f5fc1c24a27857b7ca610dc1002f9a8f810c9b9cb7a8a9f7bb40735aed4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
