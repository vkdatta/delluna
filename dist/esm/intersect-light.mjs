export const name="intersect-light";
export const id="dl_ce4c6623c1994684b82e";
export const url=new URL("../icons/intersect-light.svg?v=e670ce84af31285856f2df0167f5f85d3ad8feb7186012f8f7a704693e87e401",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
