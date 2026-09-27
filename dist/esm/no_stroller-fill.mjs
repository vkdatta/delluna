export const name="no_stroller-fill";
export const id="dl_23579146ae8dd0424c64";
export const url=new URL("../icons/no_stroller-fill.svg?v=33da0032d81474dde5087ed0343725bed84e9ff27037f780bec74bcb68cc503f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
