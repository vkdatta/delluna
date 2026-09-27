export const name="target_check-fill";
export const id="dl_797990a77cee763d0c25";
export const url=new URL("../icons/target_check-fill.svg?v=28feb64d3deabd2d838e2f3da727ec5e321a23a2230277ece50e274ad16436a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
