export const name="number-square-three-fill";
export const id="dl_fb6eebee269442748447";
export const url=new URL("../icons/number-square-three-fill.svg?v=73ec94f10952a55e241a3f3770e25ac4d0016164be66e885ff532975ffa54d55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
