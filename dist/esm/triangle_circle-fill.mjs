export const name="triangle_circle-fill";
export const id="dl_c76e92b4c4b4ec3ea0d8";
export const url=new URL("../icons/triangle_circle-fill.svg?v=afd9b6efec737e58883d8d3e054d9001aac446c0459a7bd82002a6a51055124b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
