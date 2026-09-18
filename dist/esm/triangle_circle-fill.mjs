export const name="triangle_circle-fill";
export const id="dl_68614a85bba24e27a755";
export const url=new URL("../icons/T/triangle_circle-fill.svg?v=afd9b6efec737e58883d8d3e054d9001aac446c0459a7bd82002a6a51055124b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
