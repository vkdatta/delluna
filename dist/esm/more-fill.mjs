export const name="more-fill";
export const id="dl_7eb75c4405072488258a";
export const url=new URL("../icons/more-fill.svg?v=ea1a7d44efc7b8919fd12925cea75d6563f431ce93dba3139d80ec97dd8c8527",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
