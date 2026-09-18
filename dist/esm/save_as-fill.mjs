export const name="save_as-fill";
export const id="dl_c62a3ba7e1634e74abcb";
export const url=new URL("../icons/save_as-fill.svg?v=6c0b1c27b071504f56db40909c6a786d3a855e0156221360d92dd17b14aac43f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
